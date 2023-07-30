import Link from "next/link";

interface NavLinkType {
    href: string;
    children?: React.ReactNode;
    className?: string;
}

export default function NavLink({ href, children, className }: NavLinkType) {
    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
}
