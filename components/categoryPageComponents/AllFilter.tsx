import RatingFilter from "./RatingFilter";
import PriceFilter from "./PriceFilter";
import VideoDurationFilter from "./VideoDurationFilter";

interface AllFilterProps {
    ratingFilter: number;
    isFreeFilter: boolean;
    durationFilter: number;
}

export default function AllFilter({
    ratingFilter,
    isFreeFilter,
    durationFilter,
}: AllFilterProps) {
    return (
        <div className="">
            <p className="text-gray-800 text-xl font-bold my-5">Ratings</p>
            <RatingFilter ratingFilter={ratingFilter}></RatingFilter>
            <p className="text-gray-800 text-xl font-bold my-5">
                Video Duration{" "}
            </p>
            <VideoDurationFilter
                durationFilter={durationFilter}
            ></VideoDurationFilter>
            <p className="text-gray-800 text-xl font-bold my-5">Price</p>
            <PriceFilter isFreeFilter={isFreeFilter}></PriceFilter>
        </div>
    );
}
