"use client";

import CourseCard from "./CourseCard";
import { useContext } from "react";
import { JwtContext } from "@/app/layout";
import { useState, useEffect } from "react";

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

export default function AllCourseMain() {
    const { jwt } = useContext(JwtContext);
    const [courseData, setCourseData] = useState<Course[]>([]);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                process.env.NEXT_PUBLIC_BACKEND! +
                    process.env.NEXT_PUBLIC_GETPOPULARCOURSE,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            const op = (await res.json()).course;
            setCourseData(op);
        }

        fetchData();
    }, []);
    let content;
    if (courseData) {
        content = courseData.map((item, index) => {
            item.totalStudent = item.userIds.length;
            return (
                <CourseCard
                    key={index}
                    thumbNail={item.thumbNail}
                    title={item.title}
                    price={item.price}
                    rating={item.reviewScore}
                    student={item.totalStudent}
                    id={item.id}
                ></CourseCard>
            );
        });
    }
    return (
        courseData && (
            <div className="flex flex-row  gap-3 m-6 border bg-gray-100 border-slate-200 overflow-x-auto rounded-sm ">
                {content}
            </div>
        )
    );
}
