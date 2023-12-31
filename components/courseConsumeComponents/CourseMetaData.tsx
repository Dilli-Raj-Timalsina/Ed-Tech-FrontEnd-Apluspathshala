"use client";
import FiveStar from "../helperComponents/FiveStar";

interface CourseMetaProps {
    createdAt: string;
    updatedAt: string;
    title: string;
    subTitle: string;
    reviewScore: number;
    tutorName: string;
    totalStudent: number;
    description: string;
}
export default function CourseMeta({
    createdAt,
    updatedAt,
    title,
    subTitle,
    reviewScore,
    tutorName,
    totalStudent,
    description,
}: CourseMetaProps) {
    function getFirst60Words(sentence: string) {
        const words = sentence.split(/\s+/);
        if (words.length <= 70) {
            return sentence;
        } else {
            return words.slice(0, 70).join(" ");
        }
    }
    return (
        <div className=" ml-2 mt-2 m-1 w-screen md:m-3 md:ml-16 md:mt-32 md:w-1/2  ">
            <h1 className=" text-3xl md:text-4xl font-bold  text-gray-900 mb-1">
                <span> Title : </span>
                <div className="text-2xl md:text-3xl text-gray-800 inline">
                    {title}
                </div>
            </h1>
            <div className="text-base font-medium text-gray-700 md:ml-1 md:mb-1 ">
                {subTitle}
            </div>

            <div className="flex items-center m-3 md:ml-1 mb-0 cursor-pointer">
                <span className="text-yellow-600 text-base font-bold pr-1 inline-block">
                    {reviewScore}
                </span>
                <FiveStar
                    rating={reviewScore}
                    size="w-4 h-4 "
                    color="text-yellow-600 mr-1"
                ></FiveStar>
                <a className="text-sm font-semibold text-blue-600 underline inline-block cursor-pointer">
                    (52545 rating)
                </a>
                <p className="text-sm font-semibold ml-1 inline-block">
                    {totalStudent} students
                </p>
            </div>
            <div className="text-md font-semibold text-gray-800 drop-shadow-sm md:ml-1">
                Created by :{" "}
                <span className="text-md hover:drop-shadow-sm text-blue-600 cursor-pointer underline">
                    {tutorName}
                </span>
                <p className="text-gray-800 text-md mt-2 mb-6">
                    {getFirst60Words(description) + " . . . ."}
                </p>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <img
                            src="/updated-icon.svg"
                            alt=""
                            className="w-5 h-5"
                        />
                        <span className="text-sm font-semibold text-gray-700 m-1">
                            Last updated 7/2023
                        </span>
                    </div>
                    <div className="flex items-center ml-1">
                        <img
                            src="/language-icon.svg"
                            alt=""
                            className="w-5 h-5"
                        />
                        <span className="text-sm font-semibold text-gray-700 m-1">
                            [English,hindi]
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
