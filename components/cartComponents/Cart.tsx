"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// import CartHover from "./CartHover";
interface CartProps {
    cart: string[];
}

export default function Cart({ cart }: CartProps) {
    const router = useRouter();
    // const [hover, setHover] = useState(false);
    return (
        <div
            className=" inline-block"
            // onMouseEnter={() => setHover(true)}
            // onMouseLeave={() => setHover(false)}
        >
            <button
                className="hidden relative  sm:flex py-8"
                onClick={() => router.push("/checkout-cart")}
            >
                <img src="/cart-icon.svg" alt="" className="w-6 h-6 " />
                <span
                    className={` absolute h-6 w-6 rounded-full bg-purple-600 pb-2 pt-1 text-xs text-white hover:drop-shadow-sm hover:bg-purple-700 ml-5 mb-5 ${
                        cart.length != 0 ? "inline-block" : "hidden"
                    }`}
                >
                    {cart.length}
                </span>
            </button>
            {/* <CartHover hover={hover}></CartHover> */}
        </div>
    );
}
