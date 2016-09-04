import gulp from 'gulp';
import {sass} from './sass';

export const prepare = 'prepare';

gulp.task(prepare, gulp.series(
    sass
));
