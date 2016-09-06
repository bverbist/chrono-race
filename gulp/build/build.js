import gulp from 'gulp';
import {clean} from '../prepare/clean';
import {test} from '../test/test';
import {bundleApp, injectBundledApp} from './bundleApp';
import {copyImg} from './copy';
import './serveBuild';

export const build = 'build';

gulp.task(build, gulp.series(
    clean,
    test,
    bundleApp,
    gulp.parallel(injectBundledApp, copyImg)
));
