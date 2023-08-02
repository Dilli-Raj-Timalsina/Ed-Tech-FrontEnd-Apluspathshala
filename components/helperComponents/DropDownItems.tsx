export default function DropDownItems() {
    return (
        <div className="z-10 mt-5 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
            <ul className="py-2 text-sm text-gray-900 hover:text-gray-950 ">
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Settings
                    </a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Earnings
                    </a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Sign out
                    </a>
                </li>
            </ul>
        </div>
    );
}
