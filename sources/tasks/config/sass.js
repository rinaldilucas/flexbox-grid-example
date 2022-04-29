var Fiber = require('fibers');
var sass = require('sass');

module.exports = function (grunt) {
    grunt.config.set('sass', {
        options: {
            implementation: sass,
            fiber: Fiber,
            includePaths: ['./node_modules/'],
            outputStyle: 'compressed',
            sourceMap: true,
            keepSpecialComments: 0,
            quietDeps: true,
        },
        watch: {
            files: {
                '<%= config.develop %>/assets/styles/main.css': '<%= config.source %>/styles/main.scss',
            },
        },
        dist: {
            options: {
                outputStyle: 'compressed',
                sourceMap: false,
            },
            files: {
                '<%= config.dist %>/assets/styles/main.css': '<%= config.source %>/styles/main.scss',
            },
        },
    });
};
