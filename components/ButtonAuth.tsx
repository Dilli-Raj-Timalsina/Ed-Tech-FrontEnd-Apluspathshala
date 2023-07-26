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
    return (
        <button
            className="bg-blue-500 px-3 py-1 m-1 rounded-md  text-white font-normal text-sm hover:drop-shadow-xl hover:bg-blue-600"
            onClick={onClick}
            type={type}
        >
            {label || children}
        </button>
    );
}
