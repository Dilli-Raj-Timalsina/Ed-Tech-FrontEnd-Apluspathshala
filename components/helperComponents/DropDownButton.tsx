// interface are written in UpperCamelCase
interface DropDownButtonProps {
    children?: string;
}

export default function DropDownButton({
    children = "Categories",
}: DropDownButtonProps) {
    return (
        <div>
            <img
                src="/bar-icon.svg"
                alt="icon"
                className="w-10 h-10 md:hidden "
            />
            <button
                className="hidden md:inline-flex text-blue-800 bg-white hover:text-blue-900 border border-slate-300 font-semibold rounded-lg text-base px-3 py-2 text-center items-center    hover:drop-shadow-md"
                type="button"
            >
                {children}
                <img
                    src="/categories-icon.svg"
                    alt="icon"
                    className="w-2.5 h-2.5 ml-2.5 "
                />
            </button>
        </div>
    );
}
