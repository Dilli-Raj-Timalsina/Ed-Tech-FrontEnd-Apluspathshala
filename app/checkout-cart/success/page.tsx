"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CartContext } from "@/app/layout";
import { useEffect } from "react";
import { JwtContext } from "@/app/layout";
import { LogInContext } from "@/app/layout";

function PaymentSuccess() {
    const router = useRouter();
    const { setCart } = useContext(CartContext);
    const { jwt } = useContext(JwtContext);
    const { logIn } = useContext(LogInContext);

    useEffect(() => {
        setCart([]);
        async function fetchData() {
            await fetch(
                process.env.NEXT_PUBLIC_BACKEND! +
                    process.env.NEXT_PUBLIC_UPDATECART,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwt}`,
                    },
                    body: JSON.stringify({
                        courseList: [],
                    }),
                }
            );
        }
        if (logIn) {
            fetchData();
        }
    }, []);

    return (
        <div className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg drop-shadow-md transform scale-105 transition-transform duration-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-green-500 mx-auto mb-4 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M9.293 14.293a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414L10 11.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0z"
                        clipRule="evenodd"
                    />
                    <path
                        fillRule="evenodd"
                        d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"
                        clipRule="evenodd"
                    />
                </svg>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                    Payment Successful!
                </h2>
                <p className="text-gray-600 mb-6">
                    Thank you for your payment. Your transaction was successful.
                </p>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-105 transition-transform duration-300"
                    onClick={() => {
                        router.push("/checkout-cart");
                    }}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default PaymentSuccess;
