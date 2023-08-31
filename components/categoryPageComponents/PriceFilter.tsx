// interface PriceFilterProps {
//     isFreeFilter: boolean;
//     setIsFreeFilter: React.Dispatch<React.SetStateAction<boolean>>;
// }
export default function PriceFilter() {
    return (
        <div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="free"
                    name="price"
                    className=" w-4 h-4 border-2 border-gray-500 pt-1"
                />
                <label
                    htmlFor="free"
                    className="text-base text-gray-800 font-semibold ml-6"
                >
                    Free
                </label>
            </div>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="paid"
                    name="price"
                    className=" w-4 h-4 border-2 border-gray-500"
                />
                <label
                    htmlFor="paid"
                    className="text-base text-gray-800 font-semibold ml-6"
                >
                    Paid
                </label>
            </div>
        </div>
    );
}
