"use client";

import ButtonAuth from "@/components/ButtonAuth";
import Signup from "@/components/Signup";
import { useState } from "react";
import Login from "@/components/login";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/navigation";
import { createContext } from "react";

export const ThemeContext = createContext("light");
export default function Home() {
    const [name, setName] = useState("Login");

    const router = useRouter();
    return (
        <>
            <NavBar>
                <div className="flex justify-end gap-">
                    {/* <img
                        src="/logo.png"
                        alt="not found"
                        className="w-20 h-20"
                    /> */}
                    <div>
                        <ThemeContext.Provider value="light">
                            <ButtonAuth
                                onClick={() => {
                                    router.push("/signup");
                                }}
                            >
                                Signup
                            </ButtonAuth>
                            <ButtonAuth onClick={() => router.push("/login")}>
                                Login
                            </ButtonAuth>
                        </ThemeContext.Provider>
                    </div>
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
            <div className="w-screen h-screen flex justify-center bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 "></div>
            <Footer></Footer>
        </>
    );
}
