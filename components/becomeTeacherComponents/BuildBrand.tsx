"use client";
import LearnMoreButton from "./LearnMoreButton";
export default function BuildBrand() {
    return (
        <div className="h-1/2 w-1/2  ml-10 bg-slate-200 rounded-l-full rounded-t-full drop-shadow-md flex flex-col animate__fadeInTopLeft animate__animated  animate__slower">
            <div className="text-3xl  text-gray-900 font-bold mt-14 ml-56  drop-shadow-sm">
                Build Your Brand
            </div>
            <div className="flex justify-between  ">
                <div className="flex flex-col">
                    <p className="text-base text-gray-800 font-semibold pt-10 ml-20">
                        Create a strong online presence and establish yourself
                        as an expert in your field.Create a strong online
                        presence and establish yourself as an expert in your
                        field.Create a strong online presence and establish
                        yourself as an expert in your field.
                    </p>
                    <div className="mb-44 ml-20 mt-4">
                        <button className="text-base bg-blue-500 hover:bg-blue-600 text-white font-bold px-3 py-1  drop-shadow-sm rounded-md">
                            Learn More
                            <img
                                src="/right-side-arrow-white.svg"
                                alt=""
                                className="w-8 h-fit pl-2 inline-block  animate__animated animate__headShake animate__infinite"
                            />
                        </button>
                    </div>
                </div>
                <img src="/growth.png" alt="" className="w-64 h-fit  " />
            </div>
        </div>
    );
}
