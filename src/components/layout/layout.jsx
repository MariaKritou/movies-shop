import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <div className="m-4">
                {children}
            </div>
            <Footer />
        </div>
    )
}
