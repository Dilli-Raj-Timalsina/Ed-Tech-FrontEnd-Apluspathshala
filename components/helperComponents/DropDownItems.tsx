export default function DropDownItems() {
    return (
        <div className="z-10 mt-5 bg-white divide-y divide-gray-100 rounded-lg drop-shadow-md w-44 h-fit">
            <ul className="py-2 text-base font-semibold text-gray-900 hover:text-gray-950 ">
                <li>
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-200 drop-shadow-sm"
                    >
                        Dashboard
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-200 drop-shadow-sm"
                    >
                        Settings
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-200 drop-shadow-sm"
                    >
                        Earnings
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-blue-200 drop-shadow-sm"
                    >
                        Sign out
                    </a>
                </li>
            </ul>
        </div>
    );
}
