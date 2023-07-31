"use client";

import ButtonAuth from "@/components/navComponents/ButtonAuth";
import Footer from "@/components/footerComponents/Footer";
import NavBar from "@/components/navComponents/NavBar";
import Logo from "@/components/navComponents/logo";
import NavLink from "@/components/navComponents/NavLink";
import SearchBar from "@/components/navComponents/SearchBar";
import Category from "@/components/navComponents/Category";
import Cart from "@/components/navComponents/Cart";
import Section from "@/components/mainComponents/Section";
import CourseCard from "@/components/mainComponents/CourseCard";

export default function Home() {
    return (
        <>
            <NavBar>
                <Logo className="hidden md:flex" />
                <Category></Category>
                <SearchBar></SearchBar>
                <Logo className="flex sm:hidden" />

                <div className="flex justify-around items-center gap-4">
                    <NavLink>Teach on A+</NavLink>
                    <NavLink>Contact us</NavLink>
                </div>
                <Cart></Cart>
                <div className="hidden md:flex md:gap-2">
                    <ButtonAuth>Signup</ButtonAuth>
                    <ButtonAuth>login</ButtonAuth>
                </div>
            </NavBar>

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
            <div className="flex md:flex-row flex-col gap-3 m-6 border-2 border-slate-100 rounded-sm">
                <CourseCard imgSrc="/itemclass.webp"></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
                <CourseCard></CourseCard>
            </div>

            {/* <Footer></Footer> */}
        </>
    );
}
