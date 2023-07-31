"use client";
import { useState } from "react";
import ButtonAuth from "../navComponents/ButtonAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface SignupFormProps {
    onSubmit: (FormData: {
        fullName: string;
        email: string;

        password: string;
    }) => void;
}
export default function Signup({ onSubmit }: SignupFormProps) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        onSubmit({
            fullName,
            email,
            password,
        });
        const res = await fetch(
            "https://a-pathshala-service-2.onrender.com/api/v1/user/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: fullName,
                    email: email,
                    password: password,
                    role: "user",
                }),
            }
        );
        console.log(res);
        if (res.ok) {
            const data = await res.json();
            console.log(data);
        }
        router.push("/signupSuccess");
    }
    return (
        <div className=" w-1/3 h-3/5 p-4 drop-shadow-2xl mt-6 rounded-2xl bg-white">
            <h1 className="text-3xl font-bold ml-11 mt-4">
                Create New Account
            </h1>

            <div className="mt-1">
                <span className="font-normal text-sm ml-20">
                    Already have an Account ?
                </span>
                <span> </span>

                <Link
                    href="/login"
                    className="text-sm font-medium text-purple-700 hover:text-purple-800"
                >
                    Login
                </Link>
            </div>

            <form onSubmit={handleSubmit} className="mt-6">
                <div>
                    <label htmlFor="fullName">FullName :</label>
                    <input
                        type="text"
                        id="fullName"
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Name"
                        required
                        className=" border  border-gray-300 rounded-md m-2  focus:outline-none focus:border-gray-400 focus:drop-shadow-md px-2 py-1 w-72"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email :</label>
                    <input
                        type="text"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        required
                        className=" border  border-gray-300 rounded-md m-2  focus:outline-none focus:border-gray-400 focus:drop-shadow-md px-2 py-1 w-80"
                    />
                </div>

                <div>
                    <label htmlFor="password">Password :</label>
                    <input
                        type={!showPassword ? "password" : "text"}
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className=" border  border-gray-300 rounded-md m-2  focus:outline-none focus:border-gray-400 focus:drop-shadow-md px-2 py-1 w-72"
                    />
                </div>
                <div className="flex  justify-start gap-1 text-center mb-4">
                    <input
                        type="checkbox"
                        id="showPasswordCheckbox"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                        className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <div> </div>
                    <label
                        htmlFor="showPasswordCheckbox"
                        className="font-semibold text-sm "
                    >
                        Show Password
                    </label>
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-purple-600 px-3 py-1 m-1 rounded-md  text-white font-normal text-sm hover:drop-shadow-xl hover:bg-purple-700 w-32"
                        type="submit"
                    >
                        Signup
                    </button>
                </div>
            </form>
        </div>
    );
}
