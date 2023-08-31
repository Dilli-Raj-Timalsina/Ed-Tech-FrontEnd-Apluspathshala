"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import { createContext } from "react";
import Cookies from "universal-cookie";

import ButtonAuth from "@/components/navComponents/ButtonAuth";
import NavBar from "@/components/navComponents/NavBar";
import Logo from "@/components/navComponents/logo";
import NavItem from "@/components/navComponents/NavItem";
import SearchBar from "@/components/navComponents/SearchBar";
import CategoriesDropDownButton from "@/components/navComponents/CategoriesDropDownButton";
import Cart from "@/components/cartComponents/Cart";
import Footer from "@/components/footerComponents/Footer";
import ProfileIcon from "@/components/dashBoardComponents/ProfileIcon";
import SideBar from "@/components/navComponents/SideBar";
import Login from "@/components/helperComponents/login";

interface RootLayoutProps {
    children: React.ReactNode;
}
interface CartContextValue {
    cart: string[];
    setCart: React.Dispatch<React.SetStateAction<string[]>>;
}
interface SideBarToggleType {
    sideBarToggle: boolean;
    setSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LogInContextType {
    logIn: boolean;
    setLogIn: React.Dispatch<React.SetStateAction<boolean>>;
}
interface Jwttype {
    jwt: string;
    setJwt: React.Dispatch<React.SetStateAction<string>>;
}

export const CartContext = createContext<CartContextValue>({
    cart: [],
    setCart: () => {},
});
export const SideBarContext = createContext<SideBarToggleType>({
    sideBarToggle: false,
    setSideBarToggle: () => {},
});
export const LogInContext = createContext<LogInContextType>({
    logIn: false,
    setLogIn: () => {},
});
export const JwtContext = createContext<Jwttype>({
    jwt: "",
    setJwt: () => {},
});

export default function RootLayout({ children }: RootLayoutProps) {
    const [sideBarToggle, setSideBarToggle] = useState(false);
    const [logIn, setLogIn] = useState(false);
    const [jwt, setJwt] = useState("");
    const [cart, setCart] = useState<string[]>([]);
    const cookies = new Cookies();
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                "http://localhost:3001/api/v1/review/getCart",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${cookies.get("jwt")}`,
                    },
                }
            );

            const result = await res.json();
            console.log(result);
            setCart(result.cart);
        }

        setJwt(cookies.get("jwt"));
        setLogIn(cookies.get("isLoggedIn"));
        if (cookies.get("isLoggedIn")) {
            fetchData();
        }
    }, []);

    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/aos@next/dist/aos.css"
                />
            </head>

            <body
                className={` overflow-x-hidden ${
                    sideBarToggle
                        ? " overflow-y-hidden inset-0 bg-gray-300 z-20 "
                        : ""
                } `}
            >
                <JwtContext.Provider value={{ jwt, setJwt }}>
                    <LogInContext.Provider value={{ logIn, setLogIn }}>
                        <SideBarContext.Provider
                            value={{ sideBarToggle, setSideBarToggle }}
                        >
                            <CartContext.Provider value={{ cart, setCart }}>
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
                                        <NavItem href="/become-teacher">
                                            Teach on A+
                                        </NavItem>
                                        <NavItem>Contact us</NavItem>
                                    </div>
                                    <Cart cart={cart}></Cart>
                                    <div className="hidden md:flex md:gap-2 mr-2">
                                        <ButtonAuth
                                            pagePath="/signup"
                                            logIn={logIn}
                                        >
                                            Signup
                                        </ButtonAuth>

                                        <ButtonAuth
                                            pagePath="/login"
                                            logIn={logIn}
                                        >
                                            Login
                                        </ButtonAuth>
                                        <ProfileIcon
                                            logIn={logIn}
                                            name={"Nischal Timalsina"}
                                        ></ProfileIcon>
                                    </div>
                                </NavBar>
                                {/* <CartHover hover={hover}></CartHover> */}
                                <SideBar></SideBar>
                                {children}
                            </CartContext.Provider>
                        </SideBarContext.Provider>
                        <Footer></Footer>
                    </LogInContext.Provider>
                </JwtContext.Provider>
                <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
                <script>AOS.init();</script>
            </body>
        </html>
    );
}
