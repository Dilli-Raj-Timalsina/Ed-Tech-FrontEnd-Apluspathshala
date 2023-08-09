import FiveStar from "../helperComponents/FiveStar";

export default function RatingFlter() {
    return (
        <div>
            <div className="flex items-center">
                <input type="radio" id="fourAbove" name="rating" />{" "}
                <label htmlFor="fourAbove">
                    <div className="flex items-center ml-2 mb-1">
                        <FiveStar
                            rating={4}
                            size="w-3 h-3 ml-1  "
                            color="text-yellow-600"
                        ></FiveStar>

                        <span className="text-base text-gray-800 font-semibold ml-2">
                            4.0 and Above
                        </span>
                    </div>
                </label>
            </div>
            <div className="flex items-center">
                <input type="radio" id="threeAbove" name="rating" />{" "}
                <label htmlFor="threeAbove">
                    <div className="flex items-center ml-2 mb-1">
                        <FiveStar
                            rating={3}
                            size="w-3 h-3 ml-1 "
                            color="text-yellow-600"
                        ></FiveStar>

                        <span className="text-base text-gray-800 font-medium ml-2">
                            3.0 and Above
                        </span>
                    </div>
                </label>
            </div>
            <div className="flex items-center">
                <input type="radio" id="twoAbove" name="rating" />{" "}
                <label htmlFor="twoAbove">
                    {" "}
                    <div className="flex items-center ml-2  mb-1">
                        <FiveStar
                            rating={2}
                            size="w-3 h-3 ml-1 "
                            color="text-yellow-600"
                        ></FiveStar>

                        <span className="text-base text-gray-800 font-semibold ml-2">
                            2.0 and Above
                        </span>
                    </div>
                </label>
            </div>
            <div className="flex items-center">
                <input type="radio" id="oneAbove" name="rating" />{" "}
                <label htmlFor="oneAbove">
                    {" "}
                    <div className="flex items-center ml-2  mb-1">
                        <FiveStar
                            rating={1}
                            size="w-3 h-3 ml-1 "
                            color="text-yellow-600"
                        ></FiveStar>

                        <span className="text-base text-gray-800 font-semibold ml-2">
                            All
                        </span>
                    </div>
                </label>
            </div>
        </div>
    );
}
