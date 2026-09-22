export const fetchResources = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/downloads/all`);
        const data = await res.json();
        console.log(data.data);
        return data.data;
    } catch (error) {
        console.log(error);
    }
};