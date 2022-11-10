import Script from "next/script";
import "@/styles/index.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const isDev = process.env.NODE_ENV === "development";

    return (
        <html lang="en">
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
