import React from "react";
import Header from "../header-component/header";

export default function Layout(props) {
    return (
        <div>
            <Header />
            <div className="m-5">
               {props.children}
            </div>
            {/* add also a footer component here */}
        </div>
    )
}

