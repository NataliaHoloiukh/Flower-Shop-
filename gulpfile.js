const project = 'dist';
const source = 'src';

let fs = require('fs');

let path = {

    build: {
        html: project + '/',
        css: project + '/css/',
        js: project + '/js/',
        img: project + '/assets/img/',
        fonts: project + '/assets/fonts/',
    },
    src: {
        html: [source + '/*.html','!'+ source + '/_*.html'],
        css: source + '/scss/style.scss',
        js: source + '/js/script.js',
        img: source + '/assets/img/**/*.{jpg,jpeg,svg,png,ico}',
        fonts: source + '/assets/fonts/*.{otf,ttf,woff,woff2}',
    },
    watch: {
        html: source + '/**/*.html',
        css: source + '/scss/**/*.scss',
        js: source + '/js/**/*.js',
        img: source + '/assets/img/**/*.{jpg,jpeg,svg,png,ico}'
    },
    clean: './' + project + '/'
}

let {src, dest} = require('gulp');
let gulp = require('gulp');
let browsersync = require('browser-sync').create();
let fileinclude = require('gulp-file-include');
let del = require('del');
let scss = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let group_media = require('gulp-group-css-media-queries');
let clean_css = require('gulp-clean-css');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify-es').default;
let imagemin = require('gulp-imagemin');
let ttf2woff = require('gulp-ttf2woff');
let ttf2woff2 = require('gulp-ttf2woff2');




function browserSync(){
    browsersync.init({
        server: {
            baseDir: './' + project + '/'
        },
        port: 3004,
        notify: false
    })
}

function html() {
    return src(path.src.html)
    .pipe(fileinclude())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}


function css(){
    return src(path.src.css)
    .pipe(
        scss({
            outputStyle: 'expanded'
        })
    )
    .pipe(
        group_media()
    )
    .pipe(
        autoprefixer({
            overrideBrowserslist: ['last 5 versions'],
            cascade: true
        })
    )
    .pipe(dest(path.build.css))
    .pipe(clean_css())
    .pipe(
        rename({
            extname: '.min.css'
        })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}


function js() {
    return src(path.src.js)
    .pipe(fileinclude())
    .pipe(dest(path.build.js))
    .pipe(
        uglify()
    )
    .pipe(
        rename({
            extname: '.min.js'
        })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}


function images() {
    return src(path.src.img)
    .pipe(
        imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            optimizationLevel: 3
        })
    )
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
}

function fonts(){
    src(path.src.fonts)
        .pipe(ttf2woff())
        .pipe(dest(path.build.fonts))
    return src(path.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(path.build.fonts))
}

function fontsStyle(){
    let file_content = fs.readFileSync(source + '/scss/fonts.scss');
    if (file_content == '') {
        fs.writeFile(source + '/scss/fonts.scss', '', cb);
        return fs.readdir(path.build.fonts, function (err, items) {
            if (items) {
                let c_fontname;
                for (var i = 0; i < items.length; i++) {
                    let fontname = items[i].split('.');
                    fontname = fontname[0];
                    if (c_fontname != fontname) {
                        fs.appendFile(source + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
                    }
                    c_fontname = fontname;
                }
            }
        })
    }
}


function cb() {

}


function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}


function clean() {
    return del(path.clean);
}


let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts), fontsStyle);
let watch = gulp.parallel(build, watchFiles, browserSync);


exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;