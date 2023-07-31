interface NavProps {
    children: React.ReactNode;
    className?: string;
}

export default function NavBar(props: NavProps) {
    return (
        <nav
            className={
                "p-4 h-20 bg-white flex items-center justify-around gap-1 md:gap-4 drop-shadow-xl " +
                props.className
            }
        >
            {props.children}
        </nav>
    );
}
