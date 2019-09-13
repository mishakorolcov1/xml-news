var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("app/sass/*.sass")
  .pipe(sass())
  .pipe(gulp.dest("public/css"))
  .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        server: {
          baseDir: "./public/",
          port: '3000'
        }
    });

    gulp.watch("app/sass/*.sass", gulp.series('sass'));
    gulp.watch("public/*.html").on('change', browserSync.reload);
});

// gulp.task('default', ['serve']);
