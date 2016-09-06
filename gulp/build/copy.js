import gulp from 'gulp';
import {paths, files} from '../config';

export const copyImg = 'copyImg';

gulp.task(copyImg, () =>
    gulp.src(files.img)
        .pipe(gulp.dest(paths.imgDist))
);