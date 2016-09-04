import gulp from 'gulp';
import {prepare} from '../prepare/prepare';
import {eslint} from './eslint';

export const test = 'test';

gulp.task(test, gulp.series(
    prepare,
    eslint
));
