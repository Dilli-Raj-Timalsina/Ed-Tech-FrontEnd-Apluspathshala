interface CartProps {
    cartItemCount: number;
}

export default function Cart({ cartItemCount = 0 }: CartProps) {
    return (
        <button className="hidden relative  sm:flex ">
            <img src="/cart-icon.svg" alt="" className="w-6 h-6 " />
            <span
                className={` absolute h-6 w-6 rounded-full bg-purple-600 pb-2 pt-1 text-xs text-white hover:drop-shadow-sm hover:bg-purple-700 ml-5 mb-5 ${
                    cartItemCount != 0 ? "inline-block" : "hidden"
                }`}
            >
                {cartItemCount}
            </span>
        </button>
    );
}
