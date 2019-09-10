import DemoView from './components/demo';
import store from './store';
import { decrement, add } from "./actions";
console.log(store);
const  state = store.getState();

export default class ReduxDemo extends Component{
    render(){
        return(
            <div>
                <h3>
                    redux - 1906-ready
                </h3>
                <DemoView
                  state={state}
                {...store.getState()}
                desc={n=>store.dispatch(decrement(n))}
                add={()=>{store.dispatch(add())}}
                >
                  
                </DemoView>

            </div>
        )
    }
}



import ReactDOM,{render} from 'react-dom'

const hotRender=()=>{
    render(
        <ReduxDemo>

        </ReduxDemo>,
        document.getElementById('root')

    )
}

hotRender();
store.subscribe(hotRender);