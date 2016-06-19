/// <binding AfterBuild='script, ts, css' Clean='script, ts, css' />
/// <reference path="C:\Estudos\OAuthAuthotizationWebApiOwin\OAuthAuthotizationWebApiOwin\WebSPA\Scripts/_references.js" />
/// <reference path="C:\Estudos\OAuthAuthotizationWebApiOwin\OAuthAuthotizationWebApiOwin\WebSPA\Scripts/_references.js" />
var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var ugify = require('gulp-uglify');
var jsvalidate = require('gulp-jsvalidate');
var concat = require('gulp-concat');
var typescript = require('gulp-tsc');
var paths = {
    css: {
        src: [
             "bower_components/bootstrap/dist/css/bootstrap.min.css"
            , "bower_components/font-awesome/css/font-awesome.min.css"
            , "bower_components/animate.css/animate.min.css"
            , "bower_components/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min.css"
            , "bower_components/checkbox3/dist/checkbox3.min.css"
            , "bower_components/DataTables/media/css/jquery.dataTables.min.css"
            , "bower_components/datatables/media/css/dataTables.bootstrap.css"
            , "bower_components/select2/dist/css/select2.min.css"
            , "flatAdminTemplate/css/style.css"
            , "flatAdminTemplate/css/themes/flat-blue.css"
            , 'bower_components/toastr/toastr.css'
        ],
        dest: 'wwwroot/assets/css',
        file: 'styles-1.0.0.min.css'
    },
    typescript: {
        src: ['Scripts/_reference.ts'],
        dest: 'wwwroot/assets/js',
        file: 'app-1.0.0.min.js'
    },
    scripts: {
        src: [
               "bower_components/jquery/dist/jquery.js"
             , "bower_components/datatables/media/js/jquery.dataTables.js"
             , "bower_components/matchHeight/dist/jquery.matchHeight.js"
             , "bower_components/select2/dist/js/select2.full.js"
             , "bower_components/bootstrap/dist/js/bootstrap.js"
             , "bower_components/bootstrap-switch/dist/js/bootstrap-switch.js"
             , "flatAdminTemplate/lib/js/dataTables.bootstrap.min.js"
             , "bower_components/Chart.js/dist/Chart.js"
             , "bower_components/toastr/toastr.js"
             , "flatAdminTemplate/lib/js/ace/ace.js"
             , "flatAdminTemplate/lib/js/ace/mode-html.js"
             , "flatAdminTemplate/lib/js/ace/theme-github.js"
             , "bower_components/angular/angular.js"
             , "bower_components/angular-route/angular-route.js"
             , "flatAdminTemplate/js/app.js"
            //, "flatAdminTemplate/js/alert.js"
            //, "flatAdminTemplate/js/button.js"
            //, "flatAdminTemplate/js/card.js"
            //, "flatAdminTemplate/js/chartjs.js"
            //, "flatAdminTemplate/js/index.js"
            //, "flatAdminTemplate/js/list.js"
            //, "flatAdminTemplate/js/modal.js"
            //, "flatAdminTemplate/js/theming.js"

        ],
        dest: 'wwwroot/assets/js',
        file: 'scripts-1.0.0.min.js'

    }
};


gulp.task('ts', function () {
    gulp.src(paths.typescript.src)
        .pipe(typescript({
            module: 'amd',
            target: 'es5',
            removeComments: true,
            out: paths.typescript.file
        }))
    .pipe(gulp.dest(paths.typescript.dest));
});

gulp.task('css', function () {
    gulp.src(paths.css.src)
        .pipe(concat(paths.css.file))
        .pipe(cssmin())
        .pipe(gulp.dest(paths.css.dest));
});

gulp.task('script', function () {
    gulp.src(paths.scripts.src)
        .pipe(jsvalidate())
        .pipe(concat(paths.scripts.file))
        .pipe(ugify({ mangle: false }))
        .pipe(gulp.dest(paths.scripts.dest));
});


