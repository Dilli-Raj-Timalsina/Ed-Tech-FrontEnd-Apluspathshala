"use client";
import { useState, useEffect } from "react";
import OneCourseCheckOut from "@/components/checkoutComponents/OneCourseCheckOut";
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

export default function CourseContent() {
    const { logIn } = useContext(LogInContext);
    const { cart } = useContext(CartContext);
    const { jwt } = useContext(JwtContext);

    const [courseData, setCourseData] = useState<Course[]>([]);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                process.env.NEXT_PUBLIC_BACKEND! +
                    process.env.NEXT_PUBLIC_GETPURCHASEDCOURSE,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            const courses = await res.json();
            setCourseData(courses.doc);
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
                    key={index}
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
                    name="dashboard"
                ></OneCourseCheckOut>
                <hr className="text-gray-900" />
            </div>
        ));
    }

    return (
        <div className="w-full h-fit bg-slate-50 border-b border-gray-300 pt-4 md:pl-6 ">
            <h1 className="font-bold text-gray-900 text-4xl mb-10">
                Your Purchase :
            </h1>
            <div className="flex flex-col md:flex-row justify-between">
                {courseData && <div>{content}</div>}
            </div>
        </div>
    );
}
