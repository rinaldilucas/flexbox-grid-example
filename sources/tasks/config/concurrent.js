module.exports = function (grunt) {
    grunt.config.set('concurrent', {
        dev: {
            tasks: ['watch:sass', 'watch:html', 'copy:dev'],
            options: {
                logConcurrentOutput: true,
            },
        },
    });
};
