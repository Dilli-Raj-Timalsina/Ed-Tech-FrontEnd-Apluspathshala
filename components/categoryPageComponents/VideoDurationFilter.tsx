export default function VideoDurationFilter() {
    return (
        <div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="option1"
                    className=" w-4 h-4 border-2 border-gray-500 pt-1"
                />
                <label
                    htmlFor="option1"
                    className="text-base text-gray-800 font-semibold ml-4"
                >
                    0 - 1 hours
                </label>
            </div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="option2"
                    className=" w-4 h-4 border-2 border-gray-500"
                />
                <label
                    htmlFor="option2"
                    className="text-base text-gray-800 font-semibold ml-4"
                >
                    2 - 4 hours
                </label>
            </div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="option3"
                    className=" w-4 h-4 border-2 border-gray-500"
                />
                <label
                    htmlFor="option3"
                    className="text-base text-gray-800 font-semibold ml-4"
                >
                    4 - 8 hours
                </label>
            </div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="option4"
                    className=" w-4 h-4 border-2 border-gray-500"
                />
                <label
                    htmlFor="option4"
                    className="text-base text-gray-800 font-semibold ml-4"
                >
                    8 - 12 hours
                </label>
            </div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="option5"
                    className=" w-4 h-4 border-2 border-gray-500"
                />
                <label
                    htmlFor="option5"
                    className="text-base text-gray-800 font-semibold ml-4"
                >
                    12+ hours
                </label>
            </div>
        </div>
    );
}
