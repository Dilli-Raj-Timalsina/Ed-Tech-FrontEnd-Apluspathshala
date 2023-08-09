export default function PriceFilter() {
    return (
        <div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="option1"
                    name="price"
                    className=" w-4 h-4 border-2 border-gray-500 pt-1"
                />
                <label
                    htmlFor="option1"
                    className="text-base text-gray-800 font-semibold ml-6"
                >
                    Free
                </label>
            </div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="option2"
                    name="price"
                    className=" w-4 h-4 border-2 border-gray-500"
                />
                <label
                    htmlFor="option2"
                    className="text-base text-gray-800 font-semibold ml-6"
                >
                    Paid
                </label>
            </div>
        </div>
    );
}
