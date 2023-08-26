"use client";

import Link from "next/link";

export default function Fake() {
    return (
        <div className="mt-44">
            Hello mf
            <Link href={"/fake/2"}>link 2</Link>
        </div>
    );
}
