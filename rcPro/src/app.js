//页面文件的设置
//导入模块
import React,{Component} from "react";
import ReactDOM from "react-dom";
//导入组件模块
import Header from "./component/Header";
import Content from "./component/Content";
//创建一个组件
class App extends Component{
    constructor(props){
        super(props)
    }
    //jsx的语法
    render(){
        return(
            <section>
                asdfasfafsd
                <Header></Header>
                <Content></Content>
            </section>
        )
    }
}

//使用ReactDOM渲染页面内容,同样遵从jsx语法
ReactDOM.render(
    <App/>,//页面组件
    document.getElementById("root")//将页面组件放入id为root的div容器中
)