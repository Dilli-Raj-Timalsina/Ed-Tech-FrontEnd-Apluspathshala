"use client";

import CourseCard from "./CourseCard";
import { useContext } from "react";
import { LogInContext } from "@/app/layout";
import { CartContext } from "@/app/layout";
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
                "http://localhost:3001/api/v1/course/getPopularCourse",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            );
            const op = (await res.json()).course;
            console.log(op);
            setCourseData(op);
        }

        fetchData();
    }, []);
    let content;
    if (courseData) {
        content = courseData.map((item, index) => {
            return (
                <CourseCard
                    key={index}
                    thumNail={item.thumbNail}
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

const data = [
    {
        imgSrc: "image1.jpg",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: 29.99,
        rating: 4.5,
        student: 500,
    },
    {
        imgSrc: "image2.jpg",
        title: "Course 1 Lorem ipsum dolor sit, amet consectetur adipisicing 2",
        price: 19.99,
        rating: 3.8,
        student: 320,
    },
    {
        imgSrc: "image3.jpg",
        title: "Course 1 Lorem ipsum dolor sit, amet consectetur adipisicing 3",
        price: 39.99,
        rating: 4.2,
        student: 750,
    },
    {
        imgSrc: "image4.jpg",
        title: "Course 1 Lorem ipsum dolor sit, amet consectetur adipisicing 4",
        price: 24.99,
        rating: 4.0,
        student: 420,
    },
    {
        imgSrc: "image5.jpg",
        title: "Course 1 Lorem ipsum dolor si",
        price: 15.99,
        rating: 3.7,
        student: 280,
    },
    {
        imgSrc: "image6.jpg",
        title: "Course 1 Lorem ipsum dolor sit, amet consectetur adipisicing 6",
        price: 49.99,
        rating: 4.8,
        student: 920,
    },
];
