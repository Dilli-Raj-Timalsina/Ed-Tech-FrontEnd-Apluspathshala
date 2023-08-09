"use client";

import LearnMoreButton from "./LearnMoreButton";

export default function ExpandReach() {
    return (
        <div className="mt-10  relative right-2 top-1 h-screen w-screen">
            <div className="ml-5 w-1/2 h-3/4 rounded-l-full rounded-t-full bg-slate-200  drop-shadow-md ">
                <h1 className="text-3xl absolute text-gray-900 font-bold m-10 ml-56  drop-shadow-sm">
                    Expand Your Reach
                </h1>
                <img
                    src="/reach.png"
                    alt=""
                    className="w-64 h-fit top-32 right-0  absolute"
                />
                <p className="text-base text-gray-800 font-semibold absolute left-20 top-28 w-1/2">
                    Reach students all over the world and make a positive impact
                    on their lives. as an expert in your field.Create a strong
                    online presence and establish yourself as an expert in your
                    field.Create a strong online presence and establish yourself
                    as an expert in your field.
                </p>

                <LearnMoreButton></LearnMoreButton>
            </div>
        </div>
    );
}
