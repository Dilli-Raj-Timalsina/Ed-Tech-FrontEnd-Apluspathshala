import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Creaty dilli",
    description: "Generatee next app",
};

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <div className="bg-red-600">
            <h1> Hey whatsapp , I am ffrom inner Layout</h1>
            <a href="/upload/uploadInner">link</a>

            {children}
        </div>
    );
}
