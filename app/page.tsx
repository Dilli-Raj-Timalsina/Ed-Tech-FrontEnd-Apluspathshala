"use client";

import ButtonAuth from "@/components/ButtonAuth";
import Signup from "@/components/Signup";
import { useState } from "react";
import Login from "@/components/login";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/navigation";
import { createContext } from "react";
import Logo from "@/components/logoItem/logo";
import NavLink from "@/components/navbar/NavLink";
export const ThemeContext = createContext("light");
export default function Home() {
    const [name, setName] = useState("Login");

    const router = useRouter();
    return (
        <>
            <NavBar>
                <Logo />
                <div className="flex justify-around items-center">
                    <NavLink href={"#"}>Home</NavLink>
                    <NavLink href={"#"}>about</NavLink>
                    <NavLink href={"#"}>contact</NavLink>
                </div>
            </NavBar>

            {/* <Signup
                onSubmit={({
                    firstName,
                    lastName,
                    email,
                    phone,
                    password,
                    passwordConfirm,
                }) => {}}
            /> */}
            <div className="w-screen h-screen flex justify-center bg-white "></div>
            <Footer></Footer>
        </>
    );
}
