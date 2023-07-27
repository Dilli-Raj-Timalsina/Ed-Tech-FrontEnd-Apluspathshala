"use client";

import ButtonAuth from "@/components/ButtonAuth";
import Signup from "@/components/Signup";
import { useState } from "react";
import Login from "@/components/login";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Home() {
    const [name, setName] = useState("Login");
    return (
        <>
            <NavBar>
                <img src="/logo.png" alt="not found" className="w-20 h-20" />
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
            <div className="w-screen h-screen flex justify-center bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 ">
                <Login onSubmit={() => {}} />
            </div>
            <Footer></Footer>
        </>
    );
}
