interface NavProps {
    children: React.ReactNode;
}

export default function NavBar(props: NavProps) {
    return <nav className="bg-purple-300 p-4 h-28">{props.children}</nav>;
}
