"use client";
export default function QualityCourse() {
    return (
        <div
            data-aos="fade-up-right"
            data-aos-delay="30"
            data-aos-duration="900"
            className="h-1/2 md:w-1/2 pb-10 mb-10 md:mb-0 md:pb-0 w-screen  bg-slate-200 rounded-l-full rounded-b-full drop-shadow-md flex flex-col "
        >
            <div className="mt-14 ml-16   md:ml-56 md:text-3xl text-2xl  text-gray-900 font-bold  drop-shadow-sm">
                <span className="hidden md:inline-block"> Offer High </span>{" "}
                Quality Course
            </div>
            <div className="flex justify-between  ">
                <div className="flex flex-col">
                    <p className="md:pt-10 md:ml-20 pl-8  pt-4 text-base text-gray-800 font-semibold ">
                        Offer a strong online presence and establish yourself as
                        an expert in your field.hey whatup I am brother .{" "}
                        <span className="hidden md:inline-block">
                            Create a strong online presence and establish
                            yourself as an expert in your field. Create a strong
                            jskjksjs online presence and establish yourself as
                            an
                        </span>
                    </p>
                    <div className="mb-44 ml-20 mt-4 hidden md:flex">
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
                <img
                    src="/growth.png"
                    alt=""
                    className="md:w-64 w-24 h-fit  "
                />
            </div>
        </div>
    );
}
