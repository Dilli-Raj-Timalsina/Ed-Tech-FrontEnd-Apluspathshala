"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { LogInContext } from "@/app/layout";
import { JwtContext } from "@/app/layout";
import { CartContext } from "@/app/layout";
import Cookies from "universal-cookie";

interface DashBoardSideBarProps {
    setClickedItem: React.Dispatch<React.SetStateAction<string>>;
}

export default function DashBoardSideBar({
    setClickedItem,
}: DashBoardSideBarProps) {
    const cookies = new Cookies();
    const router = useRouter();
    const { logIn, setLogIn } = useContext(LogInContext);
    const { setJwt } = useContext(JwtContext);
    const { setCart } = useContext(CartContext);

    const items = obj.map((item, index) => {
        return (
            <div
                className="flex pl-16 items-center justify-start hover:bg-blue-600 text-blue-500 hover:text-white cursor-pointer "
                key={index}
                onClick={() => {
                    if (item.title == "LOGOUT") {
                        setLogIn(false);
                        setJwt("");
                        cookies.set("jwt", "");
                        cookies.set("isLoggedIn", false);
                        setCart([]);
                        router.back();
                    } else if (item.title == "COURSES") {
                        setClickedItem("COURSES");
                    } else if (item.title == "DASHBOARD") {
                        setClickedItem("DASHBOARD");
                    }
                }}
            >
                <img
                    src={`${item.src}`}
                    alt=""
                    className="inline w-6 h-6 mr-3"
                />
                <button className={`text-xl font-bold py-3 drop-shadow-sm `}>
                    {item.title}
                </button>
            </div>
        );
    });
    return (
        logIn && (
            <aside className="w-80 h-screen bg-white  border-b border-gray-300   ">
                <div className="flex flex-col pt-10  ">
                    <button className="rounded-full w-24 h-24 bg-blue-800 text-center  font-bold text-white text-3xl drop-shadow-sm border-blue-200 border-2 ml-20 mb-5 ">
                        {cookies.get("icon")}
                    </button>
                    <div className="flex flex-col items-center">
                        <div className=" text-xl font-bold text-gray-800">
                            {cookies.get("name")}
                        </div>
                        <div className="mb-10  text-xs text-gray-500">
                            {cookies.get("email")}
                        </div>
                    </div>

                    {items}
                </div>
            </aside>
        )
    );
}

const obj = [
    {
        title: "DASHBOARD",
        src: "/dashboard-icon.svg",
    },
    {
        title: "COURSES",
        src: "/course-icon.svg",
    },
    {
        title: "CART",
        src: "/cart-icon.svg",
    },
    {
        title: "SETTINGS",
        src: "/settings-icon.svg",
    },
    {
        title: "LOGOUT",
        src: "/logout-icon.svg",
    },
];
