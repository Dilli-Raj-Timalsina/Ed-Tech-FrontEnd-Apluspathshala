import RatingFilter from "./RatingFilter";
import PriceFilter from "./PriceFilter";
import VideoDurationFilter from "./VideoDurationFilter";

export default function AllFilter() {
    return (
        <div className="">
            <p className="text-gray-800 text-xl font-bold my-5">Ratings</p>
            <RatingFilter></RatingFilter>
            <p className="text-gray-800 text-xl font-bold my-5">
                Video Duration{" "}
            </p>
            <VideoDurationFilter></VideoDurationFilter>
            <p className="text-gray-800 text-xl font-bold my-5">Price</p>
            <PriceFilter></PriceFilter>
        </div>
    );
}
