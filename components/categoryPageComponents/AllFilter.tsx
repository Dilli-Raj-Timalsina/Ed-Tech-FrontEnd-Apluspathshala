import RatingFilter from "./RatingFilter";
import PriceFilter from "./PriceFilter";
import VideoDurationFilter from "./VideoDurationFilter";

interface AllFilterProps {
    ratingFilter: number;
    setRatingFilter: React.Dispatch<React.SetStateAction<number>>;
    isFreeFilter: boolean;
    setIsFreeFilter: React.Dispatch<React.SetStateAction<boolean>>;
    durationFilter: number;
    setDurationFilter: React.Dispatch<React.SetStateAction<number>>;
}

export default function AllFilter({
    ratingFilter,
    setDurationFilter,
    setRatingFilter,
    durationFilter,
}: AllFilterProps) {
    return (
        <div className="">
            <p className="text-gray-800 text-xl font-bold my-5">Ratings</p>
            <RatingFilter setRatingFilter={setRatingFilter}></RatingFilter>
            <p className="text-gray-800 text-xl font-bold my-5">
                Video Duration{" "}
            </p>
            <VideoDurationFilter
                setDurationFilter={setDurationFilter}
            ></VideoDurationFilter>
            <p className="text-gray-800 text-xl font-bold my-5">Price</p>
            <PriceFilter></PriceFilter>
        </div>
    );
}
