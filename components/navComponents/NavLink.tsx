import Link from "next/link";
interface navProps {
    children: React.ReactNode;
    href?: string;
}

export default function NavLink({ children, href = "#" }: navProps) {
    return (
        <Link
            href={href}
            className=" text-base hidden md:flex hover:text-blue-800 hover:drop-shadow-lg"
        >
            {children}
        </Link>
    );
}
