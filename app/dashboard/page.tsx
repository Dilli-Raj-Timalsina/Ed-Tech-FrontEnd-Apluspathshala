"use client";
import { useState } from "react";
import DashBoardSideBar from "@/components/dashBoardComponents/DashBoardSideBar";
import DashBoardContent from "@/components/dashBoardComponents/DashBoardContent";

export default function Home() {
    const [clickedItem, setClickedItem] = useState("DASHBOARD");
    return (
        <div className=" md:mt-20 flex md:flex-row flex-col">
            <DashBoardSideBar
                setClickedItem={setClickedItem}
            ></DashBoardSideBar>
            <DashBoardContent
                clickedItem={clickedItem}
                setClickedItem={setClickedItem}
            ></DashBoardContent>
        </div>
    );
}
