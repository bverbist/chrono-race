import gulp from 'gulp';
import {test} from '../test/test';
import {watch} from './watch';
import {serve} from './serve';

export const dev = 'dev';

gulp.task(dev, gulp.series(
    test,
    gulp.parallel(serve, watch)
));
