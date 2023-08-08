import { useRouter } from "next/navigation";

interface logoProps {
    logoImageClass: string;
    logoTitleClass: string;
}
export default function Logo({ logoImageClass, logoTitleClass }: logoProps) {
    const router = useRouter();
    return (
        <div className="flex flex-row items-center ">
            <button
                className="flex items-center"
                onClick={() => router.push("/")}
            >
                <img
                    src="/logo.webp"
                    className={`h-16 w-16  ${logoImageClass}`}
                />
                <h1
                    className={`text-xl font-semibold hidden ${logoTitleClass}`}
                >
                    Pathshala
                </h1>
            </button>
        </div>
    );
}
