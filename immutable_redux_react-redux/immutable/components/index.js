import {connect} from 'react-redux'
import {Button} from 'antd-mobile'
import {countAdd,countDesc,changeCity,changeWord,delSay} from '../actions'


@connect(
    state=>{
        console.log(state)
        return{
            data:state.get('data'),
            count:state.getIn(['data','count']),
            city:state.getIn(['data','city']),
            word:state.getIn(['data','word']),
            say:state.getIn(['my','say'])
        }
    }
)

export default class ImmutableDemo extends Component{
    
change=()=>{
    this.props.dispatch(changeWord(this.inp.value))
}


    render(){
        console.log(this.props);
        const{
            data,
            count,
            city,
            word,
            say,
            dispatch
        }=this.props;


        return(
            <div>
                 <h2> immutable  -- 计数器 </h2>
                 <h3>count==={data.get('count')}//{count}</h3>
                 <h3>city==={data.get('city')}///{city}</h3>
                 <h3>word==={word}</h3>
                { say&&<h3>say==={say}</h3>}

                <button onClick={()=>dispatch(countAdd())}>countAdd</button>
                <button onClick={()=>dispatch(countDesc(80))}>countDesc80</button>
                <button onClick={()=>dispatch(changeCity('海南'))} > changecity</button>
                <p><input type="text" value={word} ref={el=>this.inp=el} onChange={this.change}/> </p>
                <button onClick={()=>dispatch(delSay())}>中秋节不快乐写代码</button>




            </div>
        )
    }
}