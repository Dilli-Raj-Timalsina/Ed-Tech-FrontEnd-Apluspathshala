import { ReactNode } from "react";

interface PaginationButtonProps {
    page: number;
    totalCourse: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}
export default function PaginationButton({
    page,
    totalCourse,
    setPage,
}: PaginationButtonProps) {
    let items: ReactNode[] = [];

    for (let index = 0; index <= totalCourse / 6; index++) {
        if (totalCourse / 6 > 11) break;
        items[index] = (
            <div
                className={`flex items-center border border-slate-400 hover:border-slate-700 text-gray-900  font-semibold hover:drop-shadow-sm p-1 px-2 text-center ${
                    page == index ? "bg-blue-500" : ""
                }`}
                onClick={() => {
                    setPage(index);
                }}
            >
                <button className={page == index ? "text-white" : ""}>
                    {index + 1}
                </button>
            </div>
        );
    }
    return (
        <div className="flex justify-between space-x-4 items-center mt-8 mb-10 md:mx-32 md:mt-10 md:mb-20">
            <div
                className="flex items-center border-2 border-slate-400 hover:border-slate-800 text-gray-900 rounded-md font-semibold hover:drop-shadow-sm px-3 pl-2 py-1 justify-start"
                onClick={() => {
                    if (page > 0) {
                        setPage(page - 1);
                    }
                }}
            >
                <img
                    src="pagination-right.svg"
                    alt=""
                    className="w-4 h-4 rotate-180"
                />
                <button className=" ">Prev</button>
            </div>
            <div className="flex flex-row justify-between gap-1">
                {items}
                <div> . . . . .</div>
            </div>

            <div
                className="flex items-center border-2 border-slate-400 text-gray-900 rounded-md font-semibold hover:drop-shadow-sm hover:border-slate-800 px-3 pr-2 py-1 "
                onClick={() => {
                    if (page < totalCourse / 6 - 1) {
                        setPage(page + 1);
                    }
                }}
            >
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
