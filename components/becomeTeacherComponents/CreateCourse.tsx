"use client";

export default function CreateCourse() {
    return (
        <div className="mt-44 ">
            <div className="flex  flex-col justify-center items-center ">
                <div className="flex pb-2">
                    <div className="text-4xl text-gray-900 font-bold   ">
                        Setup your A+ Studio and Become A+ Instructor in Few
                        Clicks
                    </div>
                    <img
                        src="/speed.svg"
                        alt=""
                        className="ml-1 w-11 h-11 animate__animated animate__backInUp animate__repeat-1	 animate__slower inline-block"
                    />
                    <img
                        src="/speed.svg"
                        alt=""
                        className=" w-11 h-11 animate__animated animate__backInUp animate__repeat-1 animate__delay-1s animate__slower inline-block	"
                    />
                </div>
                <p className="text-base text-gray-800 font-semibold mb-15 w-1/2 pb-0 p-4">
                    Reach students all over the world and make a positive impact
                    on their lives. as an expert in your field.Create a strong
                    online presence and establish yourself as an expert in your
                    field.Create a strong online presence and establish yourself
                    yourself as an expert in your field.
                </p>
                <button className="text-xl bg-purple-600 text-white font-semibold px-3 py-1 ml-10 border border-purple-700 hover:drop-shadow-sm rounded-md mb-28">
                    Get Started
                </button>
            </div>
        </div>
    );
}
