
import "./index.scss";

export const foots = [
    {txt:"首页",path:"/index/home",name:"home",icon:"icon-home"},
    {txt:"分类",path:"/index/classify",name:"classify",icon:"icon-svgclassifyselect"},
    {txt:"购物车",path:"/index/cart",name:"cart",icon:"icon-shop_car"},
    {txt:"我",path:"/index/mine",name:"mine",icon:"icon-minefill"}
]

import {NavLink} from "react-router-dom"
import {Badge} from "antd-mobile"
export default class Foot extends Component{

    state = {
        foots
    }

    render(){
        const {
            foots
        } = this.state;

        return (
           <footer>
               {
                   foots.map((foot,i)=>{
                       return (
                            <div key={i}>
                                <NavLink  to={foot.path} activeClassName="nav-active">
                                    <i className={"iconfont " + foot.icon }></i>
                                    <span>{foot.txt}</span>
                                    {i==2&&<Badge className="hot" text="10" hot style={{ marginLeft: 12 }} />}
                                </NavLink>
                            </div>
                       )
                   })
               }
           </footer>
        )
    }
}