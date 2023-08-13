"use client";

import LandingSection from "@/components/mainComponents/LandingSection";
import AllCourseMain from "@/components/mainComponents/AllCourseMain";
import CategoriesCard from "@/components/mainComponents/CategoriesCard";
import SideBar from "@/components/navComponents/SideBar";

export default function Home() {
    return (
        <div>
            <SideBar></SideBar>
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

            <div className=" flex flex-row overflow-x-auto md:overflow-hidden  md:grid md:grid-cols-4 justify-around md:gap-2  border-2 border-slate-100 bg-slate-50 md:m-6 m-2 rounded-lg drop-shadow-lg mt-5 mb-5 pt-6 pb-6">
                <CategoriesCard
                    title="Engineering"
                    buttonLabel="Explore"
                ></CategoriesCard>
                <CategoriesCard
                    title="Engineering"
                    buttonLabel="Explore"
                ></CategoriesCard>
                <CategoriesCard
                    title="Engineering"
                    buttonLabel="Explore"
                ></CategoriesCard>
                <CategoriesCard
                    title="Engineering"
                    buttonLabel="Explore"
                ></CategoriesCard>
                <CategoriesCard
                    title="Engineering"
                    buttonLabel="Explore"
                ></CategoriesCard>
                <CategoriesCard
                    title="Engineering"
                    buttonLabel="Explore"
                ></CategoriesCard>
                <CategoriesCard
                    title="Engineering"
                    buttonLabel="Explore"
                ></CategoriesCard>
                <CategoriesCard
                    title="Engineering"
                    buttonLabel="Explore"
                ></CategoriesCard>
            </div>
        </div>
    );
}
