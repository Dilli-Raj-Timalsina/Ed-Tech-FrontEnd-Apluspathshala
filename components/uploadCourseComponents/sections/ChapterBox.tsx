"use client";
import { useState } from "react";

const ChapterBox: React.FC = () => {
    const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

    const handleClick = (number: number) => {
        if (selectedNumbers.includes(number)) {
            setSelectedNumbers(selectedNumbers.filter((num) => num !== number));
        } else {
            setSelectedNumbers([...selectedNumbers, number]);
        }
    };

    return (
        <div className="grid grid-cols-5 basis-1/3 border border-blue-300 drop-shadow-lg mt-2 w-96 h-96">
            {Array.from({ length: 20 }, (_, index) => index + 1).map(
                (number) => (
                    <button
                        key={number}
                        className={`p-2 border border-slate-400 text-3xl flex items-center justify-center font-bold   ${
                            selectedNumbers.includes(number)
                                ? "bg-green-400"
                                : "bg-gray-100"
                        }`}
                        onClick={() => handleClick(number)}
                    >
                        {number}
                    </button>
                )
            )}
        </div>
    );
};

export default ChapterBox;
