import Script from "next/script";
import "@/styles/index.css";
import { Raleway } from "next/font/google";
import { DEVDOMAIN, devEnvironment, DOMAIN } from "@/lib/constants";

const title = "Kyle Wong - Digital Marketer, developer.";
const description = `Hello, I'm Kyle, a digital marketer and web developer, based in the Malaysia 🇲🇾.`;
const image = `${
    devEnvironment ? DEVDOMAIN : DOMAIN
}/assets/blog/hello/cover.jpg`;

export const metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
        url: DOMAIN,
        siteName: title,
        images: [image],
        locale: "en-US",
        type: "website",
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: [
            {
                url: "/favicon/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                url: "/favicon/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
        ],
        shortcut: ["/favicon/favicon.ico"],
        apple: [
            {
                url: "/favicon/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
        other: [
            {
                rel: "mask-icon",
                url: "/favicon/safari-pinned-tab.svg",
            },
        ],
    },
    manifest: "/favicon/site.webmanifest",
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
    },
};

const raleway = Raleway({
    subsets: ["latin"],
    variable: "--font-inter",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const isDev = process.env.NODE_ENV === "development";

    return (
        <html
            lang="en"
            className={raleway.className}>
            {!isDev && (
                <Script
                    src={"https://5oddwdpyqe.kylewong.my/umami.js"}
                    data-website-id="2732127c-366b-4a69-8067-b750b856bbd4"
                    strategy="lazyOnload"
                />
            )}

            <body>
                <div className="container mx-auto px-5">{children}</div>
            </body>
        </html>
    );
}
