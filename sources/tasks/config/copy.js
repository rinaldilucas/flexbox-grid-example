module.exports = function (grunt) {
    grunt.config.set('copy', {
        dist: {
            files: [
                // html
                {
                    expand: true,
                    cwd: '<%= config.source %>/pages',
                    dest: '<%= config.dist %>/',
                    src: ['**.html'],
                },
            ],
        },
        dev: {
            files: [
                // html
                {
                    expand: true,
                    cwd: '<%= config.source %>/pages',
                    dest: '<%= config.develop %>',
                    src: ['**.html'],
                },
            ],
        },
    });
};
