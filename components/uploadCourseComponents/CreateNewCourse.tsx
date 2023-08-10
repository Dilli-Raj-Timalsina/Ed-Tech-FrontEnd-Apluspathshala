"use client";

export default function CreateNewCourse() {
    return (
        <div className="flex flex-col md:mt-32 mt:14 items-center justify-center w-screen md:w-5/6 md:ml-28  rounded-lg shadow-lg border-2 border-gray-200 ">
            <h1 className="md:text-3xl text-2xl font-bold text-gray-900 mb-6 pt-12">
                Create a new course
            </h1>
            <div className="mb-4 md:w-1/2 w-full px-3 md:px-0">
                <label
                    htmlFor="title"
                    className="block text-gray-800 font-bold mb-2"
                >
                    Title
                </label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4 md:w-1/2 w-full px-3 md:p-0">
                <label
                    htmlFor="subtitle"
                    className="block text-gray-800 font-bold mb-2"
                >
                    Subtitle
                </label>
                <input
                    id="subtitle"
                    type="text"
                    name="subtitle"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4 md:w-1/2 w-full px-3 md:p-0">
                <label
                    htmlFor="requirements"
                    className="block text-gray-800 font-bold mb-2"
                >
                    Requirements
                </label>
                <div>
                    <input
                        id="requirements"
                        type="text"
                        name="requirements"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        // required
                    />
                </div>
            </div>
            <div className="mb-4 md:w-1/2 w-full px-3 md:p-0">
                <label
                    htmlFor="description"
                    className="block text-gray-800 font-bold mb-2"
                >
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-36"
                    // required
                />
            </div>
            <div className="mb-4 md:w-1/2 w-full px-3 md:p-0">
                <label
                    htmlFor="price"
                    className="block text-gray-800 font-bold mb-2"
                >
                    Price
                </label>
                <input
                    id="price"
                    type="number"
                    name="price"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    // required
                />
            </div>
            <div className="mb-4 md:w-1/2 w-full px-3 md:p-0">
                <label
                    htmlFor="discount"
                    className="block text-gray-800 font-bold mb-2"
                >
                    Discount
                </label>
                <input
                    id="discount"
                    type="number"
                    name="discount"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div className="mb-4 md:w-1/2 w-full px-3 md:p-0">
                <label
                    htmlFor="language"
                    className="block text-gray-800 font-bold mb-2"
                >
                    Language
                </label>
                <input
                    id="language"
                    type="text"
                    name="language"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    // required
                />
            </div>
            <div className="mb-4 md:w-1/2 w-full px-3 md:p-0 ">
                <label
                    htmlFor="binary"
                    className="block text-gray-800 font-bold mb-2"
                >
                    Thumbnail
                </label>

                <div className="flex items-center mb-16">
                    <label
                        htmlFor="binary-upload"
                        className="flex-1 cursor-pointer bg-white rounded-md border-gray-300 hover:border-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500"
                    >
                        <svg
                            className="w-8 h-8 text-gray-600"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 4v16m8-8H4" />
                        </svg>
                        <span className="ml-2 text-sm text-gray-600">
                            Upload a file or drag and drop
                        </span>
                        <input
                            id="binary-upload"
                            type="file"
                            accept="image/jpeg, image/png, image/gif"
                            className="sr-only "
                        />
                    </label>
                </div>
            </div>
        </div>
    );
}
