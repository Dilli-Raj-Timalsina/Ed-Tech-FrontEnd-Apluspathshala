interface DropDownItemsProps {
    clicked: boolean;
}
const items = [];
export default function CategoriesDropDownItems({
    clicked,
}: DropDownItemsProps) {
    return (
        <div
            className={`top-16 z-50 ml-56 left-2 md:fixed  bg-slate-100 divide-y divide-gray-100 rounded-lg drop-shadow-md w-56 h-fit ${
                clicked ? "flex" : " hidden"
            }`}
        >
            <ul className="py-2 text-base font-bold ">
                <li>
                    <a
                        href="/web-development"
                        className="block px-4 py-2 w-56 hover:bg-blue-300 drop-shadow-sm"
                    >
                        Web Development
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-300 drop-shadow-sm"
                    >
                        Entrance Preparation
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-300 drop-shadow-sm"
                    >
                        MBBS
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-300 drop-shadow-sm"
                    >
                        class 11
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-300 drop-shadow-sm"
                    >
                        class 12
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-300 drop-shadow-sm"
                    >
                        10th Mathematics
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-300 drop-shadow-sm"
                    >
                        BBA
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-300 drop-shadow-sm"
                    >
                        CMAT Preparation
                    </a>
                </li>
            </ul>
        </div>
    );
}
