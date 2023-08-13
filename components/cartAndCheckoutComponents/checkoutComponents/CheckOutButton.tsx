"use client";

export default function CheckOutButton() {
    return (
        <div className="mr-28">
            <div className="text-gray-500 text-lg font-semibold p-2">
                Total :
            </div>
            <div className="text-gray-950 text-3xl font-bold p-2 ">$230.30</div>
            <button className="text-xl font-semibold px-12 py-3 bg-purple-600 rounded-sm my-2 text-white mb-6">
                {" "}
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
