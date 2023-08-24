"use client";
import { getCookie, setCookie } from "cookies-next";
export default function Fake() {
    return (
        <div className="m-44">
            <button
                onClick={() => {
                    console.log(getCookie("jwt"));
                }}
            >
                ok Click
            </button>
        </div>
    );
}
