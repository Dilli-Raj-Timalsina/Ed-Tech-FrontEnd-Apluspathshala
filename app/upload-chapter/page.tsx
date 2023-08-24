import AddSection from "@/components/uploadCourseComponents/sections/AddSection";
import ChapterBox from "@/components/uploadCourseComponents/sections/ChapterBox";
export default function Home() {
    return (
        <div className="mt-32 ml-4">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <h2 className="text-3xl font-extrabold text-blue-500 drop-shadow-sm mb-4  ml-14 inline">
                        Upload Chapter Here
                    </h2>
                    <img
                        src="/upload-here-icon.svg"
                        alt=""
                        className="w-10 h-10 inline pl-2 "
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-extrabold text-blue-500 drop-shadow-sm mb-4  mr-64 inline">
                        Chapter Number
                    </h2>
                </div>
            </div>
            <div className="flex justify-around">
                <AddSection></AddSection>
                <ChapterBox></ChapterBox>
            </div>
        </div>
    );
}
