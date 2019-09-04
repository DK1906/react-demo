

console.log("这是 react 代码的文件...");

import React ,{Component} from "React";  // 核心库 diff算法 创建组件
import ReactDOM from "react-dom";  // 渲染组件成为DOM

import {IndexView} from "./components";
// ES6 class 构造函数创建组件 
export class App extends React.Component{
    render(){
        return (
            <div>
                <h2>App - app</h2>
                <div>
                    <h2>root - root - react </h2>
                </div>
                <Demo/>
                <Menu/>
                <Slide/>
                <IndexView></IndexView>
            </div>
        )
    }
}

export class Demo extends React.Component{
    render(){
        return(
            <div>
                <h2>demo-demo-demo</h2>
            </div>
        )
    }
}

export class Menu extends Component{
    render(){
        return (
            <div>
                <h2> menu- -- 菜单组件</h2>
            </div>
        )
    }
}

// 纯函数组件  无状态组件 stateless
export const Slide = ()=>{
    return (
        <div>
            <h2>Slide---Slide</h2>
            <Tips></Tips>
        </div>
    )
}

export let  Tips = ()=>(
    <div>
        <h2>Tips == Tips 通过 </h2>
    </div>
)

// ReactDOM.render(虚拟DOM, 挂载的真实DOM)
ReactDOM.render(
    <App/>,
    document.getElementById("app")
)


