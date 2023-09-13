import { useState } from "react";
import FiveStar from "../helperComponents/FiveStar";
import { useContext } from "react";
import { LogInContext } from "@/app/layout";
import { useRouter } from "next/navigation";
import { CartContext } from "@/app/layout";
import { JwtContext } from "@/app/layout";

interface CourseCardProps {
    id: string;
    thumNail: string;
    title: string;
    price: number;
    rating: number;
    student: number;
}

export default function CourseCard({
    id,
    thumNail,
    title,
    price,
    rating,
    student,
}: CourseCardProps) {
    const { logIn } = useContext(LogInContext);
    const { jwt } = useContext(JwtContext);
    const { cart, setCart } = useContext(CartContext);
    const [isClicked, setIsClicked] = useState(false);
    const router = useRouter();

    async function handleClick() {
        if (!logIn) {
            router.push("/login");
        } else {
            if (!cart.includes(id)) {
                setIsClicked(!isClicked);
                setCart([...cart, id]);
                await fetch(
                    process.env.NEXT_PUBLIC_BACKEND! +
                        process.env.NEXT_PUBLIC_UPDATECART,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${jwt}`,
                        },
                        body: JSON.stringify({
                            courseList: [...cart, id],
                        }),
                    }
                );
            }
        }
    }

    return (
        <div
            className={` w-80  h-96 py-2 px-4 rounded-lg hover:drop-shadow-xl bg-white  mx-4 mb-4 ${
                isClicked ? "hidden" : ""
            }`}
        >
            <a href={`/course/${id}`}>
                <img
                    src={"/madam.jpg" || thumNail}
                    className="rounded-md w-80 h-fit mb-2"
                />
            </a>
            <div>
                <a href={`/course/${id}`}>
                    <h5 className="text-xl font-semibold  h-28">{title}</h5>
                </a>
            </div>

            <div className="flex items-center m-3">
                <FiveStar
                    rating={rating}
                    size="w-4 h-4 mr-1"
                    color="text-yellow-400"
                ></FiveStar>

                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">
                    {rating}
                </span>
                <span className="text-sm font-semibold">({student})</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white mr-1">
                    {`$` + price}
                </span>
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2.5 text-center whitespace-nowrap "
                    onClick={handleClick}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
