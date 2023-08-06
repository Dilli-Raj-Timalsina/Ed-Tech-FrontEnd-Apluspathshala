interface NavProps {
    children?: React.ReactNode;
    className?: string;
}

export default function NavBar(props: NavProps) {
    return (
        <nav
            className={
                "p-1 gap-1 top-0 z-40 h-20 bg-white flex flex-nowrap items-center justify-around  drop-shadow-xl static md:fixed w-screen " +
                props.className
            }
        >
            {props.children}
        </nav>
    );
}
