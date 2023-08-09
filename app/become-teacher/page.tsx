import CreateCourse from "@/components/becomeTeacherComponents/CreateCourse";
import BuildBrand from "@/components/becomeTeacherComponents/BuildBrand";
import ExpandReach from "@/components/becomeTeacherComponents/ExpandReach";
import QualityCourse from "@/components/becomeTeacherComponents/QualityCourse";

export default function Home() {
    return (
        <div>
            <CreateCourse></CreateCourse>
            <BuildBrand></BuildBrand>
            <ExpandReach></ExpandReach>
            <QualityCourse></QualityCourse>
        </div>
    );
}
