import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import {files, paths} from '../config';

export const sass = 'sass';

gulp.task(sass, () =>
    gulp
        .src(files.sassMain)
        .pipe(sourcemaps.init())
        .pipe(gulpSass({
            outputStyle: 'expanded'
        }).on('error', gulpSass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.css))
);
