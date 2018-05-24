var gulp = require("gulp");
var sass = require("gulp-sass");
var less = require("gulp-less");

gulp.task("sassTocss",function() {
	return gulp.src("./app/sass/*.+(sass|scss)")
			.pipe(sass())
			.pipe(gulp.dest("./app/css"));

});
gulp.task("lessTocss",function() {
	return gulp.src("./app/less/*.less")
			.pipe(less())
			.pipe(gulp.dest("./app/css"));
});
gulp.task("watch-task",function() {
	gulp.watch("./app/sass/*.+(sass|scss|)",["sassTocss"]);
	gulp.watch("./app/less/*.less",["lessTocss"]);
});