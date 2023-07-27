"use client";
import Signup from "@/components/Signup";

export default function SignupPage() {
    return (
        <div className="w-screen h-screen flex justify-center bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-100 ">
            <Signup onSubmit={() => {}} />
        </div>
    );
}
