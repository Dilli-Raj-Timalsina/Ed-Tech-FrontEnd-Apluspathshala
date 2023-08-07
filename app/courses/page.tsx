import ContentBox from "@/components/courseConsumeComponents/ContentBox";
import RequirementsSection from "@/components/courseConsumeComponents/RequirementsSection";
import DescriptionBox from "@/components/courseConsumeComponents/DescriptionBox";
import CourseTitle from "@/components/courseConsumeComponents/CourseTitle";

export default function Home() {
    return (
        <div>
            <CourseTitle></CourseTitle>
            <ContentBox></ContentBox>
            <RequirementsSection></RequirementsSection>
            <DescriptionBox></DescriptionBox>
        </div>
    );
}
