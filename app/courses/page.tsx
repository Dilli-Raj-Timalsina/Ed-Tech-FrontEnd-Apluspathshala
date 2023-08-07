import ContentBox from "@/components/courseConsumeComponents/ContentBox";
import RequirementsSection from "@/components/courseConsumeComponents/RequirementsSection";
import DescriptionBox from "@/components/courseConsumeComponents/DescriptionBox";
import VideoBox from "@/components/courseConsumeComponents/VideoBox";
import CourseMetaData from "@/components/courseConsumeComponents/CourseMetaData";

export default function Home() {
    return (
        <div>
            <CourseMetaData></CourseMetaData>
            <VideoBox></VideoBox>
            <ContentBox></ContentBox>
            <RequirementsSection></RequirementsSection>
            <DescriptionBox></DescriptionBox>
        </div>
    );
}
