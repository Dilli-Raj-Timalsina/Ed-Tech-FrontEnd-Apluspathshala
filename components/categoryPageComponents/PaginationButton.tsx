export default function PaginationButton() {
    return (
        <div className="flex justify-around items-center mx-32 mt-14 mb-20">
            <div className="flex items-center border-2 border-slate-600 hover:border-slate-700 text-gray-900 rounded-md font-semibold hover:drop-shadow-sm px-3 pl-2 py-1 justify-start">
                <img
                    src="pagination-right.svg"
                    alt=""
                    className="w-4 h-4 rotate-180"
                />
                <button className=" ml-1 ">Prev</button>
            </div>
            <div className="flex items-center border-2 border-slate-600 text-gray-900 rounded-md font-semibold hover:drop-shadow-sm hover:border-slate-700 px-3 pr-2 py-1 ">
                {" "}
                <button className=" ">Next</button>
                <img
                    src="pagination-right.svg"
                    alt=""
                    className="w-4 h-4 ml-1"
                />
            </div>
        </div>
    );
}
