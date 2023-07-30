interface NavProps {
    children: React.ReactNode;
}

export default function NavBar(props: NavProps) {
    return <nav className="p-4 h-28 bg-slate-50">{props.children}</nav>;
}
