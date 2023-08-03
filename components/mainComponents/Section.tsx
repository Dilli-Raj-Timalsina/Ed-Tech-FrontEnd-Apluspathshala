export default function Section() {
    return (
        <div className="flex m-1 md:m-8 hover:drop-shadow-5xl ">
            <div className="md:mt-8 md:ml-10">
                <h1 className=" text-xl md:text-3xl font-semibold ">
                    Empowering Teachers and Students in
                    <p className=" text-2xl md:text-6xl text-blue-400">Nepal</p>
                </h1>
                <p className="text-gray-800 text-base md:text-lg m-2 mb-4 md:mb-6 md:mt-4">
                    At A+ Pathshala, we believe in empowering individual
                    teachers and students in Nepal by providing them with the
                    tools and resources necessary to build and grow their brand.
                    Our ed-tech platform offers personalized support and
                    guidance to help teachers establish a strong online presence
                    and succeed in the competitive world of online education.
                    With our platform, students in Nepal can access high-quality
                    courses from top teachers worldwide.
                </p>
                <a
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-md hover:drop-shadow-lg "
                    href="#"
                >
                    Join Our Community
                </a>
            </div>
            <img src="/teacher.png" className="w-1/2 h-fit  hidden md:flex" />
        </div>
    );
}
