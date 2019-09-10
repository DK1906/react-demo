



import "./index.scss"
import Head  from "~/components/Head"

import UploadImg from "~/components/uploadImg";

import {axios} from "&";

import {WingBlank,Carousel} from "antd-mobile"
import { truncateSync } from "fs";

export default class Mine extends Component{
    constructor(){
        super();
        this.state = {
            banner:[],
            autoplay:true
        }
    }

    componentDidMount(){
        axios.get("/react/movie",{params:{limit:6}}).then(res=>{
          
            console.log(res)
            this.setState({
                banner:res.data.result
            })
        })
    }

    render(){
        return (
            <div className="indexview">
                <Head title="个人中心"></Head>
                <h2>Mine 个人中心 ....</h2>
                <UploadImg></UploadImg>
                <WingBlank>
                    <Carousel
                         autoplay={this.state.autoplay}
                         infinite
                         autoplayInterval={1500}
                         beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                         afterChangtruncateSync
                    >
                        {
                            this.state.banner.map((b,i)=>{
                                return (
                                    <a
                                        key={i}
                                        href="#/index/home"
                                        style={{ display: 'inline-block', width: '100%', height: 300 }}
                                        >
                                        <img
                                            src={b.images.large}
                                            alt=""
                                            style={{ width: '100%', verticalAlign: 'top',height: 300  }}
                                            onLoad={() => {
                                            // fire window resize event to change height
                                                window.dispatchEvent(new Event('resize'));
                                            
                                            }}
                                        />
                                    </a>
                                )
                            })
                        }
                    </Carousel>
                </WingBlank>
            </div>
        )
    }
}