"use client";

import "./globals.css";
import { useState } from "react";
import { createContext } from "react";
import { useRef } from "react";

import ButtonAuth from "@/components/navComponents/ButtonAuth";
import NavBar from "@/components/navComponents/NavBar";
import Logo from "@/components/navComponents/logo";
import NavItem from "@/components/navComponents/NavItem";
import SearchBar from "@/components/navComponents/SearchBar";
import CategoriesDropDownButton from "@/components/navComponents/CategoriesDropDownButton";
import Cart from "@/components/navComponents/Cart";
import Footer from "@/components/footerComponents/Footer";

interface Props {
    children: React.ReactNode;
}
interface CartContextValue {
    cartCount: number;
    setCartCount: React.Dispatch<React.SetStateAction<number>>;
}
interface SideBarToggleType {
    sideBarToggle: boolean;
    setSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartContext = createContext<CartContextValue>({
    cartCount: 0,
    setCartCount: () => {},
});
export const SideBarContext = createContext<SideBarToggleType>({
    sideBarToggle: false,
    setSideBarToggle: () => {},
});

export default function RootLayout({ children }: Props) {
    const [cartCount, setCartCount] = useState(0);
    const [sideBarToggle, setSideBarToggle] = useState(false);
    const bodyRef = useRef();

    return (
        <html lang="en">
            <body
                className={` overflow-x-hidden ${
                    sideBarToggle
                        ? " overflow-y-hidden inset-0 bg-gray-300 z-20 "
                        : ""
                } `}
            >
                <SideBarContext.Provider
                    value={{ sideBarToggle, setSideBarToggle }}
                >
                    <CartContext.Provider value={{ cartCount, setCartCount }}>
                        <NavBar>
                            <Logo
                                logoImageClass="hidden md:flex"
                                logoTitleClass="hidden md:flex"
                            />
                            <CategoriesDropDownButton></CategoriesDropDownButton>
                            <SearchBar></SearchBar>
                            <Logo
                                logoImageClass="flex md:hidden"
                                logoTitleClass=" hidden"
                            />

                            <div className="flex justify-around items-center gap-4">
                                <NavItem>Teach on A+</NavItem>
                                <NavItem>Contact us</NavItem>
                            </div>
                            <Cart cartItemCount={cartCount}></Cart>
                            <div className="hidden md:flex md:gap-2 mr-2">
                                <ButtonAuth pagePath="/signup">
                                    Signup
                                </ButtonAuth>

                                <ButtonAuth pagePath="/login">Login</ButtonAuth>
                            </div>
                        </NavBar>
                        {children}
                    </CartContext.Provider>
                </SideBarContext.Provider>
                <Footer></Footer>
            </body>
        </html>
    );
}
