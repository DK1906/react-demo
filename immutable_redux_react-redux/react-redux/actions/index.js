

export const  ADDCOUNT = 'addCount'

export const addCount =(num)=>{
    return{
        type:ADDCOUNT,
        num
    }
}

export const COUNTDESC = 'countDesc';
export const countDesc = (num)=>{
    return{
        type:COUNTDESC,
        num
    }
}


export const CHANGECITY = 'changeCity';
export const changeCity= (city)=>{
    return{
        type:CHANGECITY,
        city
    }
}

export const CHANGEMSG= 'changeMsg';
export const changeMsg=(msg)=>{
    return{
        type:CHANGEMSG,
        msg
    }
}