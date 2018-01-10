var gulp = require('gulp');
var markdown = require('gulp-markdown');
var rename = require("gulp-rename");
var wrapper = require('gulp-wrapper');
var ga = require('gulp-ga');

gulp.task('default', function () {
	return gulp.src('README.md')
	.pipe(markdown())
	.pipe(rename("index.html"))
	.pipe(wrapper({
		header: '<html>\n<head>\n<meta charset="utf-8">\n<meta name="description" content="A curated list of Lifehack Calculators by Yingjie Hu">\n<meta name="author" content="Yingjie Hu">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>Awesome Lifehack Calculators</title>\n<script defer src="https://use.fontawesome.com/releases/v5.0.1/js/all.js"></script>\n<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">\n<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script>\n<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>\n<link rel="stylesheet" href="src/style/main.css">\n</head>\n<body>\n<a href="https://github.com/huyingjie/awesome-lifehack-calculators"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/a6677b08c955af8400f44c6298f40e7d19cc5b2d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677261795f3664366436642e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"></a>\n<div id="main">',
		footer: '</div></body>\n</html>'
	}))
	.pipe(ga({url: 'lifehackcalculators.yingjiehu.com', uid: 'UA-38386846-1'}))
	.pipe(gulp.dest(''));
});
