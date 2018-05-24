Gulp(参考:https://www.jianshu.com/p/fbf9871dc47a)
	1.安装gulp(全局安装):
		npm install -g gulp
	2.创建项目：
		npm init
		成功之后会在项目根目录下创建package.json文件，
	3.将gulp安装到项目中：
		npm instsall gulp --save-dev
		成功之后项目根目录创建了node_modules文件夹
		
	4.开始项目：
		在根目录下下新建文件gulpfile.js。
		在根目录下下新建文件夹app，在app中开始写代码。
		
		
	在gulpfile.js中引入gulp,sass,less(前提是npm install gulp-sass --save-dev，
	npm install gulp-less --save-dev)，用require引入。
	
	新建任务：
		gulp.task("任务名",()=>{
			return gulp.src("app/sass/*.scss")
					   .pipe(sass())  //sass编译
					   .pipe(gulp.dest("app/css"))
					});