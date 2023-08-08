export default function VideoBox() {
    return (
        <div className=" ml-2 mt-2 m-1 w-screen md:m-3 md:mr-8 md:mt-32  md:w-2/5  h-auto border-2 rounded-b-lg border-slate-200 flex flex-col justify-center md:fixed right-5  bg-green-50  top-3">
            <video
                className="w-full h-auto "
                controls
                autoPlay
                src="https://youtu.be/NE0dWeV5epA"
            ></video>
            <p className="font-bold text-3xl drop-shadow-sm text-gray-800 ml-1">
                $16.10
            </p>
            <div className="flex gap-1 items-center ">
                <img src="/clock-icon.svg" alt="" className="w-4 h-4" />
                {/* <div className="text-red-500 text-xs font-medium font-serif inline-block "> */}
                <span className="text-red-600 text-sm  font-semibold ">
                    2 days
                </span>

                <span className="text-red-500 text-sm font-medium font-serif">
                    left at this price!
                </span>
                {/* </div> */}
            </div>
            <button className="text-white bg-purple-700 hover:bg-purple-800  font-medium rounded-md text-sm px-2 py-2.5 mt-3   text-center ">
                Add to cart
            </button>
            <button className="text-gray-600  bg-slate-100  font-medium rounded-md text-sm px-2 py-2.5 mt-1  text-center border border-gray-500 ">
                <span className="hover:drop-shadow-sm"> Buy Now </span>
            </button>
        </div>
    );
}
