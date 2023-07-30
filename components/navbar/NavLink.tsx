import Link from "next/link";

interface NavLinkType {
    href: string;
    children?: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkType) {
    return (
        <Link
            href={href}
            className="text-lg font-mono font-semibold hover:text-xl"
        >
            {children}
        </Link>
    );
}
