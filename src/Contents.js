import React from "react";
import { Space, Card } from 'antd';

function Contents(){
    const styleImage = {width:"60vw", height:"50vh", top: "50px"};

    const buildCard = () => {

        return <>
            <Card title="Card" style={{ width: "90%" }}>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <Card title="Card" style={{ width: "90%" }}>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <Card title="Card" style={{ width: "90%" }}>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <Card title="Card" style={{ width: "90%" }}>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <Card title="Card" style={{ width: "90%" }}>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </>;
    }

    return (
        <Space direction="vertical" style={{ width: "100%"}}>
            {buildCard()}
        </Space>
    );
}


export default Contents;