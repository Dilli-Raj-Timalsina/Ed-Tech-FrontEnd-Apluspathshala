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
            } rounded-full w-12 h-12 bg-blue-800 text-center  font-bold text-white text-xl drop`}
            onClick={() => {
                router.push("/dashboard");
            }}
        >
            NT
        </button>
    );
}
