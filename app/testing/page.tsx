"use client";

import Link from "next/link";

export default function Testing() {
    return (
        <div className="mt-44">
            Hello mf
            <Link href={"/fake/2"}>testing 2</Link>
        </div>
    );
}
