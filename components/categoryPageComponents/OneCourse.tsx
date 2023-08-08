import FiveStar from "../helperComponents/FiveStar";

interface OneCourseProps {
    category: string;
    title: string;
    subTitle: string;
    rating: number;
    price: number;
    tutorName: string;
    totalLength: number;
    totalStudent: number;
}
export default function OneCourse(props: OneCourseProps) {
    return (
        <div className="flex w-fit mr-8  py-5 cursor-pointer">
            <img
                src="https://marketplace.canva.com/EAFQ_lV2WWs/1/0/1600w/canva-green-modern-how-to-make-money-online-youtube-thumbnail-oSD7Nn4_0lg.jpg"
                alt=""
                className="w-72 h-fit border-2 border-gray-300 "
            />
            <div className="flex flex-col justify-start ml-4 ">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold text-gray-800 ">
                        {props.title}
                    </h1>
                    <span className=" text-xl font-bold pl-20 text-gray-900">
                        ${props.price}
                    </span>
                </div>
                <div className="text-base  font-normal text-gray-600 pr-16">
                    {props.subTitle}
                </div>
                <p className="text-base font-semibold text-blue-600  hover:underline">
                    {props.tutorName}
                </p>
                <div className="flex items-center  ">
                    <span className="text-yellow-950 text-sm font-bold pr-1 inline-block">
                        {props.rating}
                    </span>
                    <FiveStar
                        size="w-3 h-3"
                        rating={props.rating}
                        color=" text-yellow-600"
                    ></FiveStar>

                    <p className="text-sm font-semibold ml-1 inline-block">
                        ({props.totalStudent}) students
                    </p>
                </div>
                <span className="text-sm text-gray-700 font-medium block">
                    {props.totalLength} total hours
                </span>
            </div>
        </div>
    );
}

// const props = {
//     category: "web development",
//     title: "Develop modern, complex, responsive Design",
//     tutorName: "Angela yu",
//     subTitle:
//         "Develop modern, complex, responsive and scalable web applications with AngularDevelop modern, complex, responsive",
//     rating: 4.7,
//     price: 12.99,
//     totalLength: 53.2,
//     totalStudent: 1209838,
// };
