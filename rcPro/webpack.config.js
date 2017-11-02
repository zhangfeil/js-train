//导入模块
var path=require("path");
var HtmlWebpackPlugin=require("html-webpack-plugin");
var CleanWebpackPlugin=require("clean-webpack-plugin");

//获取出口文件的地址的函数
var gd=(...a)=>path.resolve(__dirname,...a);
//导出模块
module.exports={
    //入口文件
    entry:"./src/app.js",
    //出口文件
    output:{
        filename:"app.js",
        path:gd("dist")
    },
    //模板规则
    module:{
        rules:[
            {
                test: /\.js$/,
                use:['babel-loader'],
                exclude:[gd("node_moudles")]
            }
        ]
    },
    //插件使用
    plugins:[
        //引入插件HtmlWebpackPlugin,创建新的html页面，它的内容来自于模板文件./src/index.html中
        new HtmlWebpackPlugin(
            {
                template:"./src/index.html",
                filename:"index.html"
            }
        ),
        new CleanWebpackPlugin(["dist"])//引用插件CleanWebpackPlugin，在打包前删除掉目标文件件中的文件，然后打包
        //成新的文件
    ]
}