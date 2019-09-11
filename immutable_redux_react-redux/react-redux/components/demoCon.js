// 容器组件负责管理数据和逻辑   connect方法，用于从 UI 组件生成容器组件 
// 父组件   


import {connect} from 'react-redux'

import ReactReduxDemo from './index'
import store from '../store';
import {addCount,countDesc,changeCity,changeMsg} from '../actions'


// （1）输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数  父改子  
//  负责把 容器的组件的 state 当做 props 传递给 UI 组件
// mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染
const mapStateToProps = (state)=>{// store.getState()
    console.log(state)
    return{
        ...state,
        num:state.count+1,
        city1:state.city+'999'
    
    }
}


// （2）输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去。子改父 
//容器 修改数据的方法 (dispatch) 当做props 传递给UI 组件  UI组件负责执行触发 
// 输出逻辑 不写  自动注入 dispatch ==>   store.dispatch

const mapDispatchToProps = (dispatch)=>{ // store.dispatch
return{
    add:(n)=>dispatch(addCount(n)),
    desc:(n)=>dispatch(countDesc(n)),

    changeCity:(city)=>dispatch(changeCity(city)),
    changeMsg:(msg)=>dispatch(changeMsg(msg))
}
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReactReduxDemo);  // 容器组件 
