import ReactDOM,{render} from 'react-dom'
import ImmutableDemo from './components';
import store from './store'
import {Provider} from 'react-redux'



export default class ReactRedux extends Component{
    render(){
        return(

            <div>
                <h3>react-redux  +   immutable  == 改造 不可变对象</h3>
                <ImmutableDemo></ImmutableDemo>
            </div>
        )
    }
}

const hotRender=()=>{
    render(
        <Provider store={store}>
            <ReactRedux></ReactRedux>
        </Provider>,
        document.getElementById('root')
    )
}

hotRender()