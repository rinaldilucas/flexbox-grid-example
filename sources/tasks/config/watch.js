module.exports = function (grunt) {
    grunt.config.set('watch', {
        sass: {
            files: ['<%= config.source %>/styles/**'],
            tasks: ['sass:watch', 'autoprefixer:dev'],
            options: {
                atBegin: true,
            },
        },
        html: {
            files: ['<%= config.source %>/**/*.html'],
            tasks: ['copy:dev'],
            options: {
                atBegin: true,
            },
        },
    });
};
