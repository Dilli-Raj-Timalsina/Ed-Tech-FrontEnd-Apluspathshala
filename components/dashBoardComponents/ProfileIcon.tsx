import { useRouter } from "next/navigation";
import Cookies from "universal-cookie";

interface ProfileIconProps {
    logIn: boolean;
}
export default function ProfileIcon({ logIn }: ProfileIconProps) {
    const cookies = new Cookies();

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
            {logIn && cookies.get("icon")}
        </button>
    );
}
