"use client";

import LearnMoreButton from "./LearnMoreButton";

export default function ExpandReach() {
    return (
        <div
            data-aos="fade-up-left"
            data-aos-delay="30"
            data-aos-duration="900"
            className="h-1/2 md:w-1/2 w-screen md:mt-8 md:mr-10 mb-10 rounded-b-full rounded-r-full bg-slate-200  drop-shadow-md flex flex-col m-1 pb-3"
        >
            <div className="md:mt-14 mt-10  md:ml-44   ml-6 pb-3 md:text-3xl text-2xl drop-shadow-sm text-gray-900 font-bold ">
                Expand Your Reach
            </div>
            <div className="flex justify-between  ">
                <div className="flex flex-col">
                    <p className="md:text-base text-sm text-gray-800 font-semibold md:pt-10 md:ml-20 pl-6">
                        Reach students all over the world and make a positive
                        impact on their lives. <span> </span>{" "}
                        <span className="hidden md:inline-block">
                            as an expert in your field.Create a strong online
                            presence and establish yourself as an expert in your
                            field.Create a strong online presence and establish
                            yourself yourself as an expert in your field.
                        </span>
                    </p>
                    <div className="mb-44 ml-20 mt-4 hidden md:flex">
                        <LearnMoreButton></LearnMoreButton>
                    </div>
                </div>
                <img src="/reach.png" alt="" className="md:w-64 w-24 h-fit  " />
            </div>
        </div>
    );
}
