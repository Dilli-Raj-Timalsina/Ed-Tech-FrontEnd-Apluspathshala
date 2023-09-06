"use client";

import Link from "next/link";
import { useContext } from "react";
import { SideBarContext } from "@/app/layout";
import { LogInContext } from "@/app/layout";
import { useRouter } from "next/navigation";
import ProfileIcon from "../dashBoardComponents/ProfileIcon";

export default function SideBar() {
    const { logIn } = useContext(LogInContext);
    const router = useRouter();
    const { sideBarToggle, setSideBarToggle } = useContext(SideBarContext);
    return (
        <aside
            className={`  overflow-y-scroll z-50 bg-white divide-y divide-gray-300  shadow w-4/5 h-screen mb-8  ${
                sideBarToggle ? " flex flex-col " : " hidden"
            }`}
        >
            <ul
                className={`py-1 text-sm text-blue-600 underline font-semibold  border border-l-0 border-gray-300 ${
                    logIn ? " hidden" : ""
                }`}
            >
                <li className="block px-4 py-2  drop-shadow-sm ">
                    <Link href="/login">Login</Link>
                </li>
                <li className="block px-4 py-2  drop-shadow-sm ">
                    <Link href="/signup" className="">
                        Signup
                    </Link>
                </li>
            </ul>
            <div
                className="mx-4 my-2 w-fit h-fit"
                onClick={() => {
                    setSideBarToggle(!sideBarToggle);
                }}
            >
                <ProfileIcon logIn={logIn}></ProfileIcon>
            </div>
            <ul className="py-2 text-base drop-shadow-sm font-semibold text-gray-900">
                <li className=" px-4 py-2  flex items-center justify-between">
                    <a href="/categories/web-development">Web Development</a>
                    <img
                        src="/side-arrow.svg"
                        alt=""
                        className="w-5 h-5 inline-block"
                    />
                </li>
                <li className=" px-4 py-2  flex items-center justify-between">
                    <a href="categories/open-source">Open Source</a>
                    <img
                        src="/side-arrow.svg"
                        alt=""
                        className="w-5 h-5 inline-block"
                    />
                </li>
                <li className=" px-4 py-2  flex items-center justify-between">
                    <a href="/categories/cloud-and-devops">Cloud and DevOps</a>
                    <img
                        src="/side-arrow.svg"
                        alt=""
                        className="w-5 h-5 inline-block"
                    />
                </li>
                <li className=" px-4 py-2  flex items-center justify-between">
                    <a href="/categories/class-10">Class 10th MatheMatics</a>
                    <img
                        src="/side-arrow.svg"
                        alt=""
                        className="w-5 h-5 inline-block"
                    />
                </li>
                <li className=" px-4 py-2  flex items-center justify-between">
                    <a href="/categories/cmat">CMAT Entrance Preparation</a>
                    <img
                        src="/side-arrow.svg"
                        alt=""
                        className="w-5 h-5 inline-block"
                    />
                </li>
                <li className=" px-4 py-2  flex items-center justify-between">
                    <a href="/categories/class-11">Class 11</a>
                    <img
                        src="/side-arrow.svg"
                        alt=""
                        className="w-5 h-5 inline-block"
                    />
                </li>
                <li className=" px-4 py-2  flex items-center justify-between">
                    <a href="categories/class-12">class 12 </a>
                    <img
                        src="/side-arrow.svg"
                        alt=""
                        className="w-5 h-5 inline-block"
                    />
                </li>
                <li className=" px-4 py-2  flex items-center justify-between">
                    <a href="/categories/backend-dev">Backend Development</a>
                    <img
                        src="/side-arrow.svg"
                        alt=""
                        className="w-5 h-5 inline-block"
                    />
                </li>
                <li className=" px-4 py-2  flex items-center justify-between">
                    <a href="/categories/bba">BBA</a>
                    <img
                        src="/side-arrow.svg"
                        alt=""
                        className="w-5 h-5 inline-block"
                    />
                </li>
                <li className=" px-4 py-2  flex items-center justify-between">
                    <a href="/categories/ias">IAS Officer</a>
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
