"use client";

import Link from "next/link";
import { useContext } from "react";
import { SideBarContext } from "@/app/layout";

export default function SideBar() {
    const { sideBarToggle, setSideBarToggle } = useContext(SideBarContext);
    return (
        <aside
            className={`  overflow-y-scroll z-50 bg-white divide-y divide-gray-300  shadow w-4/5 h-screen mb-8 ${
                sideBarToggle ? " flex flex-col " : " hidden"
            }`}
        >
            <ul className="py-1 text-sm text-blue-600 underline font-semibold  border border-l-0 border-gray-300">
                <li className="block px-4 py-2  drop-shadow-sm ">
                    <Link href="/login">Login</Link>
                </li>
                <li className="block px-4 py-2  drop-shadow-sm ">
                    <Link href="/signup" className="">
                        Signup
                    </Link>
                </li>
            </ul>
            <ul className="py-2 text-base drop-shadow-sm font-semibold text-gray-900">
                <li className=" px-4 py-2  flex items-center justify-between">
                    <a href="#">Web Developement</a>
                    <img
                        src="/side-arrow.svg"
                        alt=""
                        className="w-5 h-5 inline-block"
                    />
                </li>
                <li className=" px-4 py-2  flex items-center justify-between">
                    <a href="#">Entrance Preparation</a>
                    <img
                        src="/side-arrow.svg"
                        alt=""
                        className="w-5 h-5 inline-block"
                    />
                </li>
                <li className=" px-4 py-2  flex items-center justify-between">
                    <a href="#">MBBS Entrance Preparation</a>
                    <img
                        src="/side-arrow.svg"
                        alt=""
                        className="w-5 h-5 inline-block"
                    />
                </li>
                <li className=" px-4 py-2  flex items-center justify-between">
                    <a href="#">IIT</a>
                    <img
                        src="/side-arrow.svg"
                        alt=""
                        className="w-5 h-5 inline-block"
                    />
                </li>
                <li className=" px-4 py-2  flex items-center justify-between">
                    <a href="#">Entrance Preparation</a>
                    <img
                        src="/side-arrow.svg"
                        alt=""
                        className="w-5 h-5 inline-block"
                    />
                </li>
                <li className=" px-4 py-2  flex items-center justify-between">
                    <a href="#">Class 11</a>
                    <img
                        src="/side-arrow.svg"
                        alt=""
                        className="w-5 h-5 inline-block"
                    />
                </li>
                <li className=" px-4 py-2  flex items-center justify-between">
                    <a href="#">class 12 </a>
                    <img
                        src="/side-arrow.svg"
                        alt=""
                        className="w-5 h-5 inline-block"
                    />
                </li>
                <li className=" px-4 py-2  flex items-center justify-between">
                    <a href="#">10th Mathmatics</a>
                    <img
                        src="/side-arrow.svg"
                        alt=""
                        className="w-5 h-5 inline-block"
                    />
                </li>
                <li className=" px-4 py-2  flex items-center justify-between">
                    <a href="#">BBA</a>
                    <img
                        src="/side-arrow.svg"
                        alt=""
                        className="w-5 h-5 inline-block"
                    />
                </li>
                <li className=" px-4 py-2  flex items-center justify-between">
                    <a href="#">CMAT</a>
                    <img
                        src="/side-arrow.svg"
                        alt=""
                        className="w-5 h-5 inline-block"
                    />
                </li>
            </ul>
        </aside>
    );
}
