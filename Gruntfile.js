
module.exports = function(grunt) {

 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   mocha_casperjs: {
     options: {
     },
     files: {
       src: ['test/**/*']
     }
   },
   express: {
     options: {
       port: '3000'
     },
     dev: {
       options: {
         script: './server.js'
       }
     },
     prod: {
       options: {
         script: './server.js',
         node_env: 'production'
       }
     },
     test: {
       options: {
         script: './server.js'
       }
     }
   },
   jasmine: {
            all: {
                src: [
                    'public/js/**/*.js',
                ],
                options: {
                    'vendor': 'lib/jasmine-2.1.3/**/*.js',
                    'specs': 'spec/**/*.js'
                }
            },
      
        },
  
   jasmine_node: {
     all: ['spec/*.js'],    
     src: ['public/js/**/*.js']
   },
   jshint: {
     all: ['Gruntfile.js', 'spec/**/*.js', 'js/**/*.js']
   },
   watch: {
     all: ['<%= jshint.files %>'],
     tasks: ['jshint']
   }
 });

 grunt.loadNpmTasks('grunt-contrib-jshint');
 grunt.loadNpmTasks('grunt-contrib-jasmine');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-jasmine-node');
 grunt.loadNpmTasks('grunt-mocha-casperjs');
 grunt.loadNpmTasks('grunt-express-server');
 grunt.registerTask('default', ['express:test', 'jasmine', 'mocha_casperjs']);
 grunt.registerTask('hint', ['jshint']);
 grunt.registerTask('jasmine-node', ['jasmine_node']);
 grunt.registerTask('unit', ['jasmine']);
 grunt.registerTask('accept', ['mocha_casperjs']);
 
};
