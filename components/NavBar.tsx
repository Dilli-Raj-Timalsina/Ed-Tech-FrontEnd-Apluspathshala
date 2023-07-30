interface NavProps {
    children: React.ReactNode;
    className?: string;
}

export default function NavBar(props: NavProps) {
    return (
        <nav
            className={
                "p-4 h-28 bg-slate-50 flex items-center justify-around gap-4" +
                props.className
            }
        >
            {props.children}
        </nav>
    );
}
