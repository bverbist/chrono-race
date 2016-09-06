import gulp from 'gulp';
import {paths, files} from '../config';

export const copyImg = 'copyImg';
export const copySystemJs = 'copySystemJs';
export const copyJspmConfJs = 'copyJspmConfJs';

gulp.task(copyImg, () =>
    gulp.src(files.img)
        .pipe(gulp.dest(paths.imgDist))
);

gulp.task(copySystemJs, () =>
    gulp.src('jspm_packages/system.js')
        .pipe(gulp.dest('dist/jspm_packages'))
);

gulp.task(copyJspmConfJs, () =>
    gulp.src('jspm.conf.js')
        .pipe(gulp.dest('dist'))
);