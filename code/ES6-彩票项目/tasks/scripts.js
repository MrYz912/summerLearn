import gulp from "gulp";
import gulpif from "gulp-if";//if语句
import concat from "gulp-concat";//合并
import webpack from "webpack";
import gulpwebpack from "webpack-stream";
import named from "vinyl-named";//命名
import livereload from "gulp-livereload";//热更新
import plumber from "gulp-plumber";//处理文件信息流
import rename from "gulp-rename";//重命名
import uglify from "gulp-uglify";//处理压缩
import {log,colors} from "gulp-util";//在命令行输出
import args from "./util/args";

gulp.task( "scripts",() => {
    return gulp.src(['app/js/index.js'])
        .pipe(plumber({
            errorHandler:function(){

            }
        }))
        .pipe(named())
        .pipe(gulpwebpack({
            module:{
                loaders:[{
                    test:/\.js$/,
                    loader: "babel"
                }]
            }
        }),null,(err, stats)=>{
            log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
                chunks:false
            }))
        })
        .pipe(gulp.dest("server/public/js"))
        .pipe(rename({
            basename: "cp",
            extname: ".min.js"
        }))
        .pipe(uglify({
            compress:{properties:false},
            output: {'quote_keys':true}
        }))
        .pipe(gulp.dest("server/public/js"))
        .pipe(gulpif(args.watch,livereload()))
})