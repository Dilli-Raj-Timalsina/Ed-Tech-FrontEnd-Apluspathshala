import { useRouter } from "next/navigation";

interface ButtonAuthProps {
    children: React.ReactNode;
    label?: string;
    pagePath: string;
}
export default function ButtonAuth({
    children,
    label,
    pagePath,
}: ButtonAuthProps) {
    const router = useRouter();
    return (
        <button
            className="bg-blue-600 px-3 py-1  rounded-md whitespace-nowrap text-white font-normal text-sm hover:drop-shadow-xl hover:bg-blue-700"
            onClick={() => router.push(pagePath)}
        >
            {label || children}
        </button>
    );
}
