import OneCourse from "./OneCourse";

export default function AllCourse() {
    const items = dummyData.map((current, index) => (
        <OneCourse key={index} {...current}></OneCourse>
    ));
    return <div className="py-3 divide-y divide-gray-300 ">{items}</div>;
}

const dummyData = [
    {
        category: "web development",
        title: "Develop modern, complex, responsive Design",
        tutorName: "Angela Yu",
        subTitle:
            "Master the art of developing modern, complex, responsive and scalable web applications with Angular.",
        rating: 2.7,
        price: 12.99,
        totalLength: 53.2,
        totalStudent: 1209838,
    },
    {
        category: "data science",
        title: "Introduction to Machine Learning",
        tutorName: "John Smith",
        subTitle:
            "Dive into the world of machine learning and gain a solid understanding of its concepts and applications.",
        rating: 4.5,
        price: 19.99,
        totalLength: 36.5,
        totalStudent: 752489,
    },
    {
        category: "graphic design",
        title: "Digital Illustration: From Sketch to Masterpiece",
        tutorName: "Emily Johnson",
        subTitle:
            "Learn the art of digital illustration, from sketching initial ideas to creating stunning masterpieces.",
        rating: 4.8,
        price: 24.99,
        totalLength: 45.7,
        totalStudent: 523671,
    },
    {
        category: "language learning",
        title: "Conversational French for Beginners",
        tutorName: "Pierre Dubois",
        subTitle:
            "Embark on your journey to learn French through engaging conversations and practical exercises.",
        rating: 4.6,
        price: 9.99,
        totalLength: 28.9,
        totalStudent: 289347,
    },
    {
        category: "business",
        title: "Entrepreneurship: Building Your Startup",
        tutorName: "Sarah Miller",
        subTitle:
            "Discover the key principles of entrepreneurship and how to successfully build and grow your startup.",
        rating: 4.9,
        price: 29.99,
        totalLength: 61.8,
        totalStudent: 874263,
    },
    {
        category: "programming",
        title: "Python for Beginners: Learn Coding with Ease",
        tutorName: "Alex Turner",
        subTitle:
            "Start your coding journey with Python and gain a solid foundation in programming concepts.",
        rating: 2.2,
        price: 14.99,
        totalLength: 42.5,
        totalStudent: 654890,
    },
    {
        category: "music",
        title: "Piano Masterclass: From Novice to Virtuoso",
        tutorName: "Julia Martinez",
        subTitle:
            "Unlock the secrets of piano playing and elevate your skills from novice to virtuoso.",
        rating: 3.8,
        price: 27.99,
        totalLength: 55.3,
        totalStudent: 389572,
    },
    {
        category: "fitness",
        title: "Total Body Transformation: 12-Week Fitness Program",
        tutorName: "Ryan Davis",
        subTitle:
            "Transform your body in just 12 weeks with a comprehensive fitness program designed for all levels.",
        rating: 1.6,
        price: 39.99,
        totalLength: 72.6,
        totalStudent: 920156,
    },
    {
        category: "cooking",
        title: "Culinary Delights: Mastering the Art of Gourmet Cooking",
        tutorName: "Isabella Ramirez",
        subTitle:
            "Embark on a culinary journey to master the art of gourmet cooking and impress your guests.",
        rating: 0.9,
        price: 34.99,
        totalLength: 58.9,
        totalStudent: 576932,
    },
    {
        category: "photography",
        title: "Photography Fundamentals: Capturing Life's Moments",
        tutorName: "David Wilson",
        subTitle:
            "Learn the fundamentals of photography and capture life's most beautiful moments with your camera.",
        rating: 3.7,
        price: 22.99,
        totalLength: 49.8,
        totalStudent: 421805,
    },
    {
        category: "writing",
        title: "Creative Writing Workshop: Unleash Your Imagination",
        tutorName: "Sophia Bennett",
        subTitle:
            "Join this creative writing workshop to unlock your imagination and become a skilled wordsmith.",
        rating: 4.8,
        price: 17.99,
        totalLength: 41.2,
        totalStudent: 632489,
    },
    {
        category: "art",
        title: "Modern Abstract Art: Expressing Emotions on Canvas",
        tutorName: "Michael Thompson",
        subTitle:
            "Explore the world of modern abstract art and learn to express emotions through your canvas.",
        rating: 4.6,
        price: 29.99,
        totalLength: 39.5,
        totalStudent: 318752,
    },
    {
        category: "self-improvement",
        title: "Mindfulness Meditation: Achieving Inner Peace",
        tutorName: "Olivia Adams",
        subTitle:
            "Discover the power of mindfulness meditation and achieve inner peace in your daily life.",
        rating: 1.9,
        price: 9.99,
        totalLength: 22.7,
        totalStudent: 852136,
    },
    {
        category: "science",
        title: "Astronomy 101: Exploring the Wonders of the Universe",
        tutorName: "Dr. Robert Lewis",
        subTitle:
            "Embark on a cosmic journey to explore the wonders of the universe and learn about astronomy.",
        rating: 2.7,
        price: 18.99,
        totalLength: 33.8,
        totalStudent: 498271,
    },
    {
        category: "health",
        title: "Nutrition and Wellness: A Holistic Approach to Health",
        tutorName: "Dr. Emily White",
        subTitle:
            "Learn about holistic nutrition and wellness to achieve optimal health and well-being.",
        rating: 3.5,
        price: 14.99,
        totalLength: 28.1,
        totalStudent: 635198,
    },
];
