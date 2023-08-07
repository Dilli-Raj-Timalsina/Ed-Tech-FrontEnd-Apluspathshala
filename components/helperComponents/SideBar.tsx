"use client";
import { useState } from "react";

interface SideBarProps {
    sideBarToggle: boolean;
}
export default function SideBar({ sideBarToggle }: SideBarProps) {
    return (
        <aside
            className={` md:hidden  overflow-y-scroll  bg-white divide-y divide-gray-300  shadow w-4/5 h-screen mb-8 ${
                sideBarToggle ? " flex flex-col" : "hidden"
            }`}
        >
            <ul className="py-2 text-sm text-gray-900 hover:text-gray-950 border border-l-0 border-gray-200">
                <li className="block px-4 py-2 hover:bg-gray-100 ">
                    <a href="#">Web Developement</a>
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 ">
                    <a href="#" className="">
                        Programming
                    </a>
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100">
                    <a href="#">Ielts</a>
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100">
                    <a href="#">Loksewa</a>
                </li>
            </ul>
            <ul className="py-2 text-sm text-gray-900 hover:text-gray-950 border border-l-0  border-gray-200">
                <li className="block px-4 py-2 hover:bg-gray-100">
                    <a href="#">Web Developement</a>
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 ">
                    <a href="#" className="">
                        Programming
                    </a>
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100">
                    <a href="#">Ielts</a>
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100">
                    <a href="#">Loksewa</a>
                </li>
            </ul>
            <ul className="py-2 text-sm text-gray-900 hover:text-gray-950 border border-l-0  border-gray-200">
                <li className="block px-4 py-2 hover:bg-gray-100">
                    <a href="#">Web Developement</a>
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 ">
                    <a href="#" className="">
                        Programming
                    </a>
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100">
                    <a href="#">Ielts</a>
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100">
                    <a href="#">Loksewa</a>
                </li>
            </ul>
            <ul className="py-2 text-sm text-gray-900 hover:text-gray-950 border border-l-0  border-gray-200">
                <li className="block px-4 py-2 hover:bg-gray-100">
                    <a href="#">Web Developement</a>
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 ">
                    <a href="#" className="">
                        Programming
                    </a>
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100">
                    <a href="#">Ielts</a>
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100">
                    <a href="#">Loksewa</a>
                </li>
            </ul>
            <ul className="py-2 text-sm text-gray-900 hover:text-gray-950 border border-l-0  border-gray-200">
                <li className="block px-4 py-2 hover:bg-gray-100">
                    <a href="#">Web Developement</a>
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 ">
                    <a href="#" className="">
                        Programming
                    </a>
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100">
                    <a href="#">Ielts</a>
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100">
                    <a href="#">Loksewa</a>
                </li>
            </ul>
            <ul className="py-2 text-sm text-gray-900 hover:text-gray-950 border border-l-0  border-gray-200">
                <li className="block px-4 py-2 hover:bg-gray-100">
                    <a href="#">Web Developement</a>
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 ">
                    <a href="#" className="">
                        Programming
                    </a>
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100">
                    <a href="#">Ielts</a>
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100">
                    <a href="#">Loksewa</a>
                </li>
            </ul>
        </aside>
    );
}
