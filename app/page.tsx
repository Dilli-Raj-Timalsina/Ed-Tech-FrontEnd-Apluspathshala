"use client";

import LandingSection from "@/components/mainComponents/LandingSection";
import AllCourseMain from "@/components/mainComponents/AllCourseMain";
import AllCategories from "@/components/mainComponents/AllCategories";

export default function Home() {
    return (
        <div>
            <div className="w-screen h-fit  bg-white ">
                <LandingSection></LandingSection>
            </div>
            <div>
                <h1 className="text-3xl font-semibold  drop-shadow-md p-6 pl-8">
                    Popular Courses
                </h1>
            </div>
            <AllCourseMain></AllCourseMain>
            <h1 className="text-3xl font-semibold  drop-shadow-md p-4 pl-6">
                Top Categories
            </h1>
            <AllCategories></AllCategories>
        </div>
    );
}
