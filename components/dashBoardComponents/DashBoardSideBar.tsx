"use client";

import ProfileIcon from "./ProfileIcon";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { LogInContext } from "@/app/layout";
import { JwtContext } from "@/app/layout";

export default function DashBoardSideBar() {
    const router = useRouter();
    const { logIn, setLogIn } = useContext(LogInContext);
    const { jwt, setJwt } = useContext(JwtContext);
    const items = obj.map((item) => {
        return (
            <div className="flex pl-16 items-center justify-start hover:bg-blue-600 text-blue-500 hover:text-white cursor-pointer ">
                <img
                    src={`${item.src}`}
                    alt=""
                    className="inline w-6 h-6 mr-3"
                />
                <button
                    className={`text-xl font-bold py-3 drop-shadow-sm `}
                    onClick={() => {
                        if (item.title == "LOGOUT") {
                            setLogIn(false);
                            setJwt("");
                            router.back();
                        }
                    }}
                >
                    {item.title}
                </button>
            </div>
        );
    });
    return (
        <aside className="w-80 h-screen bg-white  border-b border-gray-300   ">
            <div className="flex flex-col pt-10  ">
                <button className="rounded-full w-24 h-24 bg-blue-800 text-center  font-bold text-white text-3xl drop-shadow-sm border-blue-200 border-2 ml-20 mb-5 ">
                    NT
                </button>
                <div className="flex flex-col items-center">
                    <div className=" text-xl font-bold text-gray-800">
                        Nischal Timalsina
                    </div>
                    <div className="mb-10  text-xs text-gray-500">
                        dillirajtimalsina354@gmail.com
                    </div>
                </div>

                {items}
            </div>
        </aside>
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
