import gulp from 'gulp';
import del from 'del';
import {dirs, paths} from '../config';

export const clean = 'clean';
export const cleanCss = 'cleanCss';
export const cleanDist = 'cleanDist';

gulp.task(cleanCss, () =>
    del(paths.css)
);

gulp.task(cleanDist, () =>
    del(dirs.dist)
);

gulp.task(clean, gulp.parallel(
    cleanCss, cleanDist
));
