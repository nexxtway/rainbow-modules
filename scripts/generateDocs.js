const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const args = process.argv.slice(2);
/* input and output paths */
const packagePath = process.cwd();
const outputPath = path.join(packagePath, './docs/pageObjects');
const configFile = path.join(packagePath, '../../jsdoc2md.json');
const templateFile = path.join(packagePath, './template.hbs');

/* get template data */
const templateData = jsdoc2md.getTemplateDataSync({
    files: glob.sync(`${packagePath}/${args[0]}/*/index.+(ts|js)`),
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
        partial: './handlebars/partials/*.hbs',
    });
    fs.writeFileSync(path.resolve(outputPath, `${className}.story.mdx`), output);
});
