"use client";
import { getCookie, setCookie } from "cookies-next";
import { Dispatch, SetStateAction, useState } from "react";
interface Props {
    title: string;
    children: React.ReactNode;
    isActive: number;
    setIsActive: Dispatch<SetStateAction<number>>;
}

function Panel({ title, children, isActive, setIsActive }: Props) {
    return (
        <section className="panel">
            <h3>{title}</h3>
            {(isActive == 1 && title == "About") ||
            (isActive == 2 && title == "Etymology") ? (
                <p>{children}</p>
            ) : (
                <button
                    onClick={() => {
                        title == "About" ? setIsActive(1) : setIsActive(2);
                    }}
                >
                    Show1
                </button>
            )}
        </section>
    );
}

export default function Accordion() {
    setCookie("jwt", "999");
    setCookie("jwt", "888");
    const [isActive, setIsActive] = useState(0);
    return (
        <div className="m-44">
            <h2>Almaty, Kazakhstan</h2>
            <button
                onClick={() => {
                    console.log(getCookie("jwt"));
                }}
            >
                Cick me
            </button>
        </div>
    );
}
