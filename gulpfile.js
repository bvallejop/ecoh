const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const cssmin = require("gulp-cssmin");
const jsmin = require("gulp-terser");
const gzip = require("gulp-gzip");

function minifyHtml(cb) {
  gulp.src("build/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build/"));
  cb();
}

function compressHtml(cb) {
  gulp.src("build/**/*.html")
    .pipe(gzip())
    .pipe(gulp.dest("build/"));
  cb();
}

function minifyCss(cb) {
  gulp.src("build/stylesheets/*.css")
    .pipe(cssmin())
    .pipe(gulp.dest("build/stylesheets/"));
  cb();
}

function compressCss(cb) {
  gulp.src("build/stylesheets/*.css")
    .pipe(gzip())
    .pipe(gulp.dest("build/stylesheets/"));
  cb();
}

function minifyJs(cb) {
  gulp.src("build/javascripts/*.js")
  .pipe(jsmin())
  .pipe(gulp.dest("build/javascripts/"));
  cb();
}

function compressJs(cb) {
  gulp.src("build/javascripts/*.js")
    .pipe(gzip())
    .pipe(gulp.dest("build/javascripts/"));
  cb();
}

exports.default = gulp.series(
  minifyHtml,
  compressHtml,
  minifyCss,
  compressCss,
  minifyJs,
  compressJs,
);