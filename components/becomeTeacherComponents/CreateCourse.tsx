"use client";

export default function CreateCourse() {
    return (
        <div className="mt-36 ">
            <div className="flex  justify-center items-center ">
                <div className="text-3xl text-gray-900 font-bold   ">
                    Become A+ Instructor in Few Clicks
                </div>
                <img
                    src="/speed.svg"
                    alt=""
                    className="ml-1 w-9 h-9 animate__animated animate__backInUp animate__repeat-1	"
                />
                <img
                    src="/speed.svg"
                    alt=""
                    className=" w-9 h-9 animate__animated animate__backInUp animate__repeat-1	"
                />
            </div>
            <button className="text-xl bg-purple-600 text-white font-semibold px-3 py-1 ml-10 border border-purple-700 hover:drop-shadow-sm rounded-md">
                Get Started
            </button>
        </div>
    );
}
