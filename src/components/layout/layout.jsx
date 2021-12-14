import React from "react";
import { CartProvider } from "../../contexts/cart-context";
import Header from "../header/header";
import Footer from "../footer/footer";
import { UserProvider } from "../../contexts/user-context";

export default function Layout({ children }) {
    return (
        <UserProvider>
            <CartProvider>
                <div>
                    <Header />
                    <div className="m-4">
                        {children}
                    </div>
                    <Footer />
                </div>
            </CartProvider>
        </UserProvider>
    )
}

