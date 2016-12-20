/**
 * generator-ts-lib 
 */

var path = require('path'),
    chalk = require('chalk'),
    yeoman = require('yeoman-generator'),
    yosay = require('yosay');

var TsLibPackage = yeoman.Base.extend({
    info: function() {
        this.log(chalk.green(
            'I am going to build your app!'
        ));
    },

    generateBasic: function() {
        this.directory('src', 'src');
        // this.directory('build', 'build');
        this.directory('test', 'test');
        // this.directory('example', 'example');
        this.copy('package.json', 'package.json');
        this.copy('.gitignore', '.gitignore');
        this.copy('.npmignore', '.mpmignore');
        this.copy('README.md', 'README.md');
    },

    generateClient: function() {
        this.sourceRoot(path.join(__dirname, 'templates'));
        this.destinationPath('./');
    },

    install: function() {      //安装依赖
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    },

    end: function() {
        this.log(yosay(
            'Your app has been created successfully!'
        ));
    }
});

module.exports = TsLibPackage;