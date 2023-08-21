import { useContext } from "react";
import { LogInContext } from "@/app/layout";
interface CartProps {
    hover: boolean;
}
interface ContentComponentProps {
    title: string;
    price: number;
    image: string;
    instructor: string;
}
function ContentComponent({
    title,
    price,
    image,
    instructor,
}: ContentComponentProps) {
    return (
        <div className="flex w-full h-20  cursor-pointer items-center py-2 px-1 hover:bg-gray-100">
            <img src={image} alt="" className="w-16 h-16 pr-1" />
            <div className="flex flex-col ">
                <div className="text-sm font-bold text-gray-800 ">
                    {title.split(" ").slice(0, 4).join(" ") + "...."}
                </div>
                <div className="text-sm font-semibold text-gray-700">
                    {instructor}
                </div>
                <div className="text-sm font-bold text-gray-900">
                    {"$" + price}
                </div>
            </div>
        </div>
    );
}
export default function CartHover({ hover }: CartProps) {
    const { logIn } = useContext(LogInContext);
    const content = data.map((content, index) => (
        <div key={index}>
            <ContentComponent {...content} />
            <hr />
        </div>
    ));
    return (
        <div
            className={` top-16 ${
                logIn ? "right-32" : "right-52"
            } z-50 pt-1 pb-1 md:fixed bg-white w-72 h-80  absoulte  border border-slate-300 overflow-y-scroll  ${
                hover ? "flex flex-col" : "hidden"
            }`}
        >
            {content}
        </div>
    );
}
const data = [
    {
        title: "Mastering React Lorem ipsum dolor sit amet consectetur",
        price: 49.99,
        image: "/itemclass.webp",
        instructor: "John Smith",
    },
    {
        title: "Full Stack Lorem ipsum dolor sit amet consectetur",
        price: 59.99,
        image: "/itemclass.webp",
        instructor: "Jane Doe",
    },
    {
        title: "Next.js: Lorem ipsum dolor sit amet consectetur",
        price: 39.99,
        image: "/itemclass.webp",
        instructor: "Alex Johnson",
    },
    {
        title: "Full Stack Lorem ipsum dolor sit amet consectetur",
        price: 59.99,
        image: "/itemclass.webp",
        instructor: "Jane Doe",
    },
    {
        title: "Next.js: Lorem ipsum dolor sit amet consectetur",
        price: 39.99,
        image: "/itemclass.webp",
        instructor: "Alex Johnson",
    },
    {
        title: "Full Stack Lorem ipsum dolor sit amet consectetur",
        price: 59.99,
        image: "/itemclass.webp",
        instructor: "Jane Doe",
    },
    {
        title: "Next.js: Lorem ipsum dolor sit amet consectetur",
        price: 39.99,
        image: "/itemclass.webp",
        instructor: "Alex Johnson",
    },
];
