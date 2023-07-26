interface ButtonProps {
    label?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}
export default function ButtonAuth({ label, onClick, children }: ButtonProps) {
    return (
        <button
            className="bg-blue-500 px-3 py-1 m-1 rounded-md  text-white font-normal text-sm hover:drop-shadow-xl hover:bg-blue-600"
            onClick={onClick}
        >
            {label || children}
        </button>
    );
}
