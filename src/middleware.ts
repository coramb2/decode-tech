import { NextRequest, NextResponse } from 'next/server';

const rateLimit = new Map<string, { count: number; resetTime: number }>();

const LIMIT = 10;
const WINDOW_SIZE = 60 * 1000; // 1 minute

export function middleware(req: NextRequest) {
    if (!req.nextUrl.pathname.startsWith('/api/decode')) {
        return NextResponse.next();
    }

    const ip = 
        req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
        req.headers.get("x-real-ip") ??
        "anonymous";

    const now = Date.now();
    const record = rateLimit.get(ip);

    if (!record || now > record.resetTime) {
        rateLimit.set(ip, { count: 1, resetTime: now + WINDOW_SIZE });
        return NextResponse.next();
    }

    if (record.count >= LIMIT) {
        return NextResponse.json(
            { error: "Too many requests. Please try again later." },
            { status: 429 }
        );
    }

    record.count += 1;
    return NextResponse.next();
}

export const config = {
    matcher: '/api/decode',
};