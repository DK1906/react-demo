
import LazyLoad from "&/lazyload"
// import {Guide} from "./guide"
// import { Index } from "./app";
const Guide = LazyLoad(()=>import("./guide"));
const Index = LazyLoad(()=>import("./app"));


import { Route,Switch ,Redirect } from "react-router-dom" 
// 所有路由 配置   


export class Layout extends Component{
    getChildContext(){
        return {
            history:this.props.history
        }
    }
    render(){
        return (
            <div className="main">
                <Switch>
                    <Route path="/" exact render={()=>( <Redirect to="/guide" /> )} />
                    <Route path="/guide" component={Guide}/>
                    <Route path="/index/" component={Index}/>
                    <Route path="/search" component={LazyLoad(()=>import("./search"))} />
                    <Route path="/scan" component={LazyLoad(()=>import("./scan"))} />
                    <Route path="/login" component={LazyLoad(()=>import("./login"))} />
                    <Route render={()=>(<Redirect  to="/index/home"  />)}/>
                </Switch>
            </div>
        )
    }
}

import PropTypes from "prop-types"
Layout.childContextTypes =  {
    history:PropTypes.object
}