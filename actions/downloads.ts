interface FreeDownloadParams {
    id: string;
    customerEmail: string;
}

export const fetchResources = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/downloads/all`);
        const data = await res.json();
        return data.data;
    } catch (error) {
        console.log(error);
    }
};

export const orderFreeDownload = async (params: FreeDownloadParams) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/downloads/download`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};