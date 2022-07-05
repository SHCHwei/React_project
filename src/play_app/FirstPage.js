import React  from 'react';
import {Layout, List, Button, Modal, Form, Input} from "antd";

const updateView = (state, action) => {
    switch(action.type) {
        case 'showModal':
            return {...state, modalShow: true};
        default:
        case 'offModal':
            return {...state, modalShow: false};
        case 'setData':
            return {...state, data: action.data};
    }
}

const FirstPage=()=>{
    const { Header, Content,  Footer } = Layout;
    const [state, dispatch] = React.useReducer(updateView, {
        modalShow: false,
        modalData: '',
        data: null
    });


    const getData = async () => {

        const response = await fetch('http://localhost:8099/');
        const data = await response.json();

        dispatch({type: "setData", data: data.Teams});
    }


    React.useEffect(()=>{

        getData();

    },[]);


    return( <>
        <Layout className="layout">
            <Header>
                <div style={{textAlign: "center"}}>
                    <Button type="primary" onClick={ ()=>dispatch({type: 'showModal'}) }>{"自己報一隊"}</Button>
                </div>
            </Header>
            <Content style={{ padding: '0 30%' , background: '#d3d0d0'}}>
                <div className="site-layout-content" style={{background: '#ffffff'}}>
                    {(state.data != null) ?
                    <List
                        itemLayout="horizontal"
                        dataSource={state.data}
                        renderItem={ item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={item.title}
                                    description={"隊伍人數 :"+item.how_many}
                                />
                                {"隊員 :"+item.team}
                            </List.Item>
                        )}
                    />
                    : <></>
                    }
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2022 Created by Awei</Footer>
        </Layout>


        <Modal
            title="報隊單"
            visible={state.modalShow}
            onOk={() => dispatch({type: 'offModal'}) }
            onCancel={() => dispatch({type: 'offModal'}) }
        >

            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                autoComplete="off"
            >
                <Form.Item label="報隊留名" name="who" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="人數" name="how_many" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="隊員" name="player">
                    <Input />
                </Form.Item>
            </Form>


        </Modal>
    </>);
}

export default FirstPage;
