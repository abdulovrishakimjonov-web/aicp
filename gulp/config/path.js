import * as nodePath from "path"
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src'

export const path = {
    build: {
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        assets: `${buildFolder}/assets/`,
        images: `${buildFolder}/images/`
    },
    src: {
        scss: `${srcFolder}/scss/main.scss`,
        html: `${srcFolder}/*.html`,
        assets: `${srcFolder}/assets/**/*.*`,
        images: `${srcFolder}/images/*.*`
    },
    watch: {
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        assets: `${srcFolder}/assets/**/*.*`,
        images: `${srcFolder}/images/*.*`
    },
    clean: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}