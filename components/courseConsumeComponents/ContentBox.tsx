"use client";
import { useState } from "react";

export default function ContentBox() {
    const [expand, setExpand] = useState<number[]>([]);

    const handleClickMainDiv = (index: number) => {
        if (expand.includes(index)) {
            setExpand(expand.filter((i) => i !== index));
        } else {
            setExpand([...expand, index]);
        }
    };

    const content = sections.map((content, index) => (
        <li key={index} className="h-fit ">
            <div
                className="flex flex-row items-center justify-between h-14 pr-2"
                onClick={() => handleClickMainDiv(index)}
            >
                <div className="flex flex-row items-center p-2 ">
                    <img
                        src="/chevron-up.svg"
                        className={`w-4 h-4 inline-block ${
                            expand.includes(index)
                                ? "rotate-180 duration-300"
                                : ""
                        } `}
                    />
                    <p className="w-full pl-2 font-semibold">{content.title}</p>
                </div>
                <p>3 minutes</p>
            </div>
            {expand.includes(index) && (
                <ul className={`bg-white h-fit w-full `}>
                    {content.topics.map((content, i) => (
                        <li key={i} className={`h-fit `}>
                            <div className="flex flex-row items-center justify-between p-2 hover:bg-slate-100 cursor-pointer">
                                <div className="flex flex-row items-center pl-4 p-2 ">
                                    <img
                                        src="/video-icon.svg"
                                        className="w-4 h-4 inline-block "
                                    />
                                    <p className="w-full pl-2">
                                        {content.title}
                                    </p>
                                </div>
                                <p>04:35</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    ));
    return (
        <div className="w-1/2 h-fit bg-gray-200 border border-gray-300 m-8 mt-20 rounded-xl drop-shadow-xl">
            <ul
                className="w-full divide-y divide-gray-300 
                    cursor-pointer "
            >
                {content}
            </ul>
        </div>
    );
}

const sections = [
    {
        id: 1,
        name: "Section 1",
        title: "All about IT (Information Technology) and Computer Engineering",
        topics: [
            {
                id: 1,
                title: "Introduction to the field of Computer Science and Technology",
                free: false,
                url: "",
            },
            {
                id: 2,
                title: "Different Domains of Computer Engineering ",
                free: false,
                url: "",
            },
            {
                id: 3,
                title: "All about foundational subjects and their importance ",
                free: false,
                url: "",
            },
            {
                id: 4,
                title: "Which programming language to choose as a Beginner? ",
                free: false,
                url: "",
            },
            {
                id: 5,
                title: "How to choose a particular Domain of computer science",
                free: false,
                url: "",
            },
            {
                id: 6,
                title: "Assignment for Section 1",
                free: false,
                url: "",
            },
        ],
    },
    {
        id: 2,
        name: "Section 2",
        title: "All about Real World, Companies and the Role of Engineers",
        topics: [
            {
                id: 1,
                title: "How a company is created?",
                free: false,
                url: "",
            },
            {
                id: 2,
                title: "How companies ran previously when there ?",
                free: false,
                url: "",
            },
            {
                id: 3,
                title: "Types of companies: Big Tech Giant (FAANGM) vs Startups",
                free: false,
                url: "",
            },
            {
                id: 4,
                title: "Types and stages of startup: Series A funded,",
                free: false,
                url: "",
            },
            {
                id: 5,
                title: "Your growth in startup / Risks in startup as an engineer",
                free: false,
                url: "",
            },
            {
                id: 6,
                title: "Service-based company vs product-based company",
                free: false,
                url: "",
            },
            {
                id: 7,
                title: "All about startup and company culture in Nepal",
                free: false,
                url: "",
            },
            {
                id: 8,
                title: "Why Nepalese aspire to go to Australia and wash dishes?",
                free: false,
                url: "",
            },
            {
                id: 9,
                title: "How can we bring all Big Tech Giant offices to Nepal?",
                free: false,
                url: "",
            },
            {
                id: 10,
                title: "In the next Section, we will start learning DSA for 4 days",
                free: false,
                url: "",
            },
        ],
    },
    {
        id: 3,
        name: "Section 3, 4, 5",
        title: "DSA (Data Structures and Algorithms)",
        topics: [
            {
                id: 1,
                title: "We will learn DSA for the next 3 days",
                free: false,
                url: "",
            },
            {
                id: 2,
                title: "Topics: Sorting, Searching, Binary search, ",
                free: false,
                url: "",
            },
            {
                id: 3,
                title: "We will create LeetCode and GFG accounts",
                free: false,
                url: "",
            },
            {
                id: 4,
                title: "We will learn topics like sorting, searching, ",
                free: false,
                url: "",
            },
        ],
    },
    {
        id: 6,
        name: "Section 6",
        title: "Ace DSA and Land Your Dream Job at FAANG",
        topics: [
            {
                id: 1,
                title: "How to succeed in DSA and get hired at FAANG?",
                free: false,
                url: "",
            },
            {
                id: 2,
                title: "How to be consistent and connect with ?",
                free: false,
                url: "",
            },
            {
                id: 3,
                title: "How much time does it require ?",
                free: false,
                url: "",
            },
            {
                id: 4,
                title: "How to maintain professional social handles ?",
                free: false,
                url: "",
            },
        ],
    },
    {
        id: 7,
        name: "Section 7",
        title: "All about CP (Competitive Programming)",
        topics: [
            {
                id: 1,
                title: "What is CP and how to get started?",
                free: false,
                url: "",
            },
            {
                id: 2,
                title: "What are the coding platforms to make CP public profile?",
                free: false,
                url: "",
            },
            {
                id: 3,
                title: "How to succeed in CP and be consistent?",
                free: false,
                url: "",
            },
            {
                id: 4,
                title: "What are the companies that hire through CP?",
                free: false,
                url: "",
            },
            {
                id: 5,
                title: "What are some of the top coding contests ?",
                free: false,
                url: "",
            },
        ],
    },
    {
        id: 8,
        name: "Section 8",
        title: "All about open-source contribution and web development",
        topics: [
            {
                id: 1,
                title: "Fundamentals of JavaScript and web development",
                free: false,
                url: "",
            },
            {
                id: 2,
                title: "Basics of Git and GitHub (version control system)",
                free: false,
                url: "",
            },
            {
                id: 3,
                title: "Let’s contribute to A+ pathshala code and",
                free: false,
                url: "",
            },
            {
                id: 4,
                title: "Doing (1000 project, learning 1000 languages)",
                free: false,
                url: "",
            },
            {
                id: 5,
                title: "All about good first issues and simple ",
                free: false,
                url: "",
            },
        ],
    },
    {
        id: 9,
        name: "Section 9",
        title: "Hiring process in different companies, how should we prepare?",
        topics: [
            {
                id: 1,
                title: "All about hiring process in Big-Tech Giants",
                free: false,
                url: "",
            },
            {
                id: 2,
                title: "All about hiring process in startups",
                free: false,
                url: "",
            },
            {
                id: 3,
                title: "All about hiring process in service-based companies",
                free: false,
                url: "",
            },
            {
                id: 4,
                title: "All about salary structure in FAANG vs startups",
                free: false,
                url: "",
            },
            {
                id: 5,
                title: "All about base pay + stock stipend",
                free: false,
                url: "",
            },
        ],
    },
    {
        id: 10,
        name: "Section 10",
        title: "Hidden internships and opportunities ",
        topics: [
            {
                id: 1,
                title: "What are some of the remote paid",
                free: false,
                url: "",
            },
            {
                id: 2,
                title: "We will target GSOC for next year",
                free: false,
                url: "",
            },
            {
                id: 3,
                title: "Strategies to target Next GSOC",
                free: false,
                url: "",
            },
        ],
    },
    {
        id: 11,
        name: "Section 11",
        title: "All about freelancing and contract-based work",
        topics: [
            {
                id: 1,
                title: "Nepali client vs US client in terms of pay",
                free: false,
                url: "",
            },
            {
                id: 2,
                title: "How to create freelancing profile,",
                free: false,
                url: "",
            },
            {
                id: 3,
                title: "What are PRs (Pull Requests)?",
                free: false,
                url: "",
            },
            {
                id: 4,
                title: "How to manage PRs?",
                free: false,
                url: "",
            },
            {
                id: 5,
                title: "How to create credibility for clients as a newbie?",
                free: false,
                url: "",
            },
            {
                id: 6,
                title: "All about Replit, Upwork, freelance.com",
                free: false,
                url: "",
            },
            {
                id: 7,
                title: "What are the competitive edges for developerss?",
                free: false,
                url: "",
            },
        ],
    },
    {
        id: 12,
        name: "Section 12",
        title: "The world of Mobile Development, Flutter, Dart, and more",
        topics: [
            {
                id: 1,
                title: "Introduction to the field of Mobile ",
                free: false,
                url: "",
            },
            {
                id: 2,
                title: "Different tech stacks used for Popular ones",
                free: false,
                url: "",
            },
            {
                id: 3,
                title: "Roadmap to become a mobile App Developer",
                free: false,
                url: "",
            },
            {
                id: 4,
                title: "Basics of Flutter",
                free: false,
                url: "",
            },
            {
                id: 5,
                title: "Roadmap to become a Flutter Developer",
                free: false,
                url: "",
            },
        ],
    },
    {
        id: 13,
        name: "Section 13",
        title: "Let’s Dive into another Domain of Computer Science",
        topics: [
            {
                id: 1,
                title: "What is Networking and Cybersecurity?",
                free: false,
                url: "",
            },
            {
                id: 2,
                title: "Prerequisites to become a Cybersecurity expert ",
                free: false,
                url: "",
            },
            {
                id: 3,
                title: "Roadmap to become a Network Engineer, career options",
                free: false,
                url: "",
            },
            {
                id: 4,
                title: "Roadmap for Non-IT background students and newbies",
                free: false,
                url: "",
            },
            {
                id: 5,
                title: "10 years of industry experience in 10 minutes",
                free: false,
                url: "",
            },
        ],
    },
    {
        id: 14,
        name: "Section 14",
        title: "All about Work Culture and Hiring Process ",
        topics: [
            {
                id: 1,
                title: "What type of projects do Nepali companies get?",
                free: false,
                url: "",
            },
            {
                id: 2,
                title: "What is the hiring process in these companies?",
                free: false,
                url: "",
            },
            {
                id: 3,
                title: "What qualifications and skills are required to ?",
                free: false,
                url: "",
            },
            {
                id: 4,
                title: "Salary range of Nepali software engineers",
                free: false,
                url: "",
            },
            {
                id: 5,
                title: "Why is our education system not enough ?",
                free: false,
                url: "",
            },
        ],
    },
    {
        id: 15,
        name: "Section 15",
        title: "What Next?",
        topics: [
            {
                id: 1,
                title: "Some of the best practices while",
                free: false,
                url: "",
            },
            {
                id: 2,
                title: "Let’s see how you can shape your ",
                free: false,
                url: "",
            },
            {
                id: 3,
                title: "How to start working on your A+ score?",
                free: false,
                url: "",
            },
            {
                id: 4,
                title: "How to increase your A+ score rapidly?",
                free: false,
                url: "",
            },
            {
                id: 5,
                title: "What to do after this Bootcamp?",
                free: false,
                url: "",
            },
        ],
    },
];
