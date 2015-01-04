'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      node: {
        src: ['lib/**/*.js', '*.js', 'rest/**/*.js']
      }
    },
    express: {
      test: {
        options: {
          script: 'server.js',
          spawn: true
        }
      }
    },
    watch: {
      node: {
        files: '<%= jshint.node.src %>',
        tasks: ['jshint:node', 'express:test'],
        options: {
          spawn: false,
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');

  // Default task.
  grunt.registerTask('default', ['express:test', 'watch']);
};