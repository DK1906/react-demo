


import "./index.scss";
import {axios} from "&"
export default class UploadImg extends Component{

    constructor(){
        super();
        this.state = {
            pic:require("@/assets/images/photo.png")
        }
    }

    handleClick=()=>{
        console.log(this.inp);
        this.inp.click();
    }

    upload=()=>{
        console.log("马上上传图片....");
        const file = this.inp.files[0];
        const data = new FormData();
        data.append('avater',file);
        console.log('lll')
        axios.post({
            url:'/react/uploadreact',
            method:'POST',
            data:data,
            contentType:false,
            processData:false,

        }).then(res=>{
        console.log('llll')

            console.log(res.data.pic)
            this.setState({
                pic:res.data.pic.replace(/public/,'http://localhost:1906/')
            })
        })
    }

    render(){
        return (
            <div>
                <img src={this.state.pic} alt="" onClick={this.handleClick} className="touxiang"/>
                <input ref={el=>this.inp=el} style={{display:'none'}} onChange={this.upload} type="file"/>
            </div>
        )
    }
}