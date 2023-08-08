"use client";
import { useContext } from "react";
import { CartContext } from "./layout";
import { SideBarContext } from "./layout";
import LandingSection from "@/components/mainComponents/LandingSection";
import CourseCard from "@/components/mainComponents/CourseCard";
import CategoriesCard from "@/components/mainComponents/CategoriesCard";
import SideBar from "@/components/navComponents/SideBar";

export default function Home() {
    const { cartCount, setCartCount } = useContext(CartContext);
    const { sideBarToggle } = useContext(SideBarContext);
    return (
        <div>
            <SideBar sideBarToggle={sideBarToggle}></SideBar>
            <div className="w-screen h-fit  bg-white ">
                <LandingSection></LandingSection>
            </div>
            <div>
                <h1 className="text-3xl font-semibold  drop-shadow-md p-6 pl-8">
                    Popular Courses
                </h1>
            </div>
            <div className="flex flex-row  gap-3 m-6 border-2 border-slate-100 overflow-x-auto rounded-sm">
                <CourseCard
                    imgSrc="/itemclass.webp"
                    cartCount={cartCount}
                    setCartCount={setCartCount}
                ></CourseCard>
                <CourseCard
                    cartCount={cartCount}
                    setCartCount={setCartCount}
                ></CourseCard>
                <CourseCard
                    cartCount={cartCount}
                    setCartCount={setCartCount}
                ></CourseCard>
                <CourseCard
                    cartCount={cartCount}
                    setCartCount={setCartCount}
                ></CourseCard>
                <CourseCard
                    cartCount={cartCount}
                    setCartCount={setCartCount}
                ></CourseCard>
                <CourseCard
                    cartCount={cartCount}
                    setCartCount={setCartCount}
                ></CourseCard>
                <CourseCard
                    cartCount={cartCount}
                    setCartCount={setCartCount}
                ></CourseCard>
                <CourseCard
                    cartCount={cartCount}
                    setCartCount={setCartCount}
                ></CourseCard>
            </div>
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
