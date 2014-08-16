var gulp = require('gulp');

var jade = require('gulp-jade');
var less = require('gulp-less');
var bump = require('gulp-bump');

var pkg = ['./package.json'];
var styles = ['./less/main.less'];
var markup = ['./templates/*.jade'];


gulp.task('bump:patch', function(){
	gulp.src(pkg)
		.pipe(bump())
		.pipe(gulp.dest('./'));
});

gulp.task('bump:minor', function(){
	gulp.src(pkg)
		.pipe(bump({type: 'minor'}))
		.pipe(gulp.dest('./'));
});

gulp.task('bump:major', function(){
	gulp.src(pkg)
		.pipe(bump({type: 'major'}))
		.pipe(gulp.dest('./'));
});

gulp.task('jade', function(){
	gulp.src(markup)
		.pipe(jade())
		.pipe(gulp.dest('./dist'));
});

gulp.task('less', function(){
	gulp.src(styles)
		.pipe(less())
		.pipe(gulp.dest('./css/'));
});

gulp.task('watch', function(){
	gulp.watch(markup, ['jade']);
	gulp.watch(styles, ['less']);
});


gulp.task('default', ['jade', 'less']);
