"use client";

import ButtonAuth from "@/components/navComponents/ButtonAuth";
import Footer from "@/components/footerComponents/Footer";
import NavBar from "@/components/navComponents/NavBar";
import Logo from "@/components/navComponents/logo";
import NavItem from "@/components/navComponents/NavItem";
import SearchBar from "@/components/navComponents/SearchBar";
import Category from "@/components/navComponents/Category";
import Cart from "@/components/navComponents/Cart";
import Section from "@/components/mainComponents/Section";
import CourseCard from "@/components/mainComponents/CourseCard";
import Categories from "@/components/mainComponents/Categories";
import SideBar from "@/components/helperComponents/SideBar";
import DropDownItems from "@/components/helperComponents/DropDownItems";
export default function Home() {
    return (
        <>
            <NavBar>
                <Logo className="hidden md:flex" />
                <Category></Category>
                <SearchBar></SearchBar>
                <Logo className="flex sm:hidden" />

                <div className="flex justify-around items-center gap-4">
                    <NavItem>Teach on A+</NavItem>
                    <NavItem>Contact us</NavItem>
                </div>
                <Cart></Cart>
                <div className="hidden md:flex md:gap-2">
                    <ButtonAuth>Signup</ButtonAuth>
                    <ButtonAuth>login</ButtonAuth>
                </div>
            </NavBar>

            {/* <SideBar></SideBar> */}
            {/* <DropDownItems></DropDownItems> */}

            {/* <Signup
                onSubmit={({
                    firstName,
                    lastName,
                    email,
                    phone,
                    password,
                    passwordConfirm,
                }) => {}}
            /> */}
            <div className="w-screen h-fit  bg-white ">
                <Section></Section>
            </div>
            <div>
                <h1 className="text-3xl font-semibold  drop-shadow-md p-6 pl-8">
                    Popular Courses
                </h1>
            </div>
            <div className="flex flex-row  gap-3 m-6 border-2 border-slate-100 overflow-x-auto rounded-sm">
                <CourseCard imgSrc="/itemclass.webp"></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
            </div>
            <h1 className="text-3xl font-semibold  drop-shadow-md p-4 pl-6">
                Top Categories
            </h1>

            <div className="grid  grid-cols-1 sm:grid-cols-4 justify-around gap-2 border-2 border-slate-100 bg-slate-50 m-6 rounded-lg drop-shadow-lg mt-8 mb-8 pt-6 pb-6">
                <Categories></Categories>
                <Categories></Categories>
                <Categories></Categories>
                <Categories></Categories>
                <Categories></Categories>
                <Categories></Categories>
                <Categories></Categories>
                <Categories></Categories>
            </div>
            <Footer></Footer>
        </>
    );
}
