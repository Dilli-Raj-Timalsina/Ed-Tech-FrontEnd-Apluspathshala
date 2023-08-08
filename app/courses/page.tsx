import ContentBox from "@/components/courseConsumeComponents/ContentBox";
import RequirementsSection from "@/components/courseConsumeComponents/RequirementsSection";
import DescriptionBox from "@/components/courseConsumeComponents/DescriptionBox";
import VideoBox from "@/components/courseConsumeComponents/VideoBox";
import CourseMetaData from "@/components/courseConsumeComponents/CourseMetaData";
import SideBar from "@/components/navComponents/SideBar";

export default function Home() {
    return (
        <div>
            <SideBar></SideBar>
            <div className="flex justify-between flex-col md:flex-row">
                <CourseMetaData></CourseMetaData>
                <VideoBox></VideoBox>
            </div>
            <ContentBox></ContentBox>
            <RequirementsSection></RequirementsSection>
            <DescriptionBox></DescriptionBox>
        </div>
    );
}
