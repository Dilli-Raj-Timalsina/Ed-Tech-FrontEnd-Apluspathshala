import { useState, useEffect } from "react";
import searchInHouse from "@/utils/searchInHouse";
import searchCodeInAPI from "@/utils/searchCourseInAPI";
import { useRouter } from "next/navigation";

interface SearchResultsInHouse {
    title: string;
    link: string;
}
interface SearchResultsAPIType {
    id: string;
    title: string;
}
export default function SearchBar() {
    const [searchItem, setSearchItem] = useState("");
    const [searchResults, setSearchResults] = useState<SearchResultsInHouse[]>(
        []
    );
    const [searchResultsAPI, setSearchResultsAPI] = useState<
        SearchResultsAPIType[]
    >([]);

    const router = useRouter();

    useEffect(() => {
        const performSearch = async () => {
            setSearchResults(searchInHouse(searchItem));
            const dataFromAPI = await searchCodeInAPI(searchItem);
            setSearchResultsAPI(dataFromAPI);
        };
        performSearch();
    }, [searchItem]);

    const handleOnChange = (item: string) => {
        setSearchItem(item);
    };

    return (
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
                    value={searchItem}
                    onChange={(e) => handleOnChange(e.target.value)}
                />
                <button
                    type="submit"
                    className="hidden md:flex text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 hover:drop-shadow-md font-medium rounded-lg text-sm px-4 py-2  "
                >
                    Search
                </button>
            </div>

            {(searchResults.length >= 1 || searchResultsAPI.length >= 1) && (
                <div className="fixed md:top-16 md:left-96 md:pt-4 md:w-1/2 md:rounded-lg  w-full   top-20 left-0   h-fit bottom-0 shadow-lg  z-50 bg-white  overflow-y-auto">
                    <ul className="drop-shadow-sm max-h-96 overflow-y-auto">
                        {searchResults.map((result, index) => (
                            <li
                                key={index}
                                className={
                                    "hover:bg-gray-200 hover:text-gray-950  hover:cursor-pointer pl-4 text-gray-600"
                                }
                                onClick={() => {
                                    setSearchResults([]);
                                    setSearchItem("");
                                    router.push(`/categories/${result.link}`);
                                }}
                            >
                                {result.title}
                            </li>
                        ))}
                        {searchResultsAPI.map((result, index) => (
                            <li
                                key={index}
                                className="hover:bg-gray-200 hover:text-gray-950 cursor-pointer pl-4 text-gray-600 "
                                onClick={() => {
                                    setSearchResults([]);
                                    setSearchItem("");
                                    router.push(`/course/${result.id}`);
                                }}
                            >
                                {result.title}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </form>
    );
}
