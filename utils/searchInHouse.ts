interface searchInHouseReturnType {
    title: string;
    link: string;
}

export default function searchInHouse(item: string): searchInHouseReturnType[] {
    let lowerCasedString = item.toLowerCase();
    if (item == "") {
        return [];
    }

    const output = data.filter((value) => {
        const lowerCasedValue = value.title.toLowerCase();
        if (
            lowerCasedValue.startsWith(lowerCasedString) &&
            lowerCasedValue.includes(lowerCasedString)
        ) {
            return value;
        } else if (lowerCasedValue.includes(lowerCasedString)) {
            return value;
        }
    });

    return output;
}

const data = [
    {
        title: "Web Development",
        link: "web-development",
    },
    {
        title: "Data Science",
        link: "data-science",
    },
    {
        title: "Mobile Dev",
        link: "mobile-dev",
    },
    {
        title: "UI/UX Design",
        link: "ui/ux-design",
    },
    {
        title: "Machine Learning ",
        link: "machine-learning",
    },
    {
        title: "Frontend Dev",
        link: "frontend-dev",
    },
    {
        title: "Backend Dev",
        link: "backend-dev",
    },
    {
        title: "Cmat Exam",
        link: "cmat-exam",
    },
];
