import FiveStar from "../helperComponents/FiveStar";

export default function FilterOne() {
    return (
        <div>
            <div className="flex items-center m-3">
                <FiveStar
                    rating={4}
                    size="w-3 h-3"
                    color="text-yellow-600"
                ></FiveStar>

                <span className="text-sm text-gray-900 font-medium ml-1">
                    4.0 and Up
                </span>
            </div>
            <div className="flex items-center m-3">
                <FiveStar
                    rating={3}
                    size="w-3 h-3"
                    color="text-yellow-600"
                ></FiveStar>

                <span className="text-sm text-gray-900 font-medium ml-1">
                    3.0 and Up
                </span>
            </div>
            <div className="flex items-center m-3">
                <FiveStar
                    rating={2}
                    size="w-3 h-3"
                    color="text-yellow-600"
                ></FiveStar>

                <span className="text-sm text-gray-900 font-medium ml-1">
                    2.0 and Up
                </span>
            </div>
            <div className="flex items-center m-3">
                <FiveStar
                    rating={1}
                    size="w-3 h-3"
                    color="text-yellow-600"
                ></FiveStar>

                <span className="text-sm text-gray-900 font-medium ml-1">
                    1.0 and Up
                </span>
            </div>
        </div>
    );
}
