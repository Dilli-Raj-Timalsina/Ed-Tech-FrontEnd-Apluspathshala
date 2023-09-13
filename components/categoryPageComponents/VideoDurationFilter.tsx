interface VideoDurationFilterProps {
    setDurationFilter: React.Dispatch<React.SetStateAction<number>>;
}
export default function VideoDurationFilter({
    setDurationFilter,
}: VideoDurationFilterProps) {
    return (
        <div>
            <div className="flex items-center">
                <input
                    type="radio"
                    id="option1"
                    name="video"
                    className=" w-4 h-4 border border-gray-500 pt-1"
                    onChange={() => setDurationFilter(0)}
                />
                <label
                    htmlFor="option1"
                    className="text-base text-gray-800 font-semibold ml-4"
                >
                    0 - All
                </label>
            </div>
            <div className="flex items-center">
                <input
                    type="radio"
                    id="option2"
                    name="video"
                    className=" w-4 h-4 border-2 border-gray-500"
                    onChange={() => setDurationFilter(2)}
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
                    onChange={() => setDurationFilter(4)}
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
                    onChange={() => setDurationFilter(8)}
                />
                <label
                    htmlFor="option4"
                    className="text-base text-gray-800 font-semibold ml-4"
                >
                    8 - 16 hours
                </label>
            </div>
            <div className="flex items-center">
                <input
                    type="radio"
                    id="option5"
                    name="video"
                    className=" w-4 h-4 border-2 border-gray-500"
                    onChange={() => setDurationFilter(16)}
                />
                <label
                    htmlFor="option5"
                    className="text-base text-gray-800 font-semibold ml-4"
                >
                    16+ hours
                </label>
            </div>
        </div>
    );
}
