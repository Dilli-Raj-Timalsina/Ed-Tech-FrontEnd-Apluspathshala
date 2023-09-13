"use client";
import React, { useState, ChangeEvent } from "react";
import { useContext } from "react";
import { JwtContext } from "@/app/layout";
import BounceSpinners from "@/components/spinners/BounceSpinner";
import SuccessMessage from "@/components/spinners/SuccessMessage";
import ErrorMessage from "@/components/spinners/ErrorMessage";

interface AddSectionProps {
    selectedNumbers: number[];
    setSelectedNumbers: React.Dispatch<React.SetStateAction<number[]>>;
    courseId: string;
}

export default function AddSection({
    selectedNumbers,
    setSelectedNumbers,
    courseId,
}: AddSectionProps) {
    const { jwt } = useContext(JwtContext);
    const [chapterName, setchapterName] = useState("");
    const [chapterTitle, setchapterTitle] = useState("");
    const [videoFiles, setVideoFiles] = useState<FileList>();
    const [pdfFiles, setPdfFiles] = useState<FileList>();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleClick = (number: number) => {
        if (!(number == 0)) {
            setSelectedNumbers([...selectedNumbers, number]);
        }
    };

    const handlechapterNameChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setchapterName(event.target.value);
    };

    const handlechapterTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setchapterTitle(e.target.value);
    };

    const handleVideoFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setVideoFiles(e.target.files);
        }
    };

    const handlePdfFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setPdfFiles(e.target.files);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const form = new FormData();
        form.append("chapterName", chapterName);
        form.append("courseId", courseId);
        form.append("chapterTitle", chapterTitle);
        for (let i = 0; i < videoFiles!.length; i++) {
            form.append("binary", videoFiles![i]);
        }
        for (let j = 0; j < pdfFiles!.length; j++) {
            form.append("binary", pdfFiles![j]);
        }

        try {
            const res = await fetch(
                process.env.NEXT_PUBLIC_BACKEND! +
                    process.env.NEXT_PUBLIC_UPLOADCHAPTER,
                {
                    method: "POST",
                    headers: {
                        Authorization: "Bearer " + jwt,
                    },
                    body: form,
                }
            );

            if (res.ok) {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                }, 3000);
                setLoading(false);

                setchapterName("");
                setchapterTitle("");
                setVideoFiles(undefined);
                setPdfFiles(undefined);
                handleClick(parseInt(chapterName.split(" ")[1], 10));
            } else {
                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 3000);
                setLoading(false);
            }
        } catch (err) {
            setLoading(false);
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="md:basis-1/2">
            <div className=" rounded-md h-fit border border-gray-400 drop-shadow-sm py-6 md:px-4 px-1 mt-2">
                <div className="mb-4">
                    <label
                        className="block font-bold mb-2 text-gray-600"
                        htmlFor="chapterName"
                    >
                        Chapter Name :
                    </label>
                    <select
                        className="border rounded w-full py-2 px-3 focus:border-gray-400 outline-none"
                        id="chapterName"
                        name="chapterName"
                        required
                        value={chapterName}
                        onChange={handlechapterNameChange}
                    >
                        <option key={-1} value="0">
                            Select a chapter
                        </option>
                        {Array.from({ length: 20 }, (_, index) => (
                            <option
                                key={index + 1}
                                value={"Chapter " + (index + 1)}
                            >
                                Chapter {index + 1}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label
                        className="block font-bold mb-2 text-gray-600"
                        htmlFor="chapterTitle"
                    >
                        Chapter Title :
                    </label>
                    <input
                        className="border rounded w-full py-2 px-3 focus:border-gray-400 outline-none"
                        id="chapterTitle"
                        type="text"
                        required
                        value={chapterTitle}
                        onChange={handlechapterTitleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2 text-gray-600">
                        Video Files
                    </label>
                    <input
                        className="border rounded py-2 px-3"
                        type="file"
                        multiple
                        required
                        accept=".mp4"
                        onChange={handleVideoFileChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block font-bold mb-2 text-gray-600">
                        PDF Files
                    </label>
                    <input
                        className="border rounded py-2 px-3"
                        type="file"
                        multiple
                        required
                        accept=".pdf"
                        onChange={handlePdfFileChange}
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex items-center  rounded"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? (
                        <BounceSpinners />
                    ) : (
                        <div className="flex gap-1 items-center">
                            <span>Upload Chapter</span>
                            <img
                                src="/upload-chapter-icon.svg"
                                alt=""
                                className="w-6 h-6 pl-1 inline "
                            />
                        </div>
                    )}
                </button>
                {success ? (
                    <SuccessMessage
                        message={
                            "Chapter Uploaded Sucessfully , Upload next .."
                        }
                    />
                ) : (
                    error && (
                        <ErrorMessage
                            message={"Something Went Wrong , Please try Again!"}
                        />
                    )
                )}
            </div>
        </form>
    );
}
