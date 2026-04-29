import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
    path,
    gulp,
    plugins
};

import { copy, copyImages } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";

async function watcher() {
    await new Promise((resolve) => {
        gulp.watch(path.watch.assets, copy);
        gulp.watch(path.watch.images, copyImages);
        gulp.watch(path.watch.html, html);
        gulp.watch(path.watch.scss, scss);
        resolve();
    });
}

const dev = gulp.series(reset, gulp.parallel(copy, copyImages, html, scss), gulp.parallel(watcher, server));

gulp.task('default', dev);