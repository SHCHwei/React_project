import React from "react";
import { Space, Card, Anchor } from 'antd';

const { Link } = Anchor;

function SliderRight(){

    const subItem = () => {
        return <Anchor>
            <Link href="" title="Other page" />
            <Link href="" title="Other page" />
            <Link href="" title="API">
                <Link href="" title="Anchor Props" />
                <Link href="" title="Link Props" />
            </Link>
        </Anchor>;

    }


    return (
        <Space direction="vertical">
        <Card title="Card" style={{ width: "10vw", margin: "5px" }}>
            {subItem()}
        </Card>
        <Card title="Card" style={{ width: "10vw", margin: "5px" }}>
            {subItem()}
        </Card>
        </Space>
    );

}


export default SliderRight;