"use client";
// import CartHover from "./CartHover";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CartHover from "./CartHover";
interface CartProps {
    cartItemCount: number;
    // setHover: (isTrue: boolean) => void;
}

export default function Cart({ cartItemCount = 0 }: CartProps) {
    const router = useRouter();
    const [hover, setHover] = useState(false);
    return (
        <div
            className=" inline-block"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <button
                className="hidden relative  sm:flex py-8"
                onClick={() => router.push("/checkout-cart")}
            >
                <img src="/cart-icon.svg" alt="" className="w-6 h-6 " />
                <span
                    className={` absolute h-6 w-6 rounded-full bg-purple-600 pb-2 pt-1 text-xs text-white hover:drop-shadow-sm hover:bg-purple-700 ml-5 mb-5 ${
                        cartItemCount != 0 ? "inline-block" : "hidden"
                    }`}
                >
                    {cartItemCount}
                </span>
            </button>
            <CartHover hover={hover}></CartHover>
        </div>
    );
}
