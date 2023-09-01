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
            setCourseData((await res.json()).doc);
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
                <CheckOutButton></CheckOutButton>
            </div>
        </div>
    );
}

const dummyData = [
    {
        category: "web development",
        title: "Develop modern, complex, responsive Design",
        tutorName: "Angela Yu",
        subTitle:
            "Master the art of developing modern, complex, responsive and scalable web applications with Angular.",
        rating: 2.7,
        price: 12.99,
        totalLength: 53.2,
        totalStudent: 1209838,
    },
    {
        category: "data science",
        title: "Introduction to Machine Learning",
        tutorName: "John Smith",
        subTitle:
            "Dive into the world of machine learning and gain a solid understanding of its concepts and applications.",
        rating: 4.5,
        price: 19.99,
        totalLength: 36.5,
        totalStudent: 752489,
    },
    {
        category: "graphic design",
        title: "Digital Illustration: From Sketch to Masterpiece",
        tutorName: "Emily Johnson",
        subTitle:
            "Learn the art of digital illustration, from sketching initial ideas to creating stunning masterpieces.",
        rating: 4.8,
        price: 24.99,
        totalLength: 45.7,
        totalStudent: 523671,
    },
    {
        category: "language learning",
        title: "Conversational French for Beginners",
        tutorName: "Pierre Dubois",
        subTitle:
            "Embark on your journey to learn French through engaging conversations and practical exercises.",
        rating: 4.6,
        price: 9.99,
        totalLength: 28.9,
        totalStudent: 289347,
    },
];
