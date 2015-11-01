/* --------- plugins --------- */

var 
	gulp        = require("gulp"),
	browserSync = require("browser-sync"),
	compass     = require('gulp-compass'),
	jade        = require("gulp-jade"),
	plumber     = require("gulp-plumber"), // Плагин, который не позвалаяет останавливать таск после ошибки.
	concatCSS   = require("gulp-concat-css");

var
	paths = {
		jade : {
			watchPaths  : 'app_dev/jade/**/*.jade', // Сюда смотрит вотчер.
			compile     : 'app_dev/jade/*.jade', // Файлы, которые нужно компилировать
			destination : 'app_dev/' // Путь, куда складываются компилированные файлы 
		},

		compass : {
			location    : 'app_dev/styles/sass/*.sass', // Вотчер смотрит сюда.
			configFile  : 'config.rb',
			cssFolder   : 'app_dev/styles',
			sassFolder  : 'app_dev/styles/sass',
			imgFolder   : 'app_dev/img'
		},

		concatCSS : {
			watchPath   : 'app_dev/styles/*.css', // Вотчим сюда и конкатинируем эти файлы.
			resultFile  : 'main.css', // Название итогового файла.
			cssDir      : 'app_dev/css/' // Путь директории для итогового файла.
		},

		browserSync : {
			baseDir     : 'app_dev/', // Папка, где находится index.html, который запускается при старте browser-sync.
			watchPaths  : ['*.html', 'app_dev/css/**/*.css', 'app_dev/js/**/*.js'] // Отслеживаемые файлы, при изменеии которых перезапускается browser-sync.
		}
	};

/* --------- configs --------- */

var
	conf = {
		browserSync : {
			port: 9000
		}
	};

/* --------- browser sync --------- */

gulp.task("server", function () {
	browserSync({
		port: conf.browserSync.port,
		server: {
			baseDir: paths.browserSync.baseDir
		}
	});
});

/* --------- jade --------- */

gulp.task('jade', function() {
	gulp.src(paths.jade.compile)
		.pipe(plumber())
		.pipe(jade({
			pretty: '\t',
		}))
		.pipe(gulp.dest(paths.jade.destination));
});

/* --------- sass-compass --------- */

gulp.task('compass', function() {
	gulp.src(paths.compass.location)
		.pipe(plumber())
		.pipe(compass({
			config_file: paths.compass.configFile,
			css: paths.compass.cssFolder,
			sass: paths.compass.sassFolder,
			image: paths.compass.imgFolder
		}));
});

/* --------- concat-css --------- */

gulp.task('concatCSS', function() {
	gulp.src(paths.concatCSS.watchPath)
		.pipe(plumber())
		.pipe(concatCSS(paths.concatCSS.resultFile))
		.pipe(gulp.dest(paths.concatCSS.cssDir));
});

/* --------- watch --------- */

gulp.task('watch', function() {
	gulp.watch(paths.jade.watchPaths, ['jade']);
	gulp.watch(paths.compass.location, ['compass']);
	gulp.watch(paths.concatCSS.watchPath, ['concatCSS']);
	gulp.watch(paths.browserSync.watchPaths).on('change', browserSync.reload);
});

/* --------- run --------- */

gulp.task('default', ['jade', 'compass', 'concatCSS', 'server', 'watch']);
