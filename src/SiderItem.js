import React from "react";

import { Menu, Button } from 'antd';
import {
    PieChartOutlined,
    MailOutlined,
} from '@ant-design/icons';



function SiderItem(){

    const { SubMenu } = Menu;
    const subClass1 = (e) =>{

        return <Menu.Item key="1" icon={<PieChartOutlined />}>
            選單{e}
        </Menu.Item>;
    };

    const subClass2 = (e) => {
        return <SubMenu key={"sub"+e} icon={<MailOutlined />} title={ "選單"+ e}>
            <Menu.Item key="5">選單{e}-5 </Menu.Item>
            <Menu.Item key="6">選單{e}-6 </Menu.Item>
            <Menu.Item key="7">選單{e}-7 </Menu.Item>
            <Menu.Item key="8">選單{e}-8 </Menu.Item>
        </SubMenu>;
    };

    return <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
        >
        {subClass2("1")}
        {subClass2("2")}
        {subClass1("3")}
        </Menu>;

}


export  default SiderItem;