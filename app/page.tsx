"use client";

import ButtonAuth from "@/components/ButtonAuth";
import { useState } from "react";

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
        </>
    );
}
