import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import jspm from 'gulp-jspm';
import rename from 'gulp-rename';
import {dirs, fileNames, files} from '../config';

export const bundleApp = 'bundleApp';

gulp.task(bundleApp, () =>
    gulp.src(files.mainAppFile)
        .pipe(sourcemaps.init())
        .pipe(jspm({
            selfExecutingBundle: true,
            minify: true,
            mangle: true,
            lowResSourceMaps: true,
            sourceMaps: false
        }))
        .pipe(rename(fileNames.bundledAppJs))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dirs.dist))
);
