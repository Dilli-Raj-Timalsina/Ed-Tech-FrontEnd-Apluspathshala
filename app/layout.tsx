"use client";

import "./globals.css";
import { useState } from "react";
import { createContext } from "react";

import ButtonAuth from "@/components/navComponents/ButtonAuth";
import NavBar from "@/components/navComponents/NavBar";
import Logo from "@/components/navComponents/logo";
import NavItem from "@/components/navComponents/NavItem";
import SearchBar from "@/components/navComponents/SearchBar";
import Category from "@/components/navComponents/Category";
import Cart from "@/components/navComponents/Cart";
import Footer from "@/components/footerComponents/Footer";

interface Props {
    children: React.ReactNode;
}
interface CartContextValue {
    cartCount: number;
    setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

export const CartContext = createContext<CartContextValue>({
    cartCount: 0,
    setCartCount: () => {},
});

export default function RootLayout({ children }: Props) {
    const [cartCount, setCartCount] = useState(0);

    return (
        <html lang="en">
            <body className={" overflow-x-hidden"}>
                <CartContext.Provider value={{ cartCount, setCartCount }}>
                    <NavBar>
                        <Logo className="hidden md:flex" />
                        <Category></Category>
                        <SearchBar></SearchBar>
                        <Logo className="flex sm:hidden" />

                        <div className="flex justify-around items-center gap-4">
                            <NavItem>Teach on A+</NavItem>
                            <NavItem>Contact us</NavItem>
                        </div>
                        <Cart cartItemCount={cartCount}></Cart>
                        <div className="hidden md:flex md:gap-2">
                            <ButtonAuth pagePath="/signup">Signup</ButtonAuth>
                            <ButtonAuth pagePath="/login">login</ButtonAuth>
                        </div>
                    </NavBar>
                    {children}
                </CartContext.Provider>
                <Footer></Footer>
            </body>
        </html>
    );
}
