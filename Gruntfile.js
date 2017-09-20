"use strict";


module.exports = function(grunt) {
	
  require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		less: {
			style: {
				files: {
					"assets/css/style.css": "assets/less/style.less"
				}
			}
		},

		postcss: {
			options: {
				processors: [
				  require("autoprefixer")({
				  	browsers: ["last 2 versions"]
				  }),
				  require("css-mqpacker")({
				  	sort:true
				  })
				]
			},
			style: {src: "assets/css/*.css"}
		},

		svgmin: {
			symbols: {
				files: [{
					expand: true,
					src: ["assets/img/icons/*.svg"]
				}]
			}
		},

		svgstore: {
			options: {
				svg: {
					style: "display:none"
				},
			},
			symbols: {
				files: {
					"assets/img/symbols.svg": ["assets/img/icons/*.svg"]
				}
			}
		},

		imagemin: {
			images: {
				options: {
					optimizationLevel: 3
				},
				files: [{
					expand: true,
					src: ["assets/img/**/*.{png,jpg,gif}"]
				}]
			}
		},

		browserSync: {
			server: {
				bsFiles: {
					src: ["*.html", "assets/css/*.css"]
				},
				options: {
					watchTask:true,
					server: "."
				}
			}
		},

		watch: {
      style: {
      	files: ["assets/less/**/*.less"],
      	tasks: ["less"]
      }
		}
	});
  
	grunt.registerTask("serve", ["browserSync", "watch"]);
	grunt.registerTask("symbols", ["svgmin", "svgstore"]);

};