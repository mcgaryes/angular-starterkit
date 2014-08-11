var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var rsass = require("gulp-ruby-sass");
var watch = require("gulp-watch");
var mainBowerFiles = require('main-bower-files');

gulp.task("dev", function() {

	nodemon({
		script: "server.js",
		execMap: {
			js: "node --harmony"
		},
		watch: ["**/*.*js", "!app"],
	}).on("restart");

	watch({
		glob: "./app/scss/**/*.scss"
	}, function(files) {
		return gulp.src("./app/scss/styles.scss")
			.pipe(rsass({
				sourcemap: false,
			}))
			.on('error', function(err) {
				console.log(err.message);
			})
			.pipe(gulp.dest("./app/assets/css/"));
	});
});

gulp.task('bower', function() {
	return gulp.src(mainBowerFiles(), { base: './bower_components' }).pipe(gulp.dest("./app/assets/js/"))
});