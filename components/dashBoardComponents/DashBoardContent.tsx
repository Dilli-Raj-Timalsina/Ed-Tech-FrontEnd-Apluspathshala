"use client";
import Cookies from "universal-cookie";
import CourseContent from "./CourseContent";
import { useContext } from "react";
import { LogInContext } from "@/app/layout";

interface DashBoardContentProps {
    clickedItem: string;
    setClickedItem: React.Dispatch<React.SetStateAction<string>>;
}

function DashBoardComponent() {
    const cookies = new Cookies();
    const { logIn } = useContext(LogInContext);
    let name = cookies.get("name");

    return (
        logIn && (
            <div className="w-full h-screen bg-slate-50 border-b border-gray-300 hidden md:flex">
                <div className="pt-10 pl-10">
                    <h1 className="text-center text-gray-700 font-bold text-3xl">
                        Welcome Back , {name} :
                    </h1>
                </div>
            </div>
        )
    );
}

export default function DashBoardContent({
    clickedItem,
}: DashBoardContentProps) {
    const getComponent = (name: string) => {
        if (name == "DASHBOARD") {
            return <DashBoardComponent></DashBoardComponent>;
        } else if (name == "COURSES") {
            return <CourseContent></CourseContent>;
        }
    };
    return getComponent(clickedItem);
}
