import AllCourse from "@/components/categoryPageComponents/AllCourses";
import AllFilter from "@/components/categoryPageComponents/AllFilter";
import PaginationButton from "@/components/categoryPageComponents/PaginationButton";
export default function Home() {
    return (
        <div>
            <h1 className="text-gray-900 md:text-3xl text-2xl font-bold md:mt-36 mt-10 ml-4">
                All Web Development courses
            </h1>
            <div className="flex md:flex-row flex-col ml-4 md:ml-8 md:mt-8 mt-5 ">
                <div className="w-fit ml-4 md:ml-0">
                    <hr />
                    <AllFilter></AllFilter>
                </div>
                <div className="md:ml-10 ">
                    <AllCourse></AllCourse>
                </div>
            </div>
            <PaginationButton></PaginationButton>
        </div>
    );
}
