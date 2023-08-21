import { useRouter } from "next/navigation";

interface ButtonAuthProps {
    children: React.ReactNode;
    pagePath: string;
    logIn: Boolean;
}

export default function ButtonAuth({
    children,
    pagePath,
    logIn,
}: ButtonAuthProps) {
    const router = useRouter();
    return (
        <button
            className={`${
                logIn ? "hidden" : ""
            } bg-blue-600 px-3 py-1  rounded-md whitespace-nowrap text-white font-normal text-sm hover:drop-shadow-xl hover:bg-blue-700`}
            onClick={() => router.push(pagePath)}
        >
            {children}
        </button>
    );
}
