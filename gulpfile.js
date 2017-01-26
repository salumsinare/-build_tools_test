var gulp=require('gulp');
var sass=require('gulp-sass');
var less=require('gulp-less');
var uglify=require('gulp-uglify');

gulp.task('sass',function(){
   return gulp.src('assets/src/scss/*.scss')
          .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
          .pipe(gulp.dest('assets/dist/css'));
});

gulp.task('less',function(){
   return gulp.src(['assets/src/less/*.less'])
          .pipe(less())
          .pipe(gulp.dest('assets/dist/css'));
});

gulp.task('scripts',function(){
   return gulp.src('assets/src/js/*.js')
          .pipe(uglify())
          .pipe(gulp.dest('assets/dist/js'));
});

gulp.task('default',['sass','scripts','less'], function() {
	  return gulp.watch('assets/src/**/*',['sass','scripts','less']);
});


