"use client";
import { useRouter } from "next/navigation";
import { LogInContext } from "@/app/layout";
import { useContext } from "react";

export default function CreateCourse() {
    const { logIn } = useContext(LogInContext);
    const router = useRouter();
    return (
        <div className="md:mt-44 mt-10 ">
            <div className="flex  flex-col justify-center items-center ">
                <div className="flex md:pb-2 ">
                    <div className="md:text-4xl text-3xl text-gray-900 font-bold  text-center md:pb-4 ">
                        Setup your A+ Studio and Become A+ Instructor in Few
                        Clicks
                    </div>
                    <img
                        src="/speed.svg"
                        alt=""
                        className="w-11 h-11 hidden md:inline-block animate__animated animate__backInUp animate__repeat-1	 animate__slower "
                    />
                    <img
                        src="/speed.svg"
                        alt=""
                        className=" w-11 h-11  hidden md:inline-block animate__animated animate__backInUp animate__repeat-1 animate__delay-1s animate__slower 	"
                    />
                    <img
                        src="/speed.svg"
                        alt=""
                        className=" w-11 h-11  hidden md:inline-block animate__animated animate__backInUp animate__repeat-1 animate__delay-2s animate__slower 	"
                    />
                </div>
                <p className="text-base text-gray-800 font-semibold mb-15 md:w-1/2  pb-8 pt-1 text-center">
                    Reach students all over the world and make a positive impact
                    on their lives. as an expert in your field.Create a strong
                    online presence and establish yourself as an expert in your
                    field.Create a strong online presence and establish yourself
                    yourself as an expert in your field.
                </p>
                <button
                    className="text-xl bg-purple-600 text-white font-semibold px-3 py-1 
                text-center border  border-purple-700 hover:drop-shadow-sm rounded-md mb-28"
                    onClick={() => {
                        if (!logIn) {
                            router.push("/login");
                            return;
                        }
                        router.push("/become-teacher/create-course");
                    }}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
}
