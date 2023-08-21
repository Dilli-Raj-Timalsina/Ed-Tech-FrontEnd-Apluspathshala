import { useRouter } from "next/navigation";
interface ProfileIconProps {
    name: String;
    logIn: boolean;
}
export default function ProfileIcon({ name, logIn }: ProfileIconProps) {
    const router = useRouter();
    return (
        <button
            className={`${
                logIn ? "" : "hidden"
            } rounded-full w-12 h-12 bg-blue-700 text-center  font-bold text-white text-xl drop hover:drop-shadow-md hover:bg-blue-800`}
            onClick={() => {
                router.push("/dashboard");
            }}
        >
            NT
        </button>
    );
}
