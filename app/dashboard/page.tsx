import DashBoardSideBar from "@/components/dashBoardComponents/DashBoardSideBar";
import DashBoardContent from "@/components/dashBoardComponents/DashBoardContent";
export default function Home() {
    return (
        <div className=" md:mt-20 flex">
            <DashBoardSideBar></DashBoardSideBar>
            <DashBoardContent></DashBoardContent>
        </div>
    );
}
