import Dropdown from "../helperComponents/DropDownButton";

export default function Categories() {
    return (
        <div className="w-72 h-60 bg-white rounded-xl m-1 mx-4 md:m-4 flex flex-col justify-center items-center hover:drop-shadow-2xl border border-slate-200 px-2">
            <h1 className=" mb-1 mt-0 text-gray-900 text-2xl font-bold">
                Engineering
            </h1>
            <img
                src="/madam.jpg"
                alt="not found"
                className="w-52 h-fit rounded-sm drop-shadow-sm"
            />

            <button
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-md text-base mt-3 mb-0 px-3 py-1 hover:drop-shadow-sm w-fit"
            >
                Explore
            </button>
        </div>
    );
}
