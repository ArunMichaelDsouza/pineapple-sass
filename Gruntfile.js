module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            sass: {
                files: ['src/_pineapple-sass.scss'],
                tasks: ['copy'],
                options: {
                    spawn: false,
                },
            },
            test: {
                files: ['test/sass/main.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/', src: ['**'], dest: 'build/'}
                ]
            }
        },
        sass: {
            dist: {
                files: {
                    'test/css/main.css': 'test/sass/main.scss'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['watch']);
};
