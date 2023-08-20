"use client";

import CategoriesCard from "./CategoriesCard";

export default function AllCategories() {
    const content = data.map((item, index) => {
        return <CategoriesCard key={index} {...item}></CategoriesCard>;
    });
    return (
        <div className=" flex flex-row overflow-x-auto md:overflow-hidden  md:grid md:grid-cols-4 justify-around md:gap-2  border-2 border-slate-100 bg-slate-50 md:m-6 m-2 rounded-lg drop-shadow-lg mt-5 mb-5 pt-6 pb-6">
            {content}
        </div>
    );
}

const data = [
    {
        title: "Web Development",
        buttonLabel: "Explore",
    },
    {
        title: "Data Science",
        buttonLabel: "Explore",
    },
    {
        title: "Mobile Dev",
        buttonLabel: "Explore",
    },
    {
        title: "UI/UX Design",
        buttonLabel: "Explore",
    },
    {
        title: "Machine Learning Essential",
        buttonLabel: "Explore",
    },
    {
        title: "Frontend Dev",
        buttonLabel: "Explore",
    },
    {
        title: "Backend Dev",
        buttonLabel: "Explore",
    },
    {
        title: "Cloud Computing",
        buttonLabel: "Explore",
    },
    // Add more objects here if needed
];
