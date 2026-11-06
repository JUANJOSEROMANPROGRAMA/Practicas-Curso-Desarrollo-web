import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

import { src, dest, watch } from 'gulp'


const sass = gulpSass(dartSass)

/* funcion para crear la carpeta build y el archivo de app.css desde gulpfile */
export function css(done) {

    src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('build/css'))

    done()
}



/* habilitar el modo watch */
export function dev() {



    watch('src/scss/**/*.scss', css)
    
    /* "dev":"gulp dev" */



}