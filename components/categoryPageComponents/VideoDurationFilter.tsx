interface VideoDurationFilterProps {
    durationFilter: number;
}
export default function VideoDurationFilter({
    durationFilter,
}: VideoDurationFilterProps) {
    return (
        <div>
            <div className="flex items-center">
                <input
                    type="radio"
                    id="option1"
                    name="video"
                    className=" w-4 h-4 border border-gray-500 pt-1"
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
                    type="radio"
                    id="option2"
                    name="video"
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
                    type="radio"
                    id="option3"
                    name="video"
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
                    type="radio"
                    id="option4"
                    name="video"
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
                    type="radio"
                    id="option5"
                    name="video"
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
