import React from 'react';
import { Link } from "react-router-dom";

const HomePage = ()=>{
    const StyleSheet={
        width:"100vw",
        height:"100vh",
        backgroundColor:"#000000",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    }
    return(
        <div style={StyleSheet}>
            <h1 style={{color:"white",fontFamily:"Microsoft JhengHei"}}>首頁</h1>
            <nav>
                <Link to="/page1">PAGE1</Link> |{" "}
                <Link to="/page2">PAGE2</Link>
            </nav>
        </div>
    )
}

export default HomePage;