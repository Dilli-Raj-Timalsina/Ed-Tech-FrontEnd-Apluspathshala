"use client";

import LearnMoreButton from "./LearnMoreButton";

export default function QualityCourse() {
    return (
        <div
            data-aos="fade-up-right"
            data-aos-delay="30"
            data-aos-duration="900"
            className="h-1/2 w-1/2  ml-10 mt-6 bg-slate-200 rounded-l-full rounded-b-full drop-shadow-md flex flex-col "
        >
            <div className="text-3xl  text-gray-900 font-bold mt-14 ml-40  drop-shadow-sm">
                Offer High Quality Course
            </div>
            <div className="flex justify-between  ">
                <div className="flex flex-col">
                    <p className="text-base text-gray-800 font-semibold pt-10 ml-20">
                        Offer a strong online presence and establish yourself as
                        an expert in your field.Create a strong online presence
                        and establish yourself as an expert in your field.Create
                        a strong online presence and establish yourself as an
                        expert in your field.
                    </p>
                    <div className="mb-44 ml-20 mt-4">
                        <button className="text-base bg-blue-500 hover:bg-blue-600 text-white font-bold px-3 py-1  drop-shadow-sm rounded-md">
                            Learn More
                            <img
                                src="/right-side-arrow-white.svg"
                                alt=""
                                className="w-8 h-fit pl-2 inline-block animate__animated animate__headShake animate__infinite"
                            />
                        </button>
                    </div>
                </div>
                <img src="/growth.png" alt="" className="w-64 h-fit  " />
            </div>
        </div>
    );
}
