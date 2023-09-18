export default async function searchCodeInAPI(slug: string) {
    if (typeof slug !== "string" || slug === "") {
        return Promise.resolve([]);
    }
    slug = slug.toLowerCase();
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND!}${
            process.env.NEXT_PUBLIC_SEARCHITEM
        }/${slug}`
    );
    const data = await res.json();
    return data.courses;
}
