"use client";
import { loadStripe } from "@stripe/stripe-js";
interface Course {
    price: number;
    title: string;
}
interface CheckOutButtonProps {
    totalPrice: number;
    carts: Course[];
}
export default function CheckOutButton({
    totalPrice,
    carts,
}: CheckOutButtonProps) {
    // payment integration
    const makePayment = async () => {
        const stripe = await loadStripe(
            "pk_test_51NlrnVSBJAs7xqOycLFkGL57T8GdtyIFRP5RaGdVEl0yn6rqwSh17RwX3JnqkIcTlhu6F6HP2zDlhRC6fHdjxRCp00fHPExiVb"
        );

        const body = {
            products: carts,
        };
        const headers = {
            "Content-Type": "application/json",
        };
        const response = await fetch(
            "http://localhost:3001/api/create-checkout-session",
            {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
            }
        );

        const session = await response.json();

        const result = stripe!.redirectToCheckout({
            sessionId: session.id,
        });
    };
    return (
        <div className="md:mr-28 ml-1">
            <div className="text-gray-500 text-lg font-semibold p-2">
                Total :
            </div>
            <div className="text-gray-950 text-3xl font-bold p-2 ">
                ${totalPrice}
            </div>
            <button
                className="text-xl font-semibold px-12 py-3 bg-purple-600 rounded-sm my-2 text-white mb-6"
                onClick={makePayment}
            >
                Checkout
            </button>
            <hr />
            <div className="mt-6">
                <h1 className="text-xl font-semibold text-gray-700 ">
                    Coupen Code
                </h1>

                <div className="flex items-center space-x-2 mt-2">
                    <input
                        type="text"
                        placeholder="Enter coupon code"
                        className="border rounded-sm px-3 py-2  focus:border-slate-600 border-slate-500 "
                    />
                    <button className="bg-purple-700 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:bg-purple-800">
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
}
