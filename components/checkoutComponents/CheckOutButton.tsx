"use client";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import Cookies from "universal-cookie";
import BounceSpinners from "../spinners/BounceSpinner";
import ErrorMessage from "../spinners/ErrorMessage";

interface Course {
    price: number;
    title: string;
}
interface CheckOutButtonProps {
    totalPrice: number;
    carts: Course[];
    courseIds: string[];
}
export default function CheckOutButton({
    totalPrice,
    carts,
    courseIds,
}: CheckOutButtonProps) {
    const cookies = new Cookies();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // payment integration
    const makePayment = async () => {
        if (totalPrice == 0) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }

        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE!);

        const body = {
            products: carts,
            userId: cookies.get("id"),
            courseIds: courseIds,
            ok: [1, 2, 3, 4],
        };
        const headers = {
            "Content-Type": "application/json",
        };
        const response = await fetch(
            process.env.NEXT_PUBLIC_BACKEND! + process.env.NEXT_PUBLIC_CHECKOUT,
            {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
            }
        );

        const session = await response.json();
        stripe!.redirectToCheckout({
            sessionId: session.id,
        });
    };
    return (
        <div className="md:mr-28 ml-1">
            {error && (
                <ErrorMessage
                    message={"Empty Cart , Please Select an Item ! "}
                />
            )}
            <div className="text-gray-500 text-lg font-semibold p-2">
                Total :
            </div>
            <div className="text-gray-950 text-3xl font-bold p-2 ">
                ${totalPrice}
            </div>
            <button
                className="text-xl font-semibold px-12 py-3 bg-purple-600 rounded-sm my-2 text-white mb-6"
                onClick={makePayment}
                disabled={loading}
            >
                {loading ? <BounceSpinners /> : "Checkout"}
            </button>
            <hr />
            <div className="mt-6">
                <h1 className="text-xl font-semibold text-gray-700 ">
                    Coupen Code
                </h1>

                <div className="flex items-center space-x-2 mt-2">
                    <input
                        type="text"
                        placeholder="Enter coupon code"
                        className="border rounded-sm px-3 py-2  focus:border-slate-600 border-slate-500 "
                    />
                    <button className="bg-purple-700 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:bg-purple-800">
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
}
