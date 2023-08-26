const requirements = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor sit am",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit ",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor sit am",
];
interface RequirementsSectionProps {
    requirements: string;
}
export default function RequirementsSection({
    requirements,
}: RequirementsSectionProps) {
    const requirementsArray = requirements.split(",");
    const content = requirementsArray.map((content, i) => (
        <li key={i} className="">
            {content}
        </li>
    ));
    return (
        <div className="ml-2 mt-2 m-1 md:mt-4 md:ml-8">
            <h2 className=" mb-3 text-2xl font-semibold font-serif drop-shadow-sm">
                Requirements
            </h2>
            <ul className="ml-7 list-disc text-gray-800  space-y-1  list-outside ">
                {content}
            </ul>
        </div>
    );
}
