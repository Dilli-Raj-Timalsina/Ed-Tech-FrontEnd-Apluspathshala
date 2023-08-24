"use client";
import { useState } from "react";
import AddSection from "@/components/uploadCourseComponents/sections/AddSection";
import ChapterBox from "@/components/uploadCourseComponents/sections/ChapterBox";

export default function Home() {
    const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

    return (
        <div className="md:mt-32 mt-10 md:ml-4 ">
            <div className="flex md:flex-row flex-col justify-between items-center ">
                <div className="flex items-center">
                    <h2 className="md:text-3xl text-xl md:font-extrabold font-bold text-blue-500 drop-shadow-sm md:mb-4 mb-2 md:ml-14 ml-2 inline">
                        Upload Chapter Here
                    </h2>
                    <img
                        src="/upload-here-icon.svg"
                        alt=""
                        className="w-10 h-10 inline pl-2 "
                    />
                </div>
                <div className="hidden md:flex">
                    <h2 className="text-3xl font-extrabold text-blue-500 drop-shadow-sm mb-4  mr-48 inline">
                        Chapter Uploaded
                        <img
                            src="/correct-icon.svg"
                            alt=""
                            className="w-8 h-fit inline-block ml-1"
                        />
                    </h2>
                </div>
            </div>
            <div className="flex md:flex-row flex-col justify-around md:mb-20 mb-10">
                <AddSection
                    selectedNumbers={selectedNumbers}
                    setSelectedNumbers={setSelectedNumbers}
                ></AddSection>
                <div className="flex md:hidden">
                    <h2 className="md:text-3xl text-xl font-extrabold text-blue-500 drop-shadow-sm md:mb-4 mb-0  md:mr-48  inline mt-8 md:mt-0 ml-1 md:ml-0">
                        Chapter Uploaded
                        <img
                            src="/correct-icon.svg"
                            alt=""
                            className="w-8 h-fit inline-block ml-1"
                        />
                    </h2>
                </div>
                <ChapterBox selectedNumbers={selectedNumbers}></ChapterBox>
            </div>
        </div>
    );
}
