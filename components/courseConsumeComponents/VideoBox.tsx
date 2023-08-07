export default function VideoBox() {
    return (
        <div className="mt-30 ml-96 w-2/5  h-auto border-2 rounded-b-lg border-slate-200 flex flex-col justify-center">
            <video
                className="w-full h-auto "
                controls
                autoPlay
                src="https://youtu.be/NE0dWeV5epA"
            ></video>
            <button className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mt-3 text-center ">
                Add to cart
            </button>
        </div>
    );
}
