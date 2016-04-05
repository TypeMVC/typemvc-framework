module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);

    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            build: {
                src: ["src/TSFramework.ts"],
                out: "build/TSFramework.js",
                options: {
                    target: 'es5',
                    module: 'commonjs',
                    sourceMap: false,
                    declaration: true,
                    removeComments: true,
                    htmlModuleTemplate: '<%= filename %>',
                    htmlVarTemplate: '<%= ext %>'
                }
            },
            build_test: {
                src: ["test/integration/app.ts"],
                out: "test/integration/.build/app.js",
                options: {
                    target: 'es5',
                    module: 'commonjs',
                    sourceMap: false,
                    declaration: true,
                    removeComments: true,
                    htmlModuleTemplate: '<%= filename %>',
                    htmlVarTemplate: '<%= ext %>'
                }
            }
        },
        file_append: {
            test: {
                files: {
                    'test/integration/.build/app.js': {
                        prepend: "var TS = require('../../../build/TSFramework.js');\n\n",
                        append: "\nmodule.exports = app;"
                    }
                }
            }
        }
    });

    grunt.registerTask('build_framework', [ 'ts:build' ]);
    grunt.registerTask('build_test', [ 'ts:build_test', 'file_append:test' ]);

    grunt.registerTask('default', [ 'build_framework' ]);
    grunt.registerTask('test', [ 'build_framework', 'build_test' ]);
};
