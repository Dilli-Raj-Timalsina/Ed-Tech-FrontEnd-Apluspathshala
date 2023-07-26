"use client";
import { useState } from "react";
import ButtonAuth from "./ButtonAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface SignupFormProps {
    onSubmit: (FormData: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        password: string;
        passwordConfirm: string;
    }) => void;
}
export default function Signup({ onSubmit }: SignupFormProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const router = useRouter();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        onSubmit({
            firstName,
            lastName,
            email,
            phone,
            password,
            passwordConfirm,
        });
        console.log("success");

        router.push("/signupsuccess");
    }
    return (
        <div className="w-96  h-96 drop-shadow-2xl m-4 bg-slate-50">
            <Link href="/login">Log in here !</Link>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name :</label>
                    <input
                        type="text"
                        id="firstName"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name :</label>
                    <input
                        type="text"
                        id="lastName"
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email :</label>
                    <input
                        type="text"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
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
                    <label htmlFor="password">Password Confirm :</label>
                    <input
                        type="password"
                        id="passwordConfirm"
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                </div>
                <div>
                    <ButtonAuth label="submit" type="submit" />
                </div>
            </form>
        </div>
    );
}
