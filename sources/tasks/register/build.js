module.exports = function (grunt) {
    grunt.registerTask(
        'build', //
        [
            'clean:dist', //
            'sass:dist',
            'cssmin',
            'autoprefixer:dist',
            'copy:dist',
            'htmlmin',
        ],
    );
};
