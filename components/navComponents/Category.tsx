import Link from "next/link";

export default function Category() {
    return (
        <Link href={"#"} className="flex justify-center items-center gap-2">
            <img
                src="/barIcon.svg"
                alt="icon"
                className="w-8 h-8 font-bold md:hidden"
            />
            <h1 className="text-base font-light hidden md:flex hover:text-blue-800 hover:drop-shadow-lg">
                Categories
            </h1>
        </Link>
    );
}
