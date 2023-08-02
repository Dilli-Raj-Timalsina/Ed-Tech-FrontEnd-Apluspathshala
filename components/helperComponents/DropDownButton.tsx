export default function DropDownButton() {
    return (
        <div>
            <img
                src="/barIcon.svg"
                alt="icon"
                className="w-8 h-8 font-bold md:hidden"
            />
            <button
                className="hidden md:inline-flex text-blue-800 bg-white hover:text-blue-900 border border-slate-300 font-semibold rounded-lg text-base px-3 py-2 text-center items-center    hover:drop-shadow-md"
                type="button"
            >
                Categories
                <svg
                    className="w-2.5 h-2.5 ml-2.5 text-gray-800 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 10"
                >
                    <path d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z" />
                </svg>
                {/* This is for upArrow icon */}
                {/* <svg
                    className="w-2.5 h-2.5 ml-2.5 text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 10"
                >
                    <path d="M9.207 1A2 2 0 0 0 6.38 1L.793 6.586A2 2 0 0 0 2.207 10H13.38a2 2 0 0 0 1.414-3.414L9.207 1Z" />
                </svg> */}
            </button>
        </div>
    );
}
