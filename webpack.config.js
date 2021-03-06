const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin  = require('html-webpack-plugin')


module.exports = {
	entry: './src/main.js',//入口文件  
	output: {
		path:path.resolve(__dirname, 'build'),  //打包后文件路径
		filename: 'bundle.js' //打包后文件名称-->可生成多文件
	},
	//开始使用loader
	module: {
		rules: [
		//这些loader都是从右向左加载
			{
				test: /\.css$/,
				use: ['style-loader','css-loader',{
					loader: 'postcss-loader',
					options: {
						plugins: function(){
							return [require('autoprefixer')]
						}
					}
				}]
			},
			{
				test: /\.styl(us)?$/,
				use: ['style-loader','css-loader',{
					loader: 'postcss-loader',
					options: {
						plugins: function(){
							return [require('autoprefixer')]
						}
					}
				},'stylus-loader']
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',  //用use会报错  目前还不知道原因
				exclude: /node_modules/ , //出去的文件
				options: {
  					"presets": [
       					 ["es2015", {"modules": false}]
   					 ]
				}
			}
		]
	},
	devServer: {
		hot: true,
        contentBase: "./", // 本地服务器所加载的页面所在的目录
        historyApiFallback: true, // 不跳转
        inline: true // 实时刷新
    },
    plugins: [
    	new webpack.HotModuleReplacementPlugin({
        	filename: 'index.html',
        	title:'flex-demo'
        }), // 热加载插件----------------------------->使用这个插件后才会实现自动更新
    	new HtmlWebpackPlugin({
    		template: './index.html'
    	})
    ]

}