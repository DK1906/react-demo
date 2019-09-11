




import {HashRouter  as Hash, Route} from "react-router-dom" ;

import {Layout} from "./views";    


export class MainRoute extends React.Component{
    render(){
        return (
            <Hash 
                basename="/"
            >   
                <Route component={Layout}/>
            </Hash>
        )
    }
}
