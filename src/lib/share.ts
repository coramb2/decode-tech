import { DecodeResponse } from "@/types/decode";

export function encodeShareData(query: string, response: DecodeResponse): string {
    const data = {
        q: query,
        w: response.what_it_is,
        d: response.what_to_do,
        wo: response.what_to_watch,
    };
    return btoa(encodeURIComponent(JSON.stringify(data)));
}

export function decodeShareData(encodedData: string): { query: string; response: DecodeResponse } | null {
    try {
        const decoded = JSON.parse(decodeURIComponent(escape(atob(encodedData))));
        return {
            query: decoded.q,
            response: {
                what_it_is: decoded.w,
                what_to_do: decoded.d,
                what_to_watch: decoded.wo,
            },
        };
    } catch {
        return null;
    }
}