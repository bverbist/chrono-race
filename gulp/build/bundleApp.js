import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import jspm from 'gulp-jspm';
import rename from 'gulp-rename';
import inject from 'gulp-inject';
import {dirs, fileNames, files} from '../config';

export const bundleApp = 'bundleApp';
export const injectBundledApp = 'injectBundledApp';

gulp.task(bundleApp, () =>
    gulp.src(files.mainAppFile)
        .pipe(sourcemaps.init())
        .pipe(jspm({
            selfExecutingBundle: false,
            minify: true,
            mangle: true,
            lowResSourceMaps: true,
            sourceMaps: false
        }))
        .pipe(rename(fileNames.bundledAppJs))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dirs.dist))
);

gulp.task(injectBundledApp, () =>
    gulp.src(files.indexHtml)
        .pipe(inject(gulp.src(files.bundledAppJs, {read: false}), {
            ignorePath: `/${dirs.dist}`,
            starttag: '<!-- inject:app:{{ext}} -->'
        }))
        .pipe(gulp.dest(dirs.dist))
);