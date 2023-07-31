export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 h-44">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <p>&copy; {new Date().getFullYear()} Your Company</p>
                        <p>All rights reserved</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="/" className="hover:text-gray-400">
                            Home
                        </a>
                        <a href="/about" className="hover:text-gray-400">
                            About
                        </a>
                        <a href="/contact" className="hover:text-gray-400">
                            Contact
                        </a>
                        {/* Add more links as needed */}
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Add Facebook icon SVG code here */}
                            </svg>
                        </a>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/* Add Twitter icon SVG code here */}
                            </svg>
                        </a>
                        {/* Add more social media icons as needed */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
