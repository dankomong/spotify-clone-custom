import { Price } from "@/types";

// Create util that will fetch our url depending on whether we're
// in production, local, deploy to vercel, etc.

export const getURL = () => {
    let url = 
        process.env.NEXT_PUBLIC_SITE_URL ?? 
        process.env.NEXT_PUBLIC_VERCEL_URL ?? 
        'http://localhost:3000/'

    // confirm the url we passed (if we changed it for any reason)
    // has https
    url = url.includes('http') ? url : `https://${url}`;
    url = url.charAt(url.length - 1) === '/' ? url: `${url}/`;

    return url;
};

// helper function fetch for post data
export const postData = async({
    url, 
    data 
}: { 
    url: string;
    data?: { price: Price }
}) => {
    console.log('POST REQUEST: ', url, data);

    const res: Response = await fetch(url, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        credentials: 'same-origin',
        body: JSON.stringify(data)
    });

    if (!res.ok) {
        console.log('Error in POST', { url, data, res });

        throw new Error(res.statusText);
    }

    return res.json();
};

export const toDateTime = (secs: number) => {
    var t = new Date('1970-01-01T00:30:00Z');
    t.setSeconds(secs);
    return t;
};