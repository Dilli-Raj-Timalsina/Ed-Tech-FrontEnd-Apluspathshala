"use client";
import LearnMoreButton from "./LearnMoreButton";
export default function BuildBrand() {
    return (
        <div className="mt-36 h-screen w-screen">
            <div className="ml-5 w-1/2 h-3/4 rounded-l-full rounded-t-full bg-slate-200  drop-shadow-md ">
                <h1 className="text-3xl absolute text-gray-900 font-bold m-10 ml-56  drop-shadow-sm">
                    Build Your Brand
                </h1>
                <img
                    src="/growth.png"
                    alt=""
                    className="w-64 h-fit top-32 right-0  absolute"
                />
                <p className="text-base text-gray-800 font-semibold absolute left-20 top-28 w-1/2">
                    Create a strong online presence and establish yourself as an
                    expert in your field.Create a strong online presence and
                    establish yourself as an expert in your field.Create a
                    strong online presence and establish yourself as an expert
                    in your field.
                </p>

                <LearnMoreButton></LearnMoreButton>
            </div>
        </div>
    );
}
