

import "./index.scss";

import {Switch,Route,Redirect} from "react-router-dom";

import LazyLoad from "&/lazyload"

const Foot = LazyLoad(()=>import("~/components/Foot"))
const AFoot = LazyLoad(()=>import("~/components/AFoot"))


export default class Index extends Component{
    render(){
        return (
            <div>
                <Switch>
                    <Route path="/index/home" component={LazyLoad(()=>import("../home"))} />
                    <Route path="/index/classify" component={LazyLoad(()=>import("../classify"))} />
                    <Route path="/index/cart" component={LazyLoad(()=>import("../cart"))} />
                    <Route path="/index/mine" component={LazyLoad(()=>import("../mine"))} />
                    <Route render={()=>(<Redirect  to="/index/home"  />)}/>
                </Switch>

                {/* <Foot /> */}
                {/* <AFoot  history= {this.props.history}  /> */}
                <AFoot    />
            </div>
        )
    }
}