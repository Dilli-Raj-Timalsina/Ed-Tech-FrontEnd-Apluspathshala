import { useContext } from "react";
import { ThemeContext } from "@/app/page";

interface ButtonProps {
    label?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset";
}
export default function ButtonAuth({
    label,
    onClick,
    children,
    type,
}: ButtonProps) {
    const val = useContext(ThemeContext);

    return (
        <button
            className="bg-purple-700 px-3 py-1 m-1 rounded-md  text-white font-normal text-sm hover:drop-shadow-xl hover:bg-purple-800"
            onClick={onClick}
            type={type}
        >
            {label || children}
        </button>
    );
}
