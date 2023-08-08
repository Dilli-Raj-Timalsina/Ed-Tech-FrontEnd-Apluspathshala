import AllCourse from "@/components/categoryPageComponents/AllCourses";
import FilterOne from "@/components/categoryPageComponents/FilterOne";
export default function Home() {
    return (
        <div className="mt-32 ml-10">
            <h1 className="text-gray-800 text-3xl font-bold ">
                All Web Development courses
            </h1>
            <FilterOne></FilterOne>
            <div className="mt-6 ml-72">
                <AllCourse></AllCourse>
            </div>
        </div>
    );
}
