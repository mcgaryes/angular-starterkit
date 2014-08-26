var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var rsass = require("gulp-ruby-sass");
var watch = require("gulp-watch");

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