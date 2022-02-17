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
            <h1 style={{color:"white",fontFamily:"Microsoft JhengHei"}}>打球報噗累</h1>
            <nav>
                <Link to="/page1">男一</Link> | {" "} <Link to="/page1">男二</Link> | {" "} <Link to="/page1">男三</Link>
            </nav>
            <nav>
                <Link to="/page1">女一</Link> | {" "} <Link to="/page1">女二</Link> | {" "} <Link to="/page1">女三</Link>
            </nav>
        </div>
    )
}

export default HomePage;