import Head from "next/head";

const HomePage = () => {
    return (
        <>
            <Head>
                <title>My Next.js App</title>
            </Head>
            <div className="bg-gray-100 min-h-screen">
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
                <main className="max-w-screen-lg mx-auto pt-8 px-4">
                    <h1 className="text-4xl font-bold mb-4">
                        Welcome to my Next.js App
                    </h1>
                    <p className="text-lg text-gray-700 mb-8">
                        This is a simple web page created using Page.tsx and
                        Tailwind CSS for my Next.js app.
                    </p>
                    <img
                        src="/image.png"
                        alt="Example Image"
                        className="mb-8"
                    />
                    <p className="text-lg text-gray-700">
                        Thanks for visiting!
                    </p>
                </main>
            </div>
        </>
    );
};

export default HomePage;
