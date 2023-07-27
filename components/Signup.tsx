"use client";
import { useState } from "react";
import ButtonAuth from "./ButtonAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface SignupFormProps {
    onSubmit: (FormData: {
        fullName: string;
        phone: string;
        password: string;
    }) => void;
}
export default function Signup({ onSubmit }: SignupFormProps) {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        onSubmit({
            fullName,
            phone,
            password,
        });
        console.log("success");

        router.push("/signupsuccess");
    }
    return (
        <div className="w-96  h-96 drop-shadow-2xl m-4 bg-slate-50">
            <Link href="/login">Log in here !</Link>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullName">First Name :</label>
                    <input
                        type="text"
                        id="fullName"
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="phone">Phone :</label>
                    <input
                        type="number"
                        id="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password :</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <ButtonAuth label="submit" type="submit" />
                </div>
            </form>
        </div>
    );
}
