import CreateCourse from "@/components/becomeTeacherComponents/CreateCourse";
import BuildBrand from "@/components/becomeTeacherComponents/BuildBrand";
import ExpandReach from "@/components/becomeTeacherComponents/ExpandReach";
import QualityCourse from "@/components/becomeTeacherComponents/QualityCourse";
// import BuildBrandPara from "@/components/becomeTeacherComponents/BuildBrandPara";
import HowItWorks from "@/components/becomeTeacherComponents/HowItWorks";

export default function Home() {
    return (
        <div>
            <CreateCourse></CreateCourse>
            <div>
                <div className="flex">
                    <BuildBrand></BuildBrand>

                    <p className="p-4 w-1/2 invisible md:flex hidden">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Optio esse eligendi tenetur nobis fugiat nisi
                        consequatur, vero placeat, sit dolore deleniti sint. Et
                        quisquam voluptatum accusantium distinctio quo sed,
                        expedita sunt vero, ducimus fuga at delectus numquam
                        perferendis cum ab suscipit, doloremque ut consectetur
                        velit assumenda. Odit maiores itaque iste?Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Laboriosam,
                        dolor!
                    </p>
                </div>
                <div className="flex md:p-4">
                    <p className=" w-1/2 pr-3 invisible  hidden md:flex">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Optio esse eligendi tenetur nobis fugiat nisi
                        consequatur, vero placeat, sit dolore deleniti sint. Et
                        quisquam voluptatum accusantium distinctio quo sed,
                        expedita sunt vero, ducimus fuga at delectus numquam
                        perferendis cum ab suscipit, doloremque ut consectetur
                        velit assumenda. Odit maiores itaque iste?Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Laboriosam,
                        dolor!
                    </p>
                    <ExpandReach></ExpandReach>
                </div>
                <QualityCourse></QualityCourse>
            </div>
            <HowItWorks></HowItWorks>
        </div>
    );
}
