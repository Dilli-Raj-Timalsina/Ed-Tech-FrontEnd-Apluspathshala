"use client";
import { CartContext } from "@/app/layout";
import { useContext } from "react";
import FiveStar from "@/components/helperComponents/FiveStar";
import { useRouter } from "next/navigation";
import { JwtContext } from "@/app/layout";
interface OneCourseProps {
    id: string;
    category: string;
    title: string;
    subTitle: string;
    rating: number;
    price: number;
    tutorName: string;
    totalLength: number;
    totalStudent: number;
    thumbNail: string;
    name: string;
}
export default function OneCourseCheckOut(props: OneCourseProps) {
    const { jwt } = useContext(JwtContext);
    const { cart, setCart } = useContext(CartContext);
    const router = useRouter();

    //handle remove cart click
    async function handleClick() {
        const updatedCart = cart.filter((item) => item !== props.id);
        setCart(updatedCart);
        await fetch("http://localhost:3001/api/v1/review/updateCart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`,
            },
            body: JSON.stringify({
                courseList: updatedCart,
            }),
        });
    }
    return (
        <div className="flex w-fit mr-2 md:mr-8  py-3 md:py-5 ">
            <img
                src="https://marketplace.canva.com/EAFQ_lV2WWs/1/0/1600w/canva-green-modern-how-to-make-money-online-youtube-thumbnail-oSD7Nn4_0lg.jpg"
                alt=""
                className="w-14 md:w-52 h-fit border md:border-2 border-gray-300 cursor-pointer"
                onClick={() => {
                    let route = `/course/${props.id}`;
                    router.push(route);
                }}
            />
            <div className="flex flex-col justify-start ml-1 md:ml-3 ">
                <div className="flex justify-between items-center">
                    <h1
                        className=" text-sm md:text-xl w-44 md:w-fit font-bold text-gray-800 cursor-pointer"
                        onClick={() => {
                            let route = `/course/${props.id}`;
                            router.push(route);
                        }}
                    >
                        {props.title}
                    </h1>
                    <span className="text-sm md:text-base font-bold pl-4 md:pl-20 text-purple-700">
                        ${props.price}
                        <img
                            src="/price-tag.svg"
                            alt=""
                            className="w-5 h-6 pl-1 inline-block"
                        />
                    </span>
                </div>

                <p className="text-xs md:text-sm font-semibold text-blue-600  hover:underline cursor-pointer">
                    By : {props.tutorName}
                </p>
                <div className="flex items-center  ">
                    <span className="text-yellow-950 text-xs md:text-sm font-bold pr-1 inline-block">
                        {props.rating}
                    </span>
                    <FiveStar
                        size="md:w-3 md:h-3 w-2 h-2"
                        rating={props.rating}
                        color=" text-yellow-700"
                    ></FiveStar>

                    <p className="text-xs md:text-sm font-semibold md:ml-1 inline-block">
                        ({props.totalStudent}) students
                    </p>
                </div>
                <div className="flex justify-between">
                    <span className="text-xs md:text-sm text-gray-700 font-medium block">
                        {props.totalLength} total hours
                    </span>
                    <button
                        className={`text-white bg-purple-700 hover:bg-purple-800  font-medium rounded-lg text-sm px-3 py-1 text-center whitespace-nowrap ${
                            props.name == "checkout" ? "" : "hidden"
                        }`}
                        onClick={handleClick}
                    >
                        Remove Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
