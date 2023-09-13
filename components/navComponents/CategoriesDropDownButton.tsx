import { useState } from "react";
import { useContext } from "react";
import { SideBarContext } from "@/app/layout";
import CategoriesDropDownItems from "./CategoriesDropDownItems";

interface DropDownButtonProps {
    children?: string;
}

export default function CategoriesDropDownButton({
    children = "Categories",
}: DropDownButtonProps) {
    const { sideBarToggle, setSideBarToggle } = useContext(SideBarContext);
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        setClicked(!clicked);
    }

    return (
        <div>
            <div>
                <img
                    src="/bar-icon.svg"
                    alt="icon"
                    className="w-10 h-10 md:hidden"
                    onClick={() => {
                        setSideBarToggle(!sideBarToggle);
                    }}
                />
                <button
                    className="hidden md:inline-flex text-blue-800 bg-white hover:text-blue-900 border border-slate-300 font-semibold rounded-lg text-base px-3 py-2 text-center items-center hover:drop-shadow-md "
                    type="button"
                    onClick={handleClick}
                >
                    {children}
                    <img
                        src="/categories-icon.svg"
                        alt="icon"
                        className={`w-2.5 h-2.5 ml-2.5 ${
                            clicked ? "rotate-180 duration-300" : ""
                        }`}
                    />
                </button>
            </div>
            <CategoriesDropDownItems
                clicked={clicked}
            ></CategoriesDropDownItems>
        </div>
    );
}
