"use client";

interface ChapterBoxProps {
    selectedNumbers: number[];
}
export default function ChapterBox({ selectedNumbers }: ChapterBoxProps) {
    return (
        <div className="grid md:grid-cols-5 grid-cols-4 md:basis-1/3 basis-1/4 border border-blue-300 drop-shadow-lg mt-2 md:w-96 md:h-96 w-full h-fit">
            {Array.from({ length: 20 }, (_, index) => index + 1).map(
                (number) => (
                    <div
                        key={number}
                        className={`p-2 border border-slate-400 text-3xl flex items-center justify-center font-bold   ${
                            selectedNumbers.includes(number)
                                ? "bg-green-400"
                                : "bg-gray-100"
                        }`}
                    >
                        {number}
                    </div>
                )
            )}
        </div>
    );
}
