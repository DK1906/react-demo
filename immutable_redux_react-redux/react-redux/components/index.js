import { Button } from 'antd-mobile'
import { DESTRUCTION } from 'dns';

// UI组件  子组件   UI 组件负责 UI 的呈现
export default class ReactReduxDemo extends Component {
    render() {
        console.log(9999)
        console.log(this.props);
        const {
            count,
            num,
            city,
            city1,
            add,
            desc,
            changeCity,
            changeMsg,
            msg
        } = this.props



        return (
            <div>
                <h2> ReactReduxDemo -- 计数器 </h2>
                <h2> 父组件  容器组件  负责业务逻辑和数据管理 </h2>
                <h2> 子组件  UI组件  负责 UI 的展示 </h2>
                <hr />
                <h3>count == {count}/{num}</h3>
                <h2> city    == {city}  /  {city1}</h2>
                <h2> city    == {msg}  /  {msg}</h2>

                <button onClick={() => add(50)}>count add 50</button>
                <button onClick={() => desc(100)}>count desc 100</button>
                <button onClick={()=>changeCity('深圳')}>change city</button>
                <button onClick={()=>changeMsg('hello world')}>change msg</button>


            </div>
        )
    }
}
