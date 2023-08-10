"use client";

export default function LearnMoreButton() {
    return (
        <button className="text-base bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-1  drop-shadow-sm rounded-md">
            <img
                src="/left-side-arrow-white.svg"
                alt=""
                className="w-8 h-fit pr-2 inline-block animate__animated animate__headShake animate__infinite"
            />
            Learn More
        </button>
    );
}
