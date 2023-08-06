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
    const content = requirements.map((content) => (
        <li className="">{content}</li>
    ));
    return (
        <div>
            <h2 className=" ml-10 mb-2 text-2xl font-semibold text-gray-900 drop-shadow-md">
                Requirements:
            </h2>
            <ul className="ml-10 list-disc max-w-md space-y-1 text-gray-700 list-outside text-base">
                {content}
            </ul>
        </div>
    );
}
