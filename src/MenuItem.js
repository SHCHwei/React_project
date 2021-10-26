import React from "react";
import { Menu } from "antd";

function MenuItem(){


    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{position:"absolute" , right: "15vw"}}>
            {new Array(5).fill(null).map((_, index) => {
                const key = index + 1;
                return <Menu.Item key={key}>{`菜單 ${key}`}</Menu.Item>;
            })}
        </Menu>
    );
}


export default MenuItem;