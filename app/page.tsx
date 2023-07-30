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
import SearchBar from "@/components/navbar/SearchBar";

export const ThemeContext = createContext("light");

export default function Home() {
    const [name, setName] = useState("Login");

    const router = useRouter();
    return (
        <>
            <NavBar>
                <Logo />
                <SearchBar></SearchBar>
                <div className="flex justify-around items-center gap-2">
                    <NavLink href={"#"} className="hover:text-blue-400 text-lg">
                        Home
                    </NavLink>
                    <NavLink href={"#"} className="hover:text-blue-400 text-lg">
                        about
                    </NavLink>
                    <NavLink href={"#"} className="hover:text-blue-400 text-lg">
                        contact
                    </NavLink>
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
