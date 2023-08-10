"use client";

import LearnMoreButton from "./LearnMoreButton";

export default function ExpandReach() {
    return (
        <div
            data-aos="fade-up-left"
            data-aos-delay="30"
            data-aos-duration="900"
            className="h-1/2 w-1/2  mt-8 mr-10  rounded-b-full rounded-r-full bg-slate-200  drop-shadow-md flex flex-col "
        >
            <div className="text-3xl  text-gray-900 font-bold mt-14 ml-44  drop-shadow-sm">
                Expand Your Reach
            </div>
            <div className="flex justify-between  ">
                <div className="flex flex-col">
                    <p className="text-base text-gray-800 font-semibold pt-10 ml-20">
                        Reach students all over the world and make a positive
                        impact on their lives. as an expert in your field.Create
                        a strong online presence and establish yourself as an
                        expert in your field.Create a strong online presence and
                        establish yourself yourself as an expert in your field.
                    </p>
                    <div className="mb-44 ml-20 mt-4">
                        <LearnMoreButton></LearnMoreButton>
                    </div>
                </div>
                <img src="/reach.png" alt="" className="w-64 h-fit  " />
            </div>
        </div>
    );
}
