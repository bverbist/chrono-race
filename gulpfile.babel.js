import gulp from 'gulp';
import './gulp/prepare/prepare';
import {test} from './gulp/test/test';
import './gulp/dev/dev';
import './gulp/build/build';

gulp.task('default', gulp.series(test));
