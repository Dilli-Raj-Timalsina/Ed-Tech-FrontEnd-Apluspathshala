"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BounceSpinners from "../spinners/BounceSpinner";
import SuccessMessage from "../spinners/SuccessMessage";
import ErrorMessage from "../spinners/ErrorMessage";
import { useContext } from "react";
import { LogInContext } from "@/app/layout";
import { JwtContext } from "@/app/layout";
import { CartContext } from "@/app/layout";
import Cookies from "universal-cookie";

interface Detail {
    name: string;
    email: string;
    password: string;
}
export default function Signup() {
    const { logIn, setLogIn } = useContext(LogInContext);
    const { jwt, setJwt } = useContext(JwtContext);
    const { setCart } = useContext(CartContext);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const cookies = new Cookies();
    const [detail, setDetail] = useState<Detail>({
        name: "",
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState("user");

    const router = useRouter();

    const isEmailValid = () => {
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
                "http://localhost:3001/api/v1/user/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ...detail,
                        role: role,
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
                cookies.set("name", detail.name, {
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                });
                cookies.set("email", detail.email, {
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                });
                cookies.set("icon", extractInitials(detail.name), {
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                });
                cookies.set("id", result.userProfile.id, {
                    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                });
                const output = await fetch(
                    "http://localhost:3001/api/v1/review/getCart",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${cookies.get("jwt")}`,
                        },
                    }
                );
                const cartOp = await output.json();
                console.log(cartOp);
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
        }
    }
    return (
        <div className="w-screen h-fit md:w-1/3 md:h-3/5 md:p-4 p-2 mx-1 my-10 drop-shadow-2xl md:mt-40 rounded-2xl bg-white ">
            <h1 className="md:text-3xl text-2xl font-bold ml-6 md:ml-11 mt-4">
                Create New Account
            </h1>

            <button onClick={() => router.back()}>
                <img
                    src="/cancel-icon.svg"
                    alt=""
                    className=" absolute right-1 top-1 cursor-pointer"
                />
            </button>

            <div className="mt-1">
                <span className="font-normal text-sm ml-6 md:ml-20">
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
                        name="name"
                        onChange={(e) =>
                            setDetail({
                                ...detail,
                                [e.target.name]: e.target.value,
                            })
                        }
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
                    <div className="flex gap-1 items-center justify-start ">
                        <input
                            type="checkbox"
                            id="showPasswordCheckbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                            className="form-checkbox h-4 w-4 text-blue-600"
                        />

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
                        {loading ? <BounceSpinners /> : "Signup"}
                    </button>
                </div>
            </form>
            {error && (
                <ErrorMessage message={"User Already Exist, Login Please ?"} />
            )}
        </div>
    );
}
