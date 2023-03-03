import { blurDataURL } from "@/lib/constants";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

type Props = {
    title: string;
    src: string;
    slug?: string;
    isEager?: boolean;
};

const CoverImage = ({ title, src, slug, isEager = false }: Props) => {
    const image = (
        <div className="relative aspect-[2/1]">
            <Image
                fill={true}
                placeholder="blur"
                blurDataURL={blurDataURL}
                loading={isEager ? "eager" : "lazy"}
                src={src}
                alt={`Cover Image for ${title}`}
                className={cn("shadow-sm rounded-lg ", {
                    "hover:shadow-lg transition-shadow duration-200": slug,
                })}
            />
        </div>
    );
    return (
        <div className="sm:mx-0">
            {slug ? (
                <Link
                    href={`/posts/${slug}`}
                    passHref
                    aria-label={title}>
                    {image}
                </Link>
            ) : (
                image
            )}
        </div>
    );
};

export default CoverImage;
