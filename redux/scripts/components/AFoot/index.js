
import "./index.scss";

import {TabBar} from "antd-mobile";
import { foots } from "../Foot";
import PropTypes from "prop-types";
import {history}  from "&/history";

export default class AFoot extends Component{
    constructor(){
        super();
        this.state = {
            selectedTab:"home"
        }
    }

    componentDidMount(){
        var hash = location.hash;
        var tab = hash.replace("#/index/","");
        console.log(tab);
        this.setState({
            selectedTab:tab
        })
    }

    render(){
        return (
            <div className="myfoot">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    
                    >
                    {
                        foots.map((foot,i)=>{
                            return (
                                <TabBar.Item
                                title={foot.txt}
                                key={i}
                                icon={<i 
                                    style={{width:'22px',height:'22px'}}
                                    className={"iconfont "+foot.icon}
                                />
                                }
                                selectedIcon={<i style={{
                                  width: '22px',
                                  height: '22px',
                                }}
                                className={"iconfont "+foot.icon}
                                />
                                }
                                selected={this.state.selectedTab ===foot.name}
                                badge={i==2&&10}
                                onPress={() => {
                                    // 点击设置高亮 
                                  this.setState({
                                    selectedTab: foot.name,
                                  });
                                  history.push(foot.path);
                                //   this.props.history.push(foot.path);
                                // this.context.history.push(foot.path);
                                  
                                }}
                                data-seed="logId"
                              >
                                {/* <div>wuhan1906 --- {foot.txt} </div> */}
                              </TabBar.Item>
                            )
                        })
                    }
                </TabBar>
            </div>
        )
    }
}

AFoot.contextTypes = {
    history:PropTypes.object
}