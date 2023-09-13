"use client";
import { useState } from "react";
import AllCourse from "@/components/categoryPageComponents/AllCourses";
import AllFilter from "@/components/categoryPageComponents/AllFilter";
import PaginationButton from "@/components/categoryPageComponents/PaginationButton";

export default function Home({ params }: { params: { category: string } }) {
    const [ratingFilter, setRatingFilter] = useState(1);
    const [isFreeFilter, setIsFreeFilter] = useState(true);
    const [durationFilter, setDurationFilter] = useState(0);
    const [page, setPage] = useState(0);
    const [totalCourse, setTotalCourse] = useState(0);

    function returnTextCorrSlug(slug: string) {
        if (slug == "web-development") {
            return "Web Development";
        } else if (slug == "cloud-and-devops") {
            return "Cloud and DevOps";
        } else if (slug == "class-10") {
            return "Class 10th MatheMatics";
        } else if (slug == "class-11") {
            return "Class 11";
        } else if (slug == "cmat") {
            return "CMAT Entrance Preparation";
        } else if (slug == "class-12") {
            return "Class 12";
        } else if (slug == "backend-dev") {
            return "Backend Development";
        } else if (slug == "open-source") {
            return "Open Source";
        }
    }

    return (
        <div>
            <h1 className="text-gray-900 md:text-3xl text-2xl font-bold md:mt-36 mt-10 ml-4">
                All {returnTextCorrSlug(params.category)} Courses
            </h1>
            <div className="flex md:flex-row flex-col ml-4 md:ml-8 md:mt-8 mt-5 ">
                <div className="w-fit ml-4 md:ml-0">
                    <hr />
                    <AllFilter
                        {...{
                            isFreeFilter,
                            ratingFilter,
                            durationFilter,
                        }}
                        setIsFreeFilter={setIsFreeFilter}
                        setDurationFilter={setDurationFilter}
                        setRatingFilter={setRatingFilter}
                    ></AllFilter>
                </div>
                <div className="md:ml-10 ">
                    <AllCourse
                        {...{
                            isFreeFilter,
                            ratingFilter,
                            durationFilter,
                        }}
                        category={params.category}
                        page={page}
                        totalCourse={totalCourse}
                        setTotalCourse={setTotalCourse}
                    ></AllCourse>
                </div>
            </div>
            <PaginationButton
                page={page}
                totalCourse={totalCourse}
                setPage={setPage}
            ></PaginationButton>
        </div>
    );
}
