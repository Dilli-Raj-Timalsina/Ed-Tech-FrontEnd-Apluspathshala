import Link from "next/link";

async function getData() {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Page() {
    const data = await getData();
    console.log(data);

    return (
        <>
            <nav className="bg-blue-500">
                <div className="mx-auto px-4 py-2 max-w-screen-lg flex items-center justify-between">
                    <a href="#" className="text-white font-bold text-lg">
                        Logo
                    </a>
                    {/* import Link from 'next/link' */}
                    <Link href="/upload">Dashboard</Link>

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
            <div>
                <img src={data.message} />
            </div>
        </>
    );
}
