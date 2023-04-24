const autoprefixer = require("gulp-autoprefixer");
var gulp = require("gulp"),
  concat = require("gulp-concat"),
  sass = require("gulp-sass")(require("sass")),
  pug = require("gulp-pug"),
  livereload = require("gulp-livereload"),
  sourcemaps = require("gulp-sourcemaps"),
  minify = require("gulp-minify");

// uglify = require("gulp-uglify"),

// zip = require("gulp-zip");

gulp.task("css", function () {
  return gulp
    .src(["./stage/css/**/*.css", "./stage/css/**/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/css"))
    .pipe(livereload());
});

gulp.task("html", function () {
  return gulp
    .src("./stage/html/*.pug")

    .pipe(pug())

    .pipe(gulp.dest("dist"))

    .pipe(livereload());
});
gulp.task("js", function () {
  return gulp
    .src("./stage/js/*.js")
    .pipe(concat("main.js"))
    .pipe(minify())
    .pipe(gulp.dest("./dist/js"))
    .pipe(livereload());
});

gulp.task("watch", function () {
  require("./server.js");
  livereload.listen();
  gulp.watch("./stage/html/*.pug", gulp.series("html"));
  gulp.watch(
    ["./stage/css/**/*.css", "./stage/css/**/*.scss"],
    gulp.series("css")
  );
  gulp.watch("./stage/js/*.js", gulp.series("js"));
});
