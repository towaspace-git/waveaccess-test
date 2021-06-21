import React from "react";
import Header from "../UI/Header/Header";
const Layout:React.FC = (props) => {
    return(
        <>
        <Header></Header>
        {props.children}
        </>
    )
}

export default Layout