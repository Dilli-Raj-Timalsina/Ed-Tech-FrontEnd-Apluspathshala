import Link from "next/link";
interface navProps {
    children: React.ReactNode;
    href: string;
    // onClickHandler?: () => void;
}

export default function NavItem({ children, href = "#" }: navProps) {
    return (
        <Link
            href={href}
            className=" text-base hidden md:flex hover:text-blue-800 hover:drop-shadow-lg"
        >
            {children}
        </Link>
    );
}
