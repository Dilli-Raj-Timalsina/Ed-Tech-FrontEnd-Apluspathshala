"use client";

import CourseCard from "./CourseCard";

export default function AllCourseMain() {
    const content = data.map((item, index) => {
        return <CourseCard key={index} {...item}></CourseCard>;
    });
    return (
        <div className="flex flex-row  gap-3 m-6 border bg-gray-100 border-slate-200 overflow-x-auto rounded-sm ">
            {content}
        </div>
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
