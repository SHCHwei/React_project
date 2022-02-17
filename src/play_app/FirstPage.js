import React from 'react';
import {Layout, List, Button } from "antd";

const FirstPage=()=>{

    const { Header, Content,  Footer } = Layout;


    const data = [
        {
            title: '廖育新',
            team: '彥彰,愷全,老大,正隆,昌育',
            how_many: 6
        },
        {
            title: '許翊軒',
            team: '彥彰,愷全,老大,正隆,昌育',
            how_many: 6
        },
        {
            title: 'JM',
            team: '彥彰,愷全,老大,正隆,昌育',
            how_many: 6
        },
        {
            title: '富爸爸',
            team: '彥彰,愷全,老大,正隆,昌育',
            how_many: 6
        },
        {
            title: '偉哥',
            team: '彥彰,愷全,老大,正隆,昌育',
            how_many: 6
        },
        {
            title: '外籍洋將',
            team: '彥彰,愷全,老大,正隆,昌育',
            how_many: 6
        },
        {
            title: '老K',
            team: '彥彰,愷全,老大,正隆,昌育',
            how_many: 6
        },
        {
            title: '妹頭',
            team: '彥彰,愷全,老大,正隆,昌育',
            how_many: 6
        }
    ];

    return(
        <Layout className="layout">
            <Header>
                <div style={{textAlign: "center"}}>
                    <Button type="primary">{"自己報一隊"}</Button>
                </div>
            </Header>
            <Content style={{ padding: '0 30%' , background: '#d3d0d0'}}>
                <div className="site-layout-content" style={{background: '#ffffff'}}>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={ item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={item.title}
                                    description={"隊伍人數 :"+item.how_many+ " , 隊員 :"+item.team}
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )
}

export default FirstPage;