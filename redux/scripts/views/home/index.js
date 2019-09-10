


import "./index.scss";
import {Button,WhiteSpace,NoticeBar,Accordion,List} from "antd-mobile";

import Head  from "~/components/Head"
export default class Home extends Component{
    render(){
        return (
            <div className="indexview">
                <Head title="首页"></Head>
                <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                agduishiuahduiosahdiosahduiohasiohdsauiohdisadoasuidhaiosdosa
                </NoticeBar>
                <div>
                    <Button type="primary">primary</Button><WhiteSpace />
                    {/* <Button type="primary" disabled>primary disabled</Button><WhiteSpace />
                    <Button type="warning">warning</Button><WhiteSpace /> */}
                    <Button type="warning" disabled>warning disabled</Button><WhiteSpace />
                </div>
                <div>
                <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                    <Accordion.Panel header="Title 1">
                        <List className="my-list">
                        <List.Item>content 1</List.Item>
                        <List.Item>content 2</List.Item>
                        <List.Item>content 3</List.Item>
                        </List>
                    </Accordion.Panel>
                    <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
                    <Accordion.Panel header="Title 3" className="pad">
                        text text text text text text text text text text text text text text text
                    </Accordion.Panel>
                    </Accordion>
                </div>
            </div>
        )
    }
}