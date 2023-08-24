"use client";
import React, { useState } from "react";
import { useContext } from "react";
import { JwtContext } from "@/app/layout";
import { useRouter } from "next/navigation";

interface Course {
    title: string;
    subTitle: string;
    requirements: string;
    description: string;
    price: number;
    thumbnail: File | null;
}
interface CategoryOption {
    value: string;
    label: string;
}
export default function CreateNewCourse() {
    const router = useRouter();
    const { jwt } = useContext(JwtContext);
    const [course, setCourse] = useState<Course>({
        title: "",
        subTitle: "",
        requirements: "",
        description: "",
        price: 0,
        thumbnail: null,
    });
    const [category, setCategory] = useState("web-development");
    const [language, setLanguage] = useState("english");

    const handleCategoryChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setCategory(event.target.value);
    };
    const handleLanguageChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setLanguage(event.target.value);
    };

    const handleInput = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = event.target;
        setCourse((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCourse({
            ...course,
            thumbnail: event.target.files ? event.target.files[0] : null,
        });
    };

    //handle the submission of th form:
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = new FormData();
        form.append("title", course.title);
        form.append("subTitle", course.subTitle);
        form.append("requirements", course.requirements);
        form.append("description", course.description);
        form.append("price", course.price.toString());
        form.append("language", language);
        form.append("category", category);
        form.append("binary", course.thumbnail!);

        try {
            const res = await fetch(
                "http://localhost:3001/api/v1/course/createCourse",
                {
                    method: "POST",
                    headers: {
                        Authorization: "Bearer " + jwt,
                    },
                    body: form,
                }
            );
            const result = await res.json();

            if (res.ok) {
                router.push("/upload-chapter");
            }
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:mt-32 mt:14 items-center justify-center w-screen md:w-5/6 md:ml-28  rounded-lg shadow-lg border-2 border-gray-200 ">
                <h1 className="md:text-3xl text-2xl font-bold text-gray-900 mb-6 pt-12">
                    Create a new course
                </h1>
                <div className="mb-4 md:w-1/2 w-full px-3 md:px-0">
                    <label
                        htmlFor="title"
                        className="block text-gray-800 font-bold mb-2"
                    >
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-4 md:w-1/2 w-full px-3 md:p-0">
                    <label
                        htmlFor="subtitle"
                        className="block text-gray-800 font-bold mb-2"
                    >
                        SubTitle
                    </label>
                    <input
                        id="subTitle"
                        type="text"
                        name="subTitle"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-4 md:w-1/2 w-full px-3 md:p-0">
                    <label
                        htmlFor="requirements"
                        className="block text-gray-800 font-bold mb-2"
                    >
                        Requirements
                    </label>
                    <div>
                        <input
                            id="requirements"
                            type="text"
                            name="requirements"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <div className="mb-4 md:w-1/2 w-full px-3 md:p-0">
                    <label
                        htmlFor="description"
                        className="block text-gray-800 font-bold mb-2"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-36"
                        required
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-4 md:w-1/2 w-full px-3 md:p-0">
                    <label
                        htmlFor="price"
                        className="block text-gray-800 font-bold mb-2"
                    >
                        Price
                    </label>
                    <input
                        id="price"
                        type="number"
                        name="price"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-4 md:w-1/2 w-full px-3 md:p-0">
                    <label className="block text-gray-800 font-bold mb-2">
                        Language
                    </label>

                    <select
                        id="language"
                        name="language"
                        value={language}
                        onChange={handleLanguageChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        {languageOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4 md:w-1/2 w-full px-3 md:p-0">
                    <label className="block text-gray-800 font-bold mb-2">
                        Category
                    </label>

                    <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={handleCategoryChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    >
                        {categoryOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4 md:w-1/2 w-full px-3 md:p-0 ">
                    <label
                        htmlFor="binary"
                        className="block text-gray-800 font-bold mb-2"
                    >
                        Thumbnail
                    </label>

                    <div className="flex items-center mb-16">
                        <label
                            htmlFor="binary-upload"
                            className="flex-1 cursor-pointer bg-white rounded-md border-gray-300 hover:border-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500"
                        >
                            <svg
                                className="w-8 h-8 text-gray-600"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 4v16m8-8H4" />
                            </svg>
                            <span className="ml-2 text-sm text-gray-600">
                                Upload a file or drag and drop
                            </span>
                            <input
                                id="binary-upload"
                                type="file"
                                accept="image/jpeg, image/png, image/gif"
                                className="sr-only "
                                onChange={handleFileUpload}
                            />
                        </label>
                    </div>
                    <div>
                        {course.thumbnail != null && (
                            <img
                                src={URL.createObjectURL(course.thumbnail)}
                                alt="Selected File Preview"
                                className="w-40 h-fit"
                            />
                        )}
                    </div>

                    <button
                        className="bg-purple-600 px-3 py-1 m-1 rounded-md  text-white font-normal text-base hover:drop-shadow-xl hover:bg-purple-700 w-28 flex items-center gap-1"
                        type="submit"
                    >
                        <span>Continue</span>
                        <img
                            src="/nextarrow-icon.svg"
                            alt=""
                            className="inline-block w-4 h-fit pt-1"
                        />
                    </button>
                </div>
            </div>
        </form>
    );
}

const categoryOptions: CategoryOption[] = [
    { value: "web-development", label: "Web Development" },
    { value: "iit", label: "IIT" },
    { value: "machine-learning", label: "Machine Learning" },
    { value: "ai", label: "Artificial Intelligence" },
];

const languageOptions: CategoryOption[] = [
    { value: "english", label: "English" },
    { value: "nepali", label: "Nepali" },
    { value: "hindi", label: "Hindi" },
    { value: "chinese", label: "Chinese" },
];
