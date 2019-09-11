//action


export const countDesc = {
    type:'countDesc',
    count:100
    
}



export const INCREMENT = "increment";

export function increment(num){
    return{
        type:INCREMENT,
        num
    }
}


export const DECREMENT = 'decrement'
export const decrement = (payload)=>{
    return{
        type:DECREMENT,
        payload
    }
}

export const ADD= 'adddddd'
export const add= ()=>{
    return{
        type:ADD,

    }
}

export const CHANGECITY='changeCity'
export function changeCity(city){
    return{
        type:CHANGECITY,
        city
    }
}

export const CHANGEMSG = 'changeMsg'
export function changeMsg(msg){
    return{
        type:CHANGEMSG,
        msg
    }
}

export const CHANGEWORD = 'changeWord'
export function changeWord(word){
    return{
        type:CHANGEWORD,
        word
    }
}

import {axios} from "&";
// 所有的异步 写在 action 

export const CHANGEWORDASYNC = 'changeWordAsync'
export function changeWordAsync(){
     return axios.get('/vue/index').then(res=>{
         return{
             type:CHANGEWORDASYNC,
             word:res.data
         }
     })
}



// async + await   ES7  

// async 表明 这个函数(变量)是个 Promise对象  
// await 表示获取 Promise 操作后的结果  (then?catch)
export async function changeMvAsync({url,params}){
    const res= await axios.get(url,{params})
    return {
        type:"changeMvAsync",
        mv:res.data.result
    }
}
