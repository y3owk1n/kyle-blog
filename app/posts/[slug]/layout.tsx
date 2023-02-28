import { getPostBySlug } from "@/lib/api";
import { DEVDOMAIN, devEnvironment, DOMAIN } from "@/lib/constants";
import { Metadata } from "next";
import Header from "./Header";

export async function generateMetadata({ params }): Promise<Metadata> {
    const post = getPostBySlug(params.slug, [
        "title",
        "date",
        "slug",
        "excerpt",
        "content",
        "ogImage",
        "coverImage",
    ]);

    const title = `${post.title} | Kyle's Blog`;
    const description = post.excerpt;
    const image = `${devEnvironment ? DEVDOMAIN : DOMAIN}${post.coverImage}`;
    const date = new Date(post.date).toISOString();

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `${DOMAIN}/posts/${post.slug}`,
            siteName: title,
            images: [image],
            locale: "en-US",
            type: "article",
            publishedTime: date,
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}

export default function PostLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
