export default function Page() {
    return (
        <nav className="bg-blue-500">
            <div className="mx-auto px-4 py-2 max-w-screen-lg flex items-center justify-between">
                <a href="#" className="text-white font-bold text-lg">
                    Logo
                </a>
                <ul className="flex">
                    <li>
                        <a
                            href="#"
                            className="text-white hover:text-gray-300 px-4 py-2"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-white hover:text-gray-300 px-4 py-2"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-white hover:text-gray-300 px-4 py-2"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
