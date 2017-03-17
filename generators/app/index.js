/**
 * generator-ts-lib 
 */

var path = require('path'),
    chalk = require('chalk'),
    yeoman = require('yeoman-generator'),
    yosay = require('yosay'),
    fs = require('fs'),
    path = require('path'),
    templatesPath = path.join(__dirname, 'templates');

function copyFilesOfDir(dirPath) {
    var self = this;

    fs.readdir(dirPath, function(err, files) {
        if (err) {
            return;
        }

        files.map(function (file) {
            var newPath = path.join(dirPath, file);

            if (fs.lstatSync(newPath).isDirectory()) {
                self.directory(newPath, file);
                copyFilesOfDir.call(self, newPath);
            } else {
                self.copy(newPath, file);
            }
        });
    });
}

var TsLibPackage = yeoman.Base.extend({
    info: function() {
        this.log(chalk.green(
            'Generating typescript library now: '
        ));
    },

    generateBasic: function() {
        copyFilesOfDir.call(this, templatesPath);
    },

    generateClient: function() {
        this.sourceRoot(templatesPath);
        this.destinationPath('./');
    },

    install: function() {
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