"use client";
import Login from "@/components/login";

export default function LoginPage() {
    return (
        <div className="w-screen h-screen flex justify-center bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-100 ">
            <Login onSubmit={() => {}} />
        </div>
    );
}
