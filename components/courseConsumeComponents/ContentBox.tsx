"use client";
import { useState } from "react";

interface ExpandProps {
    isTrue: boolean;
}
export default function ContentBox() {
    const [expand, setExpand] = useState<ExpandProps[]>([]);

    const handleClickMainDiv = (index: number) => {
        if (expand.length <= index) {
            setExpand([...expand, { isTrue: false }]);
        } else {
            const newExpand = expand.map((val, id) => {
                if (id == index - 1) {
                    return {
                        isTrue: !val.isTrue,
                    };
                }
            });
        }
    };

    const content = sections.map((content, index) => (
        <li
            key={index}
            className="h-fit "
            onClick={() => handleClickMainDiv(index)}
        >
            <div className="flex flex-row items-center justify-between h-14 pr-2">
                <div className="flex flex-row items-center p-2 ">
                    <img
                        src="/chevron-up.svg"
                        className="w-4 h-4 inline-block "
                    />
                    <p className="w-full pl-2 font-semibold">{content.title}</p>
                </div>
                <p>3 minutes</p>
            </div>

            <ul
                className={`bg-white h-fit w-full ${
                    expand[index] && expand[index].isTrue ? "" : " hidden"
                }`}
            >
                {content.topics.map((content, i) => (
                    <li key={i} className={`h-fit `}>
                        <div className="flex flex-row items-center justify-between p-2 hover:bg-slate-100 cursor-pointer">
                            <div className="flex flex-row items-center pl-4 p-2 ">
                                <img
                                    src="/video-icon.svg"
                                    className="w-4 h-4 inline-block "
                                />
                                <p className="w-full pl-2">{content.title}</p>
                            </div>
                            <p>04:35</p>
                        </div>
                    </li>
                ))}
            </ul>
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

// export default function ContentBox() {
//     const [expandedSections, setExpandedSections] = useState([]);
//     const [showVideo, setShowVideo] = useState(false);

//     const toggleSection = (sectionId) => {
//         if (expandedSections.includes(sectionId)) {
//             setExpandedSections(
//                 expandedSections.filter((id) => id !== sectionId)
//             );
//         } else {
//             setExpandedSections([...expandedSections, sectionId]);
//         }
//     };

//     const isSectionExpanded = (sectionId) => {
//         return expandedSections.includes(sectionId);
//     };

//     return (
//         <>
//             <h3 className="text-2xl py-2 font-bold">Course Content</h3>
//             <div className="flex flex-col border-2">
//                 {sections.map((section) => (
//                     <div
//                         key={section.id}
//                         className="py-4 bg-blue-50 border-b justify-center items-center ps-4 p-0 md:px-2 rounded-md"
//                     >
//                         <div
//                             className="flex items-center px-4 justify-between cursor-pointer"
//                             onClick={() => toggleSection(section.id)}
//                         >
//                             <h2 className="text-base sm:text-lg font-bold">
//                                 {section.name}: {section.title}
//                             </h2>
// <svg
//     className={`ml-2 md:ml-4 h-4 sm:h-6 w-4 sm:w-6 transform ${
//         isSectionExpanded(section.id)
//             ? "rotate-180"
//             : ""
//     }`}
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
// >
//     <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M19 9l-7 7-7-7"
//     />
// </svg>
//                         </div>
//                         {isSectionExpanded(section.id) && (
//                             <div className="flex flex-col mt-2">
//                                 {section.topics.map((video) => (
//                                     <div
//                                         key={video.id}
//                                         className="flex items-center mt-2"
//                                     >
//                                         <svg
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="12"
//                                             height="12"
//                                             className="mx-2 sm:mx-3 h-4 sm:h-5 w-4 sm:w-5"
//                                         >
//                                             <path
//                                                 fillRule="evenodd"
//                                                 clipRule="evenodd"
//                                                 d="M3 3.5a1 1 0 00-1 1v7a1 1 0 001 1h10a1 1 0 001-1v-7a1 1 0 00-1-1H3zm-3 1a3 3 0 013-3h10a3 3 0 013 3v7a3 3 0 01-3 3H3a3 3 0 01-3-3v-7z"
//                                             ></path>
//                                             <path
//                                                 fillRule="evenodd"
//                                                 clipRule="evenodd"
//                                                 d="M6.788 5.363a1 1 0 011.035.068l2.5 1.75a1 1 0 010 1.638l-2.5 1.75A1 1 0 016.25 9.75v-3.5a1 1 0 01.538-.887z"
//                                             ></path>
//                                         </svg>
//                                         {showVideo && (
//                                             <YouTubeVideo
//                                                 videoId={"NE0dWeV5epA"}
//                                             />
//                                         )}
//                                         {video.free ? (
//                                             <button
//                                                 onClick={() =>
//                                                     setShowVideo(!showVideo)
//                                                 }
//                                                 className="text-blue-500 hover:text-blue-700 text-sm sm:text-base"
//                                             >
//                                                 <span>{video.title}</span>
//                                             </button>
//                                         ) : (
//                                             <div className="flex items-center">
//                                                 <span className="text-sm sm:text-base">
//                                                     {video.title}
//                                                 </span>
//                                                 <img
//                                                     src="/locked.svg"
//                                                     className="ml-2 sm:ml-3 h-4 sm:h-5 w-4 sm:w-5"
//                                                     alt=""
//                                                 />
//                                             </div>
//                                         )}
//                                     </div>
//                                 ))}
//                                 <div className="mt-2">
//                                     <ul className="list-disc list-inside">
//                                         {section.studyMaterials?.map(
//                                             (material) => (
//                                                 <li
//                                                     key={material.id}
//                                                     className="list-none ps-2"
//                                                 >
//                                                     <a
//                                                         href={material.url}
//                                                         className="text-sm sm:text-base"
//                                                     >
//                                                         {material.title}
//                                                     </a>
//                                                 </li>
//                                             )
//                                         )}
//                                     </ul>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }

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
