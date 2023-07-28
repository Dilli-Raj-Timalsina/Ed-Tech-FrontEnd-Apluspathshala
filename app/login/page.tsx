"use client";
import Login from "@/components/login";

export default function LoginPage() {
    return (
        <div className="w-screen h-screen flex justify-center g-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 ">
            <Login onSubmit={() => {}} />
        </div>
    );
}
