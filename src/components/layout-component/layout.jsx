import React from "react";
import Header from "../header-component/header";

export default function Layout({countCartItems, children}) {
    return (
        <div>
            <Header countCartItems={countCartItems} />
            <div className="m-5">
               {children}
            </div>
            {/* add also a footer component here */}
        </div>
    )
}

