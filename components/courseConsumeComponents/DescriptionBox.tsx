interface DescriptionBoxProps {
    description: string;
}
export default function DescriptionBox({ description }: DescriptionBoxProps) {
    return (
        <div className="ml-2 mt-2 m-1 md:mt-4 md:ml-8 w-screen md:w-1/2">
            <h3 className=" mb-2 text-2xl font-semibold font-serif drop-shadow-sm">
                Description
            </h3>
            <p>
                <span className="font-bold text-sm md:text-base text-green-500">
                    (Enroll and Activate Your A+ Score){" "}
                </span>
                {description}
                <br />
                <span className="hidden">
                    You will also understand freelancing and contract-based
                    work, discover networking and cybersecurity concepts, and
                    obtainin valuable advice from industry professionals. The
                    program also offers insights into the software industry in
                    Nepal and provides career-shaping opportunities through A+
                    Pathshala.,
                </span>
            </p>

            <button className="mt-1 text-blue-800 hover:text-blue-900 text-base drop-shadow-sm hover:underline font-semibold ">
                show more
            </button>
            <span> </span>
            <img
                src="/show-more.svg"
                alt="not found"
                className="w-5 h-5 inline-block animate-bounce"
            />
        </div>
    );
}
