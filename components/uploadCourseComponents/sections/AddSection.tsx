"use client";
import React, { useState, ChangeEvent } from "react";
import { useContext } from "react";
import { JwtContext } from "@/app/layout";
import { useRouter } from "next/navigation";

export default function AddSection() {
    const router = useRouter();
    const { jwt } = useContext(JwtContext);
    const [chapterName, setchapterName] = useState("");
    const [chapterTitle, setchapterTitle] = useState("");
    const [videoFiles, setVideoFiles] = useState<FileList>();
    const [pdfFiles, setPdfFiles] = useState<FileList>();

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
            console.log(e.target.files);
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

        const form = new FormData();
        form.append("chapterName", chapterName);
        form.append("chapterTitle", chapterTitle);
        for (let i = 0; i < videoFiles!.length; i++) {
            form.append("binary", videoFiles![i]);
        }
        for (let j = 0; j < pdfFiles!.length; j++) {
            form.append("binary", pdfFiles![j]);
        }

        try {
            const res = await fetch(
                "http://localhost:3001/api/v1/course/uploadChapter",
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
                setchapterName("");
                setchapterTitle("");
                setVideoFiles(undefined);
                setPdfFiles(undefined);
                console.log("successful vayo bro");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="basis-1/2">
            <div className=" rounded-md h-fit border border-gray-400 drop-shadow-sm py-6 px-4  mt-2">
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
                        value={chapterName}
                        onChange={handlechapterNameChange}
                    >
                        <option value={undefined}>Select a chapter</option>
                        {Array.from({ length: 20 }, (_, index) => (
                            <option key={index + 1} value={index + 1}>
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
                        accept=".pdf"
                        onChange={handlePdfFileChange}
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex items-center  rounded"
                    type="submit"
                >
                    Upload Chapter
                    <img
                        src="/upload-chapter-icon.svg"
                        alt=""
                        className="w-6 h-6 pl-1 inline "
                    />
                </button>
            </div>
        </form>
    );
}
