import { useRouter } from "next/navigation";

interface logoProps {
    className?: string;
}
export default function Logo({ className }: logoProps) {
    const router = useRouter();
    return (
        <div className="flex flex-row items-center ">
            <button
                className="flex items-center"
                onClick={() => router.push("/")}
            >
                <img src="/logo.webp" className={`h-16 w-16  ${className}`} />
                <h1 className={`text-xl font-semibold  ${className}`}>
                    Pathshala
                </h1>
            </button>
        </div>
    );
}
