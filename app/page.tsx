"use client";

import ButtonAuth from "@/components/ButtonAuth";
import Signup from "@/components/Signup";
import { useState } from "react";
import Login from "@/components/login";

export default function Home() {
    const [name, setName] = useState("Login");
    return (
        <>
            <ButtonAuth
                label={"Signup"}
                onClick={() => {
                    name == "Login" ? setName("Signup") : setName("Login");
                }}
            />
            <ButtonAuth label={name} />
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
            <div className="w-screen h-screen flex justify-center bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-100 ">
                <Login onSubmit={() => {}} />
            </div>
        </>
    );
}
