import gulp from 'gulp';
import browserSync from 'browser-sync';
import {dirs} from '../config';

export const serveBuild = 'serveBuild';

gulp.task(serveBuild, (callback) =>
    browserSync
        .create('distServer')
        .init({
            port: 8006,
            ui: false,
            ghostMode: false,
            server: [dirs.dist],
            files: []
        }, callback)
);
