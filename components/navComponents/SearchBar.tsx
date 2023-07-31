import React from "react";

const SearchBar = () => (
    <form>
        <div className="relative md:w-96 ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
            </div>
            <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 focus:outline-none rounded-2xl bg-gray-50 focus:drop-shadow-xl "
                placeholder="search..."
            />
            <button
                type="submit"
                className="hidden md:flex text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 hover:drop-shadow-md font-medium rounded-lg text-sm px-4 py-2  "
            >
                Search
            </button>
        </div>
    </form>
);

export default SearchBar;