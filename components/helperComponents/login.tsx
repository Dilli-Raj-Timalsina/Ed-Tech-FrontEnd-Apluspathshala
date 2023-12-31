"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BounceSpinners from "../spinners/BounceSpinner";
import ErrorMessage from "../spinners/ErrorMessage";

import { useContext } from "react";
import { LogInContext } from "@/app/layout";
import { JwtContext } from "@/app/layout";
import { CartContext } from "@/app/layout";
import Cookies from "universal-cookie";

interface Detail {
    email: string;
    password: string;
}

export default function Login() {
    const { setLogIn } = useContext(LogInContext);
    const { setJwt } = useContext(JwtContext);
    const { setCart } = useContext(CartContext);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const cookies = new Cookies();
    const [detail, setDetail] = useState<Detail>({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState("user");
    const router = useRouter();

    const isEmailValid = () => {
        console.log("whatsapp");
        const emailRegex =
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return emailRegex.test(detail.email);
    };

    const extractInitials = (name: string) => {
        const nameParts = name.split(" ");
        const firstNameInitials = nameParts[0].charAt(0);
        const lastNameInitial = nameParts[nameParts.length - 1].charAt(0);

        return `${firstNameInitials}${lastNameInitial}`;
    };

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!isEmailValid()) {
            return;
        }
        setLoading(true);

        try {
            const res = await fetch(
                process.env.NEXT_PUBLIC_BACKEND! +
                    process.env.NEXT_PUBLIC_LOGIN,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...detail,
                    }),
                }
            );
            const result = await res.json();

            if (res.ok) {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 3000);
                setLoading(false);
                setLogIn(true);
                setJwt(result.token.split(" ")[1]);
                cookies.set("jwt", result.token.split(" ")[1], {
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                });
                cookies.set("isLoggedIn", true, {
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                });
                cookies.set("name", result.userProfile.name, {
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                });
                cookies.set("email", detail.email, {
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                });
                cookies.set("icon", extractInitials(result.userProfile.name), {
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                });
                cookies.set("id", result.userProfile.id, {
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                });
                const output = await fetch(
                    process.env.NEXT_PUBLIC_BACKEND! +
                        process.env.NEXT_PUBLIC_GETCARTINFO,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${cookies.get("jwt")}`,
                        },
                    }
                );
                const cartOp = await output.json();
                setCart(cartOp.cart);
                router.back();
            } else {
                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 3000);
                setLoading(false);
            }
        } catch (err) {
            setLoading(false);
            console.error(err);
        }
    }
    return (
        <div className="w-screen h-fit md:w-1/3 md:h-3/5 md:p-4 p-2 mx-1 my-10 drop-shadow-2xl md:mt-40 rounded-2xl bg-white">
            <h1 className="md:text-3xl text-2xl font-bold ml-6 md:ml-11 mt-4">
                Log Into Your Account
            </h1>
            <button onClick={() => router.back()}>
                <img
                    src="/cancel-icon.svg"
                    alt=""
                    className=" absolute right-1 top-1 cursor-pointer"
                />
            </button>

            <div className="mt-1">
                <span className="font-normal text-sm ml-10 md:ml-20">
                    Don't have an Account yet ?
                </span>
                <span> </span>

                <Link
                    href="/signup"
                    className="text-sm font-medium text-purple-700 hover:text-purple-800"
                >
                    Signup
                </Link>
            </div>

            <form onSubmit={handleSubmit} className="mt-6">
                <div>
                    <label htmlFor="email">Email :</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={(e) =>
                            setDetail({
                                ...detail,
                                [e.target.name]: e.target.value,
                            })
                        }
                        placeholder="Email Address"
                        required
                        className={`${
                            detail.email && !isEmailValid()
                                ? "border-red-500"
                                : ""
                        } border  border-gray-300 rounded-md m-2  focus:outline-none focus:border-gray-400 focus:drop-shadow-md px-2 py-1 w-80`}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password :</label>
                    <input
                        type={!showPassword ? "password" : "text"}
                        id="password"
                        name="password"
                        onChange={(e) =>
                            setDetail({
                                ...detail,
                                [e.target.name]: e.target.value,
                            })
                        }
                        placeholder="Password"
                        required
                        className=" border  border-gray-300 rounded-md m-2  focus:outline-none focus:border-gray-400 focus:drop-shadow-md px-2 py-1 w-72"
                    />
                </div>
                <div className="flex  justify-between   text-center mb-4 mt-2">
                    <div className="flex  justify-start gap-1 text-center mb-4">
                        <input
                            type="checkbox"
                            id="showPasswordCheckbox"
                            name="showPassword"
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
                    <div className="flex gap-1 items-center justify-start mr-12">
                        <input
                            type="checkbox"
                            id="role"
                            checked={role == "teacher"}
                            onChange={() => {
                                setRole(role == "user" ? "teacher" : "user");
                            }}
                            className="form-checkbox h-4 w-4 text-blue-600"
                        />

                        <label
                            htmlFor="role"
                            className="font-semibold text-sm "
                        >
                            I am Teacher
                        </label>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-purple-600 px-3 py-1 m-1 rounded-md  text-white font-normal text-sm hover:drop-shadow-xl hover:bg-purple-700 w-32"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? <BounceSpinners /> : "Login"}
                    </button>
                </div>
                <div className="flex justify-center">
                    <Link
                        href="/forget-password"
                        className="text-blue-800 tracking-tight text-sm hover:underline"
                    >
                        forget password ?
                    </Link>
                </div>
            </form>
            {error && (
                <ErrorMessage
                    message={"Incorrect Username Or Password, Try Again ! "}
                />
            )}
        </div>
    );
}
