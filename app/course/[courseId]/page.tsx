"use client";
import { useEffect, useState } from "react";
import ContentBox from "@/components/courseConsumeComponents/ContentBox";
import RequirementsSection from "@/components/courseConsumeComponents/RequirementsSection";
import DescriptionBox from "@/components/courseConsumeComponents/DescriptionBox";
import VideoBox from "@/components/courseConsumeComponents/VideoBox";
import CourseMetaData from "@/components/courseConsumeComponents/CourseMetaData";
import CommentBox from "@/components/courseConsumeComponents/CommentBox";
interface Course {
    id: string;
    userIds: [];
    createdAt: string;
    description: string;
    requirements: string;
    updatedAt: string;
    category: string;
    title: string;
    subTitle: string;
    duration: string;
    reviewScore: number;
    price: number;
    tutorName: string;
    totalStudent: number;
    thumbNail: string;
}
export default function Home({ params }: { params: { courseId: string } }) {
    const [data, setData] = useState<Course>();
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND!}${
                    process.env.NEXT_PUBLIC_COURSEMETADATA
                }/${params.courseId}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const course = (await res.json()).course;
            setData(course);
        }
        fetchData();
    }, []);
    return (
        data && (
            <div>
                <div className="flex justify-between flex-col md:flex-row">
                    <CourseMetaData
                        createdAt={data.createdAt}
                        updatedAt={data.updatedAt}
                        title={data.title}
                        subTitle={data.subTitle}
                        reviewScore={data.reviewScore}
                        tutorName={data.tutorName}
                        totalStudent={data.userIds.length}
                        description={data.description}
                    ></CourseMetaData>
                    <VideoBox price={data.price} id={data.id}></VideoBox>
                </div>
                <ContentBox courseId={data.id}></ContentBox>
                <RequirementsSection
                    requirements={data.requirements}
                ></RequirementsSection>
                <DescriptionBox description={data.description}></DescriptionBox>
                <CommentBox courseId={data.id}></CommentBox>
            </div>
        )
    );
}
