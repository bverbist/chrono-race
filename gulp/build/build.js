import gulp from 'gulp';
import {clean} from '../prepare/clean';
import {test} from '../test/test';
import {bundleApp} from './bundleApp';

export const build = 'build';

gulp.task(build, gulp.series(
    clean,
    test,
    bundleApp
));
