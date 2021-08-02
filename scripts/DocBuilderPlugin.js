/* eslint-disable no-console */
const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const PLUGIN_NAME = 'DocBuilderPlugin';

class DocBuilderPlugin {
    constructor(options) {
        /** @type {HtmlWebpackOptions} */
        this.options = options || {};
        this.shouldBuild = true;
    }

    // eslint-disable-next-line class-methods-use-this
    apply(compiler) {
        const rootPath = process.cwd();
        const configFile = path.join(rootPath, 'jsdoc2md.json');

        compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
            compilation.hooks.additionalAssets.tap(PLUGIN_NAME, () => {
                if (!this.shouldBuild) {
                    this.shouldBuild = true;
                    return;
                }
                const { packages } = this.options;
                if (!packages) return;
                packages.forEach(({ name, srcPath, outputPath, templatePath, partials }) => {
                    const packagePath = path.join(rootPath, 'packages', name);
                    const outputDir = path.join(packagePath, outputPath);
                    if (!fs.existsSync(outputDir)) {
                        fs.mkdirSync(outputDir, { recursive: true });
                    }
                    const templateFile = path.join(packagePath, templatePath);

                    try {
                        /* get template data */
                        const templateData = jsdoc2md.getTemplateDataSync({
                            files: glob.sync(`${packagePath}/${srcPath}/**/*.+(ts|js)`),
                            configure: configFile,
                        });

                        /* reduce templateData to an array of class names */
                        const classNames = templateData.reduce((classNames, identifier) => {
                            if (identifier.kind === 'class') classNames.push(identifier.name);
                            return classNames;
                        }, []);

                        /* create a documentation file for each class */
                        classNames.forEach((className) => {
                            const output = jsdoc2md.renderSync({
                                data: templateData,
                                name: className,
                                template: fs.readFileSync(templateFile, 'utf8'),
                                partial: `${packagePath}/${partials}`,
                            });
                            fs.writeFileSync(
                                path.resolve(outputDir, `${className}.story.mdx`),
                                output,
                            );
                        });
                    } catch (e) {
                        console.error('Could not parse docs.');
                        console.error(e);
                    }
                });
                this.shouldBuild = false;
            });
        });
    }
}

module.exports = DocBuilderPlugin;
