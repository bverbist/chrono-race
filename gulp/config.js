import './argv';

export const dirs = {
    base: './',
    app: 'app',
    assets: 'assets',
    dist: 'dist',
    gulp: 'gulp',
    jspmPackages: 'jspm_packages',
    nodeModules: 'node_modules'
};

export const paths = {
    css: `${dirs.assets}/css`,
    img: `${dirs.assets}/img`,
    sass: `${dirs.assets}/sass`
};

export const fileNames = {
    bundledAppJs: 'chrono-race.js',
    gulpfile: 'gulpfile.babel.js'
};

export const files = {
    bundledAppJs: `${dirs.dist}/${fileNames.bundledAppJs}`,
    css: `${paths.css}/*.css`,
    gulpTasks: `${dirs.gulp}/**/*.js`,
    indexHtml: `${dirs.base}/index.html`,
    js: `${dirs.app}/**/*.js`,
    jsSpec: `${dirs.app}/**/*.spec.js`,
    jsNoSpec: `${dirs.app}/**/!(*.spec).js`,
    jspmConfig: `${dirs.base}/jspm.conf.js`,
    mainAppFile: `${dirs.app}/app.js`,
    sass: `${paths.sass}/*.scss`,
    sassMain: `${paths.sass}/app.scss`
};

export const fileGroups = {
    jsToLint: [fileNames.gulpfile, files.gulpTasks, files.js]
};
