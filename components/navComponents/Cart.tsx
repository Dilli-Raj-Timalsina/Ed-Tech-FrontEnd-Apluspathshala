interface CartProps {}

export default function Cart({}: CartProps) {
    return (
        <button className="hidden  sm:flex ">
            <img src="/cart-icon.svg" alt="" className="w-6 h-6 " />
        </button>
    );
}
