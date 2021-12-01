import React from "react";
import Header from "../header-component/header";
import Footer from "../footer-component/footer";

export default function Layout({countCartItems, children}) {
    return (
        <div>
            <Header countCartItems={countCartItems} />
            <div className="m-5">
               {children}
            </div>
            <Footer />
        </div>
    )
}

