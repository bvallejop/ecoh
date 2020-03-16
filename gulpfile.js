const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const cssmin = require("gulp-cssmin");
const jsmin = require("gulp-uglify");
const gzip = require("gulp-gzip");

function minifyHtml(cb) {
  gulp.src("build/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gzip())
    .pipe(gulp.dest("build/"));
  cb();
}
  
function minifyCss(cb) {
  gulp.src("build/stylesheets/*.css")
    .pipe(cssmin())
    .pipe(gzip())
    .pipe(gulp.dest("build/stylesheets/"));
  cb();
}
  
function minifyJs(cb) {
  gulp.src("build/javascripts/*.js")
    .pipe(jsmin())
    .pipe(gzip())
    .pipe(gulp.dest("build/javascripts/"));
  cb();
}

exports.default = gulp.series(
  minifyHtml,
  minifyCss,
  minifyJs,
);