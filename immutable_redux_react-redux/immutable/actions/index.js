

export const COUNTADD= 'countAdd'
export const countAdd=()=>{
    return{
        type:COUNTADD,

    }
}

export const COUNTDESC ='countDesc'
export const countDesc = (num)=>{
    return{
        type:COUNTDESC,
        num
    }
}

export const CHANGECITY= 'changeCity'
export const changeCity =(city)=>{
    return{
        type:CHANGECITY,
        city
    }
}

export const CHANGEWORD= 'changeWord';
export const changeWord = (word)=>{
    return {
        type:CHANGEWORD,
        word
    }
}
export const DELSAY = 'delSay';
export const delSay = ()=>{
    return{
        type:DELSAY,
        
    }
}