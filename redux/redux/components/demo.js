import store from '../store'
import {Button} from 'antd-mobile'
import {axios} from "&"
import { countDesc, increment ,changeMsg,changeCity,changeWord,changeWordAsync,changeMvAsync} from '../actions';

export default class DemoView extends Component{


    change=()=>{
        store.dispatch(changeWord(this.one.value))
    }

    changeMsg=()=>{
        axios.get('/vue/index').then(res=>{
            store.dispatch(changeMsg(res.data))
        })
    }

    getmv=()=>{
        store.dispatch(changeMvAsync({url:'/vue/movie',params:{limit:6}}))
    }
    
    render(){


console.log(this.props);
        const  {
            state,
            count,
            city,
            desc,
            add,
            data:{
                word,
                mv
            }
        } = this.props;
        const myState = store.getState();
        console.log(myState);

        return(
            <div>
                <h2> word == {word}</h2>
                    <h3>DemoView -- redux计数器</h3>
                    <h3>count==={state.count}=={count}/{myState.count}</h3>
                    <h3>city==={state.city}/{city}/{myState.city}</h3>
                    <Button type="primary" inline onClick={()=>{store.dispatch({type:'COUNTADD',})}}>  点击加加  </Button>
                    <Button onClick={()=>store.dispatch(countDesc)} type="primary" inline> count desc</Button>
                    <Button onClick={()=>store.dispatch(increment(10)) }    type="primary" inline>increment 10  </Button>
                <Button onClick={()=>desc(50)} type="warning" inline> decrement 5  </Button>
                <Button onClick={add} type="warning" inline> add todo   </Button>
                <Button onClick={()=>store.dispatch(changeCity('我想去海南...'))} type="warning" inline> 海南   </Button>
                 <Button onClick={()=>store.dispatch(changeMsg('ooooo'))}type="warning" inline>ooooo</Button>
                 <p><input type="text" ref={el=>{this.one=el}} onChange={this.change} /></p>
                 <Button onClick={()=>store.dispatch(changeWordAsync())} type="primary" inline> 修改 word async     </Button>
                 <Button onClick={this.changeMsg} type="primary" inline> 修改 msg async     </Button>
                 <Button onClick={this.getmv} type="primary" inline>获取 mv      </Button>
                {
                    mv.map((m,i)=>{
                        return <p key={i}>{m.title}/{m.year}</p>

                    })
                }
            </div>
        )
    }
}