"use client";
import { useState, useEffect } from "react";
import OneCourseCheckOut from "@/components/checkoutComponents/OneCourseCheckOut";
import CheckOutButton from "@/components/checkoutComponents/CheckOutButton";
import { useContext } from "react";
import { LogInContext } from "@/app/layout";
import { CartContext } from "@/app/layout";
import { JwtContext } from "@/app/layout";

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

export default function Home() {
    const { logIn } = useContext(LogInContext);
    const { cart } = useContext(CartContext);
    const { jwt } = useContext(JwtContext);
    const [totalPrice, setTotalPrice] = useState(0);
    const [courseData, setCourseData] = useState<Course[]>([]);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                "http://localhost:3001/api/v1/review/getCartData",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwt}`,
                    },
                    body: JSON.stringify({
                        cart: cart,
                    }),
                }
            );
            const courses = await res.json();
            setCourseData(courses.doc);
            setTotalPrice(courses.totalPrice);
        }
        if (logIn) {
            fetchData();
        }
    }, [cart]);

    let content;
    if (courseData) {
        content = courseData.map((item, index) => (
            <div className="w-fit">
                <OneCourseCheckOut
                    index={index}
                    category={item.category}
                    title={item.title}
                    subTitle={item.subTitle}
                    rating={item.reviewScore}
                    price={item.price}
                    tutorName={item.tutorName}
                    totalLength={parseFloat(item.duration)}
                    totalStudent={item.totalStudent}
                    thumbNail={item.thumbNail}
                    id={item.id}
                ></OneCourseCheckOut>
                <hr className="text-gray-900" />
            </div>
        ));
    }

    return (
        <div className="md:mt-36 md:ml-10 mt-4 ml-1">
            <h1 className="font-bold text-gray-900 text-4xl mb-10">
                Shopping Cart
            </h1>
            <div className="flex flex-col md:flex-row justify-between">
                {courseData && <div>{content}</div>}
                <CheckOutButton
                    totalPrice={totalPrice}
                    carts={courseData}
                ></CheckOutButton>
            </div>
        </div>
    );
}
