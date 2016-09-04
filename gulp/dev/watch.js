import gulp from 'gulp';
import {files, fileGroups} from '../config';
import {sass} from '../prepare/sass';
import {eslintNoFail} from '../test/eslint';

export const watch = 'watch';

gulp.task(watch, () => {
    gulp.watch(files.sass, gulp.series(sass));
    gulp.watch(fileGroups.jsToLint, gulp.series(eslintNoFail));
});
