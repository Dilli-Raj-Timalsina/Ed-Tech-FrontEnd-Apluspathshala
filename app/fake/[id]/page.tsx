"use client";
interface Params {}
export default function FakeID({ params }: { params: { id: string } }) {
    return <div className="mt-44">Hello mf hii{params.id}</div>;
}
