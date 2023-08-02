interface NavProps {
    children?: React.ReactNode;
    className?: string;
}

export default function NavBar(props: NavProps) {
    return (
        <nav
            className={
                "p-1 gap-1  h-20 bg-white flex items-center justify-around  drop-shadow-xl " +
                props.className
            }
        >
            {props.children}
        </nav>
    );
}
