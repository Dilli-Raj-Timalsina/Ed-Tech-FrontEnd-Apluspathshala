interface ButtonAuthProps {
    children: React.ReactNode;
    label?: string;
}
export default function ButtonAuth({ children, label }: ButtonAuthProps) {
    return (
        <button className="bg-blue-600 px-3 py-1  rounded-md  text-white font-normal text-sm hover:drop-shadow-xl hover:bg-blue-700">
            {label || children}
        </button>
    );
}
