module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    less: {

      dev: {

        src: './less/main.less',
        dest: './css/main.css'
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          './dist/index.html': './index.html'
        }
      },

      dev: {
        files: {
          './dist/index.html': './index.html'
        }
      }
    },

    csslint: {

      options: {
        /*
            Unfortunately, we're turning off vendor prefixes here,
            as there is an issue with the linter incorrectly flagging keyfram animations
            May break this out in the future.
         */
        'box-sizing': false,
        'box-model': false,
        'adjoining-classes': false,
        'regex-selectors': false,
        'unique-headings': false,
        'vendor-prefix': false
      },

      src: ['css/*.css']
    },

    cssmin: {
      add_banner: {
        options: {
          banner: "/* OtterStyle CSS Generated with Grunt. Brought to you by Otter the cat*/"
        },
        files: {
          './dist/css/main.css': './css/main.css'
        }
      },
      minify: {
        expand: true,
        cwd: './css/',
        src: ['*.css', '!*.min.css'],
        dest: './dist/css/min',
        ext: '.min.css'
      }
    },

    watch: {

      css: {

        files: 'less/*',
        tasks: ['css', 'htmlmin']
      }
    }
  });

  // Load Grunt Tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Defined task(s).
  grunt.registerTask('default', ['less', 'csslint', 'htmlmin', 'cssmin']);
  grunt.registerTask('minify', ['htmlmin:dist', 'less', 'cssmin']);
  grunt.registerTask('watch', ['watch']);
};