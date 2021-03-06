var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    name: function () {
        var done = this.async();

        this.prompt({
            type: 'input',
            name: 'projectName',
            message: 'name: ',
            default: this.appname
        }, function (answers) {
            this.projectName = answers.projectName;
            done();
        }.bind(this));
    },

    version: function () {
        var done = this.async();

        this.prompt({
            type: 'input',
            name: 'projectVersion',
            message: 'version: ',
            default: '0.0.1'
        }, function (answers) {
            this.projectVersion = answers.projectVersion;
            done();
        }.bind(this));
    },

    description: function () {
        var done = this.async();

        this.prompt({
            type: 'input',
            name: 'projectDescription',
            message: 'description: '
        }, function (answers) {
            this.projectDescription = answers.projectDescription;
            done();
        }.bind(this));
    },

    buildPackageFile: function () {
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            {
                name: this.projectName,
                version: this.projectVersion,
                description: this.projectDescription
            }
        );
    },

    copyFiles: function () {
        this.directory('files', './');
    },

    install: function () {
        this.npmInstall([
          "alt",
          "autoprefixer-loader",
          "babel",
          "babel-core",
          "babel-eslint",
          "babel-loader",
          "babel-plugin-object-assign",
          "css-animation",
          "css-loader",
          "eslint",
          "eslint-plugin-react",
          "extract-text-webpack-plugin",
          "json-loader",
          "jsx-loader",
          "less",
          "less-loader",
          "node-libs-browser",
          "react",
          "react-hot-loader",
          "react-router",
          "reqwest",
          "superagent",
          "webpack",
          "webpack-dev-server"
        ], {'save': true});
    }

});
