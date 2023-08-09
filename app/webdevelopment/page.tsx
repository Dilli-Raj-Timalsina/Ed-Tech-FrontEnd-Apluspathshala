import AllCourse from "@/components/categoryPageComponents/AllCourses";
import RatingFlter from "@/components/categoryPageComponents/RatingFilter";
import VideoDurationFilter from "@/components/categoryPageComponents/VideoDurationFilter";
import PriceFilter from "@/components/categoryPageComponents/PriceFilter";
export default function Home() {
    return (
        <div className="mt-32 ml-10">
            <h1 className="text-gray-800 text-3xl font-bold ">
                All Web Development courses
            </h1>
            <RatingFlter></RatingFlter>
            <br />
            <VideoDurationFilter></VideoDurationFilter>
            <br />
            <PriceFilter></PriceFilter>
            <div className="mt-6 ml-72">
                <AllCourse></AllCourse>
            </div>
        </div>
    );
}
