import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { JwtContext } from "@/app/layout";
import BounceSpinners from "../spinners/BounceSpinner";
import ErrorMessage from "../spinners/ErrorMessage";

interface CommentBoxProps {
    courseId: string;
}
export default function CommentBox({ courseId }: CommentBoxProps) {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [star, setStar] = useState<number[]>([]);
    const { jwt } = useContext(JwtContext);
    const router = useRouter();

    function handleSetStar(num: number) {
        if (star.includes(num)) {
            setStar(star.filter((item) => item != num));
            setCount(count - 1);
        } else {
            setStar([...star, num]);
            setCount(count + 1);
        }
    }
    function handleClick(num: number) {
        if (num == 1) {
            if (count == 0 || count == 1) {
                handleSetStar(num);
            }
        } else if (num == 2) {
            if (count == 1 || count == 2) {
                handleSetStar(num);
            }
        } else if (num == 3) {
            if (count == 2 || count == 3) {
                handleSetStar(num);
            }
        } else if (num == 4) {
            if (count == 3 || count == 4) {
                handleSetStar(num);
            }
        } else if (num == 5) {
            if (count == 4 || count == 5) {
                handleSetStar(num);
            }
        }
    }
    async function handleSubmit() {
        setLoading(true);
        const res = await fetch(
            process.env.NEXT_PUBLIC_BACKEND! +
                process.env.NEXT_PUBLIC_WRITEREVIEW,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwt}`,
                },
                body: JSON.stringify({
                    courseId: courseId,
                    rating: count,
                    message: message,
                }),
            }
        );
        if (res.ok) {
            setLoading(false);
            setMessage("");
            setStar([]);
            setCount(0);
        } else {
            setMessage("");
            setStar([]);
            setCount(0);
            setError(true);
            setTimeout(() => {
                setError(false);
                setLoading(false);
                router.push("/checkout-cart");
            }, 3000);
        }
    }

    const handleReviewChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };
    return (
        <div className="max-w-lg  p-4">
            <div className="bg-white shadow-lg rounded-lg p-4">
                <h2 className="text-2xl font-semibold">Leave a Review</h2>
                <textarea
                    className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:border-gray-400"
                    rows={4}
                    placeholder="Write your review here..."
                    value={message}
                    onChange={handleReviewChange}
                ></textarea>
                <div className="flex items-center mt-4">
                    <span className="text-md font-semibold mr-2">
                        Rating :{" "}
                    </span>
                    <div className="flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6  cursor-pointer ${
                                star.includes(1)
                                    ? "text-yellow-500"
                                    : "text-slate-200"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            onClick={() => handleClick(1)}
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6  cursor-pointer ${
                                star.includes(2)
                                    ? "text-yellow-500"
                                    : "text-slate-200"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            onClick={() => handleClick(2)}
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6  cursor-pointer ${
                                star.includes(3)
                                    ? "text-yellow-500"
                                    : "text-slate-200"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            onClick={() => handleClick(3)}
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6  cursor-pointer ${
                                star.includes(4)
                                    ? "text-yellow-500"
                                    : "text-slate-200"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            onClick={() => handleClick(4)}
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6  cursor-pointer ${
                                star.includes(5)
                                    ? "text-yellow-500"
                                    : "text-slate-200"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            onClick={() => handleClick(5)}
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                </div>
                <button
                    className="bg-blue-500 text-white hover:bg-blue-600 rounded-md px-4 py-2 mt-4"
                    onClick={() => handleSubmit()}
                    disabled={loading}
                >
                    {loading ? <BounceSpinners /> : "Submit Review"}
                </button>
                {error && (
                    <ErrorMessage
                        message={"Purchase the course , before reviewing !"}
                    />
                )}
            </div>
        </div>
    );
}
