"use client";
import { useContext } from "react";
import { LogInContext } from "@/app/layout";
import { CartContext } from "@/app/layout";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";

interface CartProps {
    hover: boolean;
}
interface ContentComponentProps {
    title: string;
    price: number;
    image: string;
    instructor: string;
}
interface Course {
    id: string;
    userIds: [];
    createdAt: string;
    description: string;
    requirements: string;
    updatedAt: string;
    category: string;
    title: string;
    subTitle: string;
    duration: string;
    reviewScore: number;
    price: number;
    tutorName: string;
    totalStudent: number;
    thumbNail: string;
}
function ContentComponent({
    title,
    price,
    image,
    instructor,
}: ContentComponentProps) {
    return (
        <div className="flex w-full h-20  cursor-pointer items-center py-2 px-1 hover:bg-gray-100">
            <img src={image} alt="" className="w-16 h-16 pr-1" />
            <div className="flex flex-col ">
                <div className="text-sm font-bold text-gray-800 ">
                    {title.split(" ").slice(0, 4).join(" ") + "...."}
                </div>
                <div className="text-sm font-semibold text-gray-700">
                    {instructor}
                </div>
                <div className="text-sm font-bold text-gray-900">
                    {"$" + price}
                </div>
            </div>
        </div>
    );
}
export default function CartHover({ hover }: CartProps) {
    const { logIn } = useContext(LogInContext);
    const { cart } = useContext(CartContext);
    const [cartData, setCartData] = useState<Course[]>([]);
    const cookies = new Cookies();
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                "http://localhost:3001/api/v1/review/getCartData",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${cookies.get("jwt")}`,
                    },
                }
            );
            const updatedCartData: Course[] = (await res.json()).doc;
            setCartData(updatedCartData);
        }

        if (cookies.get("isLoggedIn")) {
            fetchData();
        }
    }, [hover]);

    console.log(cartData);
    const content = cartData.map((content, index) => (
        <div key={index}>
            <ContentComponent
                image={content.thumbNail}
                instructor={content.tutorName}
                title={content.title}
                price={content.price}
            />
            <hr />
        </div>
    ));
    return (
        <div
            className={` top-16 ${
                logIn ? "right-32" : "right-52"
            } z-50 pt-1 pb-1 md:fixed bg-white w-72 h-80  absoulte  border border-slate-300 overflow-y-scroll  ${
                hover ? "flex flex-col" : "hidden"
            }`}
        >
            {content}
        </div>
    );
}
