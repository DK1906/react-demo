import ReactDom,{render} from 'react-dom';
// import ReactReduxDemo from "./components"   // UI 
import DemoCon from './components/demoCon'
// import NewCON 


import store from './store'
import {Provider} from 'react-redux'


export default class ReactRedux extends Component{
    render(){
        return (
            <div>
                                <h2> react-redux  /   redux 升级  </h2>
                                
                               <DemoCon></DemoCon>
            </div>
        )
    }
}

const hotRender =()=>{
    render(
        <Provider store={store}>
            <ReactRedux></ReactRedux>

        </Provider>,
        document.getElementById('root')
    )
}

hotRender();