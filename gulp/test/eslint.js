import gulp from 'gulp';
import gulpif from 'gulp-if';
import gulpEslint from 'gulp-eslint';
import {fileGroups} from '../config';

export const eslint = 'eslint';
export const eslintNoFail = 'eslintNoFail';

const lint = (isFailAfterLintError) =>
    gulp.src(fileGroups.jsToLint)
        .pipe(gulpEslint())
        .pipe(gulpEslint.format())
        .pipe(gulpif(isFailAfterLintError, gulpEslint.failAfterError()));

gulp.task(eslint, () =>
    lint(true)
);

gulp.task(eslintNoFail, () =>
    lint(false)
);
