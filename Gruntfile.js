/**
 * Created by mengxt on 2015/3/12.
 */
module.exports = function(grunt){
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        copy: {
            cp: {
                src: 'src/index.html',
                dest: 'dest/index.html'
            },
            cpjs: {
                src: 'src/index.js',
                dest: 'dest/index.js'
            }
        }
    });
}