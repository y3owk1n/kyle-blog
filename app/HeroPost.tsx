import Link from "next/link";
import CoverImage from "./CoverImage";
import DateFormatter from "./DateFormatter";

type Props = {
    title: string;
    coverImage: string;
    date: string;
    excerpt: string;
    slug: string;
};

const HeroPost = ({ title, coverImage, date, excerpt, slug }: Props) => {
    return (
        <section>
            <div className="mb-8 md:mb-16">
                <CoverImage
                    title={title}
                    src={coverImage}
                    slug={slug}
                    isEager
                />
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                <div>
                    <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
                        <Link
                            href={`/posts/${slug}`}
                            passHref
                            className="hover:underline">
                            {title}
                        </Link>
                    </h3>
                    <div className="mb-4 md:mb-0 text-gray-500">
                        <DateFormatter dateString={date} />
                    </div>
                </div>
                <div>
                    <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
                </div>
            </div>
        </section>
    );
};

export default HeroPost;
