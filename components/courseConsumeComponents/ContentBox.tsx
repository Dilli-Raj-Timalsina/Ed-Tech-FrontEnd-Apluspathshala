"use client";
import { useState, useEffect, useRef } from "react";

interface ContentBoxProps {
    courseId: string;
}
interface AllChapter {
    chapterName: string;
    chapterTitle: string;
    couseId: string;
    pdfFileTitles: string[];
    pdfLinks: string[];
    videoLinks: string[];
    videoTitles: string[];
}
export default function ContentBox({ courseId }: ContentBoxProps) {
    const [expand, setExpand] = useState<number[]>([]);
    const [allChapter, setAllChapter] = useState<AllChapter[]>();
    const [videoSrc, setVideoSrc] = useState("none");
    const [playing, setPlaying] = useState<string[]>([]);
    const [pdfSrc, setPdfSrc] = useState("none");

    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handlePdfDownload = (url: string) => {
        // Create an anchor element
        const a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";

        // Simulate a click on the anchor element to trigger the download
        a.click();
    };

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };
    if (videoSrc != "none") {
        handlePlay();
    }

    const handleClickPlaying = (video: string) => {
        if (playing.includes(video)) {
            setPlaying(playing.filter((i) => i != video));
        } else {
            setPlaying([...playing, video]);
        }
    };

    const handleClickMainDiv = (index: number) => {
        if (expand.includes(index)) {
            setExpand(expand.filter((i) => i !== index));
        } else {
            setExpand([...expand, index]);
        }
    };

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                process.env.NEXT_PUBLIC_BACKEND! +
                    process.env.NEXT_PUBLIC_GETALLCHAPTERS,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        courseId,
                    }),
                }
            );
            const result = await res.json();
            setAllChapter(result.allChapter);
        }
        fetchData();
    }, []);

    const content =
        allChapter != undefined &&
        allChapter!.map((content, index) => (
            <li key={index} className="h-fit ">
                <div
                    className="flex flex-row items-center justify-between h-14 pr-2"
                    onClick={() => handleClickMainDiv(index)}
                >
                    <div className="flex flex-row items-center p-2 cursor-pointer">
                        <img
                            src="/chevron-up.svg"
                            className={`w-4 h-4 inline-block ${
                                expand.includes(index)
                                    ? "rotate-180 duration-300"
                                    : ""
                            } `}
                        />
                        <p className="md:w-full pl-2 font-semibold text-xs md:text-base">
                            {content.chapterTitle}
                        </p>
                    </div>
                </div>
                {expand.includes(index) && (
                    <ul className={`bg-white h-fit w-full `}>
                        {content.videoTitles.map((item, i) => (
                            <li key={i} className={`h-fit `}>
                                <div className="flex flex-row items-center justify-between p-2  ">
                                    <div className="flex flex-row items-center pl-4 p-2 ">
                                        <img
                                            src="/video-icon.svg"
                                            className="w-4 h-4 inline-block "
                                        />

                                        <p
                                            className="w-full pl-2 cursor-pointer hover:text-blue-600 hover:underline"
                                            onClick={async () => {
                                                const res = await fetch(
                                                    process.env
                                                        .NEXT_PUBLIC_BACKEND! +
                                                        process.env
                                                            .NEXT_PUBLIC_GETFILE,
                                                    {
                                                        method: "POST",
                                                        headers: {
                                                            "Content-Type":
                                                                "application/json",
                                                        },
                                                        body: JSON.stringify({
                                                            courseId: courseId,
                                                            fileLink:
                                                                content
                                                                    .videoLinks[
                                                                    i
                                                                ],
                                                        }),
                                                    }
                                                );
                                                const result = await res.json();
                                                setVideoSrc(result.url);
                                                handleClickPlaying(
                                                    item + content
                                                );
                                            }}
                                        >
                                            {item}
                                        </p>
                                        {videoSrc != "none" &&
                                            playing.includes(
                                                item + content
                                            ) && (
                                                <div
                                                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50"
                                                    style={{ display: "flex" }}
                                                >
                                                    <div
                                                        className="bg-white p-6 rounded-lg shadow-lg relative"
                                                        style={{
                                                            width: "80%",
                                                            maxWidth: "500px",
                                                        }}
                                                    >
                                                        <video
                                                            className="w-full"
                                                            controls
                                                            ref={videoRef}
                                                        >
                                                            <source
                                                                src={videoSrc}
                                                                type="video/mp4"
                                                            />
                                                        </video>
                                                        <button
                                                            onClick={() => {
                                                                handleClickPlaying(
                                                                    item +
                                                                        content
                                                                );
                                                            }}
                                                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 cursor-pointer"
                                                            style={{
                                                                fontSize:
                                                                    "24px",
                                                                border: "none",
                                                                zIndex: 1,
                                                            }}
                                                        >
                                                            &#x2716;{" "}
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                    </div>
                                </div>
                            </li>
                        ))}
                        {content.pdfFileTitles.map((item, i) => (
                            <li key={i} className={`h-fit `}>
                                <div className="flex flex-row items-center justify-between p-2  ">
                                    <div className="flex flex-row items-center pl-4 p-2 ">
                                        <img
                                            src="/video-icon.svg"
                                            className="w-4 h-4 inline-block "
                                        />
                                        <p
                                            className="w-full pl-2 cursor-pointer hover:text-blue-600 hover:underline"
                                            onClick={async () => {
                                                const res = await fetch(
                                                    process.env
                                                        .NEXT_PUBLIC_BACKEND! +
                                                        process.env
                                                            .NEXT_PUBLIC_GETFILE,
                                                    {
                                                        method: "POST",
                                                        headers: {
                                                            "Content-Type":
                                                                "application/json",
                                                        },
                                                        body: JSON.stringify({
                                                            courseId: courseId,
                                                            fileLink:
                                                                content
                                                                    .pdfLinks[
                                                                    i
                                                                ],
                                                        }),
                                                    }
                                                );
                                                const result = await res.json();
                                                setPdfSrc(result.url);
                                                handlePdfDownload(result.url);
                                            }}
                                        >
                                            {item}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        ));
    return (
        <div className="flex justify-between flex-col md:flex-row">
            <div className="ml-1 mr-1 mt-2 w-screen md:w-3/5 h-fit bg-gray-200 border border-gray-300 md:m-8 md:mt-2 md:mb-4 rounded-xl drop-shadow-xl">
                <ul
                    className="w-full divide-y divide-gray-300 
                     "
                >
                    {content}
                </ul>
            </div>
        </div>
    );
}
