// 封装组件 

import "./index.scss";
export class MySwiper  extends Component{
    render(){
        const {
            id,
            children
        } = this.props;
        console.log(this.props);
        return (
            <div className="swiper-container" id={id}>
                <div className="swiper-wrapper">
                    {children}
                </div>
            </div>
        )
    }

    componentDidMount(){
        const {
            id,
            swiperOptions,
            children
        } = this.props;
        if(children.length>0){
            let thisSwiper = new Swiper("#"+id,swiperOptions);
        }
        
    }

    componentDidUpdate(){
        const {
            id,
            swiperOptions,
            children
        } = this.props;
        if(children.length>0){
            let thisSwiper = new Swiper("#"+id,swiperOptions);
        }
    }
}

// 静态属性  
MySwiper.Item = (props)=>{
    return (
        <div className="swiper-slide">
            {props.children}
        </div>
    )
}

import PropTypes from "prop-types"
MySwiper.propTypes = {
    id:PropTypes.string.isRequired,
    swiperOptions:PropTypes.object.isRequired
}
