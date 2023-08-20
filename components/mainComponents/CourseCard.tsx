import { useState } from "react";
import FiveStar from "../helperComponents/FiveStar";
import { useContext } from "react";
import { CartContext } from "./../../app/layout";

interface CourseCardProps {
    imgSrc: string;
    title: string;
    price: number;
    rating: number;
    student: number;
}

export default function CourseCard({
    imgSrc,
    title,
    price,
    rating,
    student,
}: CourseCardProps) {
    const { cartCount, setCartCount } = useContext(CartContext);
    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        if (!isClicked) {
            setIsClicked(true);
            setCartCount(cartCount + 1);
        } else {
            setIsClicked(false);
            setCartCount(cartCount - 1);
        }
    }

    return (
        <div className=" w-80  h-96 py-2 px-4 rounded-lg hover:drop-shadow-xl bg-white  mx-4 mb-4  ">
            <a href="#">
                <img
                    src={"/madam.jpg" || imgSrc}
                    className="rounded-md w-80 h-fit mb-2"
                />
            </a>
            <div>
                <a href="#">
                    <h5 className="text-xl font-semibold  h-28">{title}</h5>
                </a>
            </div>

            <div className="flex items-center m-3">
                <FiveStar
                    rating={4.2}
                    size="w-4 h-4 mr-1"
                    color="text-yellow-400"
                ></FiveStar>

                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">
                    {rating}
                </span>
                <span className="text-sm font-semibold">({student})</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {`$` + price}
                </span>
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center whitespace-nowrap "
                    onClick={handleClick}
                >
                    {isClicked ? "Remove Cart" : "Add to Cart"}
                </button>
            </div>
        </div>
    );
}
