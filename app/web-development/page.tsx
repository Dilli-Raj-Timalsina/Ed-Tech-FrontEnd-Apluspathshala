import AllCourse from "@/components/categoryPageComponents/AllCourses";
import AllFilter from "@/components/categoryPageComponents/AllFilter";
import PaginationButton from "@/components/categoryPageComponents/PaginationButton";
export default function Home() {
    return (
        <div>
            <h1 className="text-gray-900 text-3xl font-bold mt-36 ml-4">
                All Web Development courses
            </h1>
            <div className="flex ml-8 mt-8 ">
                <div className="w-fit ">
                    <hr />
                    <AllFilter></AllFilter>
                </div>
                <div className="ml-10 ">
                    <AllCourse></AllCourse>
                </div>
            </div>
            <PaginationButton></PaginationButton>
        </div>
    );
}
