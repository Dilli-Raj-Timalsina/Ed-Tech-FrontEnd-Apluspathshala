"use client";
import OneCourse from "./OneCourse";
import { useEffect, useState } from "react";

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
interface AllCourseProps {
    ratingFilter: number;
    durationFilter: number;
    category: string;
    page: number;
    totalCourse: number;
    setTotalCourse: React.Dispatch<React.SetStateAction<number>>;
}

export default function AllCourse({
    ratingFilter,
    durationFilter,
    category,
    page,
    totalCourse,
    setTotalCourse,
}: AllCourseProps) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const output = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND!}${
                    process.env.NEXT_PUBLIC_GETALLCOURSES
                }/${category}?rating=${ratingFilter}&duration=${durationFilter}&page=${page}`
            );
            const res = await output.json();
            setData(res.courses);
            setTotalCourse(res.courseCount);
        }
        fetchData();
    }, [ratingFilter, durationFilter, page]);
    let items;
    if (data && data[0]) {
        items = data.map((current: Course, index) => {
            current.totalStudent = current.userIds.length;
            const {
                userIds,
                createdAt,
                description,
                requirements,
                updatedAt,
                ...rest
            } = current;
            return <OneCourse key={index} {...rest}></OneCourse>;
        });
    }

    return <div className="py-3 divide-y divide-gray-300 ">{items}</div>;
}
