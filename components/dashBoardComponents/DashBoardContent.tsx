interface DashBoardContentProps {
    name: String;
}

export default function DashBoardContent({ name }: DashBoardContentProps) {
    return (
        <div className="w-full h-screen bg-slate-100 border-b border-gray-300 hidden md:flex">
            <div className="pt-10">
                <h1 className="text-center text-gray-700 font-bold text-3xl">
                    Welcome Back , {name} :
                </h1>
            </div>
        </div>
    );
}
