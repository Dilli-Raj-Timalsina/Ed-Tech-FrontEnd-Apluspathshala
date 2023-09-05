import { useState } from "react";
interface DescriptionBoxProps {
    description: string;
}
export default function DescriptionBox({ description }: DescriptionBoxProps) {
    const [clicked, setClicked] = useState(false);
    function getFirst100Words(sentence: string) {
        // Split the sentence into words using whitespace as the delimiter
        const words = sentence.split(/\s+/);

        // Check if the sentence has fewer than 60 words
        if (words.length <= 60) {
            // If it does, return the entire sentence
            return sentence;
        } else {
            // If it has more than 60 words, return the first 60 words
            return words.slice(0, 100).join(" ");
        }
    }
    return (
        <div className="ml-2 mt-2 m-1 md:mt-4 md:ml-8 w-screen md:w-1/2">
            <h3 className=" mb-2 text-2xl font-semibold font-serif drop-shadow-sm">
                Description
            </h3>
            <div>
                <span className="font-bold text-sm md:text-base text-green-500">
                    (Enroll and Activate Your A+ Score){" "}
                </span>
                <p className={`${clicked ? "hidden" : ""} `}>
                    {getFirst100Words(description)}
                </p>
                <p className={`${clicked ? "" : "hidden"} `}>{description}</p>
            </div>

            <button
                className={`mt-1 text-blue-800 hover:text-blue-900 text-base drop-shadow-sm hover:underline font-semibold `}
                onClick={() => {
                    setClicked(!clicked);
                }}
            >
                {clicked ? "show less" : "show more"}
            </button>
            <span> </span>
            <img
                src="/show-more.svg"
                alt="not found"
                className={`w-5 h-5 inline-block ${
                    !clicked ? "animate-bounce" : "rotate-180"
                }`}
            />
        </div>
    );
}
