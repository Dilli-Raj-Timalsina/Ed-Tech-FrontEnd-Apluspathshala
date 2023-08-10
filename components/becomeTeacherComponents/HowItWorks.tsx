interface StepsProps {
    stepNumber: number;
    title: string;
    description: string;
}

const Step = ({ stepNumber, title, description }: StepsProps) => {
    return (
        <div className="flex items-start mb-8">
            <div className="bg-blue-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4"></div>
            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Step {stepNumber}: {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

const HowItWorks = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start bg-white rounded-lg shadow-lg p-6 md:p-8 mx-6 my-8 border border-gray-300">
            <div className="w-full md:w-1/2 mb-6 text-center md:mb-0">
                <img src="/a.png" alt="how it works" className="w-96 h-fit" />
            </div>
            <div className="w-full md:w-1/2 md:ml-8">
                <Step
                    stepNumber={1}
                    title="Create Your Course"
                    description="Use our easy-to-use course creation tools to build your course and add your content."
                    // icon={<i className="fas fa-pencil-alt"></i>}
                />
                <Step
                    stepNumber={2}
                    title="Set Your Pricing"
                    description="Choose the price for your course and decide how you want to handle payments."
                    // icon={<i className="fas fa-dollar-sign"></i>}
                />
                <Step
                    stepNumber={3}
                    title="Add Sections "
                    description="Add Sections to divide large course into different parts. "
                    // icon={<i className="fas fa-users"></i>}
                />
                <Step
                    stepNumber={4}
                    title="Manage Your Students"
                    description="Track your students' progress and communicate with them through our platform."
                    // icon={<i className="fas fa-users"></i>}
                />
            </div>
        </div>
    );
};

export default HowItWorks;
