import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
    // this way I replace default locale for es when loading homepage and navigating to spanish pages in the site
    if (
        req.nextUrl.pathname.startsWith("/_next") ||
        req.nextUrl.pathname.includes("/api/") ||
        PUBLIC_FILE.test(req.nextUrl.pathname)
    ) {
        return;
    }

    if (req.nextUrl.locale === "default") {
        return NextResponse.redirect(
            new URL(`/es/${req.nextUrl.pathname}`, req.url)
        );
    }
}
