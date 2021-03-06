import gulp from 'gulp';
import browserSync from 'browser-sync';
import {dirs, files} from '../config';

export const serve = 'serve';

gulp.task(serve, (callback) =>
    browserSync
        .create('devServer')
        .init({
            port: 8004,
            ui: false,
            ghostMode: false,
            server: [dirs.base],
            files: [
                files.css,
                files.indexHtml,
                files.js
            ]
        }, callback)
);
