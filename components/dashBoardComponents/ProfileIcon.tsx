interface ProfileIconProps {
    name: String;
}
export default function ProfileIcon({ name }: ProfileIconProps) {
    return (
        <button className="rounded-full w-12 h-12 bg-blue-800 text-center  font-bold text-white text-xl drop">
            NT
        </button>
    );
}
