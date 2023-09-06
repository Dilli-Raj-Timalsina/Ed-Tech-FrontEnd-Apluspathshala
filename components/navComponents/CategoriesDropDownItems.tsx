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
                        href="categories/web-development"
                        className="block px-4 py-2 w-56 hover:bg-blue-300 drop-shadow-sm"
                    >
                        Web Development
                    </a>
                </li>
                <li>
                    <a
                        href="categories/open-source"
                        className="block px-4 py-2 hover:bg-blue-300 drop-shadow-sm"
                    >
                        Open Source
                    </a>
                </li>
                <li>
                    <a
                        href="/categories/backend-dev"
                        className="block px-4 py-2 hover:bg-blue-300 drop-shadow-sm"
                    >
                        Backend Dev
                    </a>
                </li>
                <li>
                    <a
                        href="categories/class-11"
                        className="block px-4 py-2 hover:bg-blue-300 drop-shadow-sm"
                    >
                        class 11
                    </a>
                </li>
                <li>
                    <a
                        href="categories/class-12"
                        className="block px-4 py-2 hover:bg-blue-300 drop-shadow-sm"
                    >
                        class 12
                    </a>
                </li>
                <li>
                    <a
                        href="categories/class-10"
                        className="block px-4 py-2 hover:bg-blue-300 drop-shadow-sm"
                    >
                        10th Mathematics
                    </a>
                </li>
                <li>
                    <a
                        href="categories/cloud-and-devops"
                        className="block px-4 py-2 hover:bg-blue-300 drop-shadow-sm"
                    >
                        Cloud and DevOps
                    </a>
                </li>
                <li>
                    <a
                        href="categories/cmat"
                        className="block px-4 py-2 hover:bg-blue-300 drop-shadow-sm"
                    >
                        CMAT Preparation
                    </a>
                </li>
            </ul>
        </div>
    );
}
