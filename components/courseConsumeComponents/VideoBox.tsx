import { useContext } from "react";
import { LogInContext } from "@/app/layout";
import { useRouter } from "next/navigation";
import { CartContext } from "@/app/layout";
import { JwtContext } from "@/app/layout";

interface VideoBoxProps {
    price: number;
    id: string;
}

export default function VideoBox({ price, id }: VideoBoxProps) {
    const { logIn } = useContext(LogInContext);
    const { jwt } = useContext(JwtContext);
    const { cart, setCart } = useContext(CartContext);
    const router = useRouter();

    async function handleClick(name: string) {
        if (!logIn) {
            router.push("/login");
        } else {
            console.log(cart.includes(id));
            if (!cart.includes(id)) {
                setCart([...cart, id]);
                const res = await fetch(
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

            if (name == "buy") {
                router.push("/checkout-cart");
            }
        }
    }

    return (
        <div className=" ml-2  m-1 w-screen md:m-3 md:mt-24 md:mr-8  md:w-2/5  h-auto border-2 rounded-b-lg border-slate-200 flex flex-col justify-center   bg-green-50  top-3">
            <img src="/madam.jpg" alt="" className="w-full h-72" />
            <p className="font-bold text-3xl drop-shadow-sm text-gray-800 ml-1">
                {`$${price}`}
            </p>
            <div className="flex gap-1 items-center ">
                <img src="/clock-icon.svg" alt="" className="w-4 h-4" />
                <span className="text-red-600 text-sm  font-semibold ">
                    2 days
                </span>

                <span className="text-red-500 text-sm font-medium font-serif">
                    left at this price!
                </span>
            </div>
            <button
                className="text-white bg-purple-700 hover:bg-purple-800  font-medium rounded-md text-sm px-2 py-2.5 mt-3   text-center "
                onClick={() => handleClick("cart")}
            >
                Add to cart
            </button>
            <button
                className="text-gray-600  bg-slate-100  font-medium rounded-md text-sm px-2 py-2.5 mt-1  text-center border border-gray-500 "
                onClick={() => handleClick("buy")}
            >
                <span className="hover:drop-shadow-sm"> Buy Now </span>
            </button>
        </div>
    );
}
