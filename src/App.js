import './App.css';
import React from "react";
import {Layout, Menu } from "antd";
import Contents from './Contents.js'
import MenuItem from './MenuItem.js'
import SiderItem from './SiderItem.js'
import SliderRight from './SliderRight.js';


const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

class App extends React.Component{
    render(){
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <MenuItem/>
                </Header>
                <Layout>
                    <Sider style={{ width:'15vw' }} >
                        <SiderItem/>
                    </Sider>
                    <Content style={{ padding: '0 50px' }}>
                        <div className="site-layout-content">
                            <Contents/>
                        </div>
                    </Content>
                    <Sider style={{ width:'17vw' , backgroundColor:'gray' }} >
                        <SliderRight/>
                    </Sider>
                </Layout>

                <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Created by Ant UED</Footer>
            </Layout>
        );
    }
}

export default App;
