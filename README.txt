1. webpack2.0  使用
2. mkdir webpack-demo & cd 

3. npm init -y(参数代表使用默认值)
4. npm i --save-dev webpack
5. 建立目录结构

6. 使用webpack-dev-server实现自动刷新
	npm install --save-dev webpack-dev-server
	在package.json 的 script 中加入：
		"start": "webpack-dev-server",
		"build": "webpack"
	在webpack.config.js中进行配置

6. 使用 stylus  安装loader  
	npm i --save-dev style-loader css-loader stylus-loader stylus

7. 使用一个css3插件  作用： 可以自动补全前缀 
	npm i --save-dev postcss-loader autoprefixer

8. 使用 es2015  
	npm i --save-dev babel-core babel-loader babel-preset-2015

