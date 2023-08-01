export default function Categories() {
    return (
        <div className="w-72 h-60 bg-white rounded-xl m-4 flex flex-col justify-center hover:drop-shadow-lg">
            <h1 className="ml-4 mb-1 mt-0 text-gray-900 text-2xl font-bold">
                Engineering
            </h1>
            <img
                src="/madam.jpg"
                alt="not found"
                className="w-52 ml-4 h-fit rounded-sm drop-shadow-sm"
            />

            <button
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-md text-base mt-3 ml-4 mb-0 px-3 py-1 hover:drop-shadow-sm w-fit"
            >
                Explore
            </button>
        </div>
    );
}
