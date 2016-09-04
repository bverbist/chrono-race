import './argv';

export const dirs = {
    src: 'src',
    dist: 'dist',
    gulp: 'gulp',
    nodeModules: 'node_modules'
};

export const paths = {
    app: `${dirs.src}/app`,
    css: `${dirs.src}/css`,
    jspmPackages: `${dirs.src}/jspm_packages`,
    sass: `${dirs.src}/sass`
};

export const fileNames = {
    bundledAppJs: 'chrono-race.js',
    gulpfile: 'gulpfile.babel.js'
};

export const files = {
    bundledAppJs: `${dirs.dist}/${fileNames.bundledAppJs}`,
    css: `${paths.css}/*.css`,
    gulpTasks: `${dirs.gulp}/**/*.js`,
    html: `${dirs.src}/**/*.html`,
    indexHtml: `${dirs.src}/index.html`,
    js: `${paths.app}/**/*.js`,
    jsSpec: `${paths.app}/**/*.spec.js`,
    jsNoSpec: `${paths.app}/**/!(*.spec).js`,
    jspmConfig: `${dirs.src}/jspm.conf.js`,
    mainAppFile: `${paths.app}/app.js`,
    sass: `${dirs.sass}/*.scss`,
    sassMain: `${paths.sass}/app.scss`
};

export const fileGroups = {
    jsToLint: [fileNames.gulpfile, files.gulpTasks, files.js]
};
