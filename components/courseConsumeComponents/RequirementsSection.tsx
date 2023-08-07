const requirements = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
];

export default function RequirementsSection() {
    const content = requirements.map((content, i) => (
        <li key={i} className="">
            {content}
        </li>
    ));
    return (
        <div className="ml-20">
            <h2 className=" mb-3 text-2xl font-semibold font-serif drop-shadow-sm">
                Requirements
            </h2>
            <ul className="ml-5 list-disc text-gray-800  space-y-1  list-outside ">
                {content}
            </ul>
        </div>
    );
}
