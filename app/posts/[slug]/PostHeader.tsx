import CoverImage from "../../CoverImage";
import DateFormatter from "../../DateFormatter";
import PostTitle from "./PostTitle";

type Props = {
    title: string;
    coverImage: string;
    date: string;
};

const PostHeader = ({ title, coverImage, date }: Props) => {
    return (
        <>
            <PostTitle>{title}</PostTitle>
            <div className="mb-8 md:mb-16 sm:mx-0">
                <CoverImage
                    title={title}
                    src={coverImage}
                    isEager
                />
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="mb-6 text-gray-400">
                    <DateFormatter dateString={date} />
                </div>
            </div>
        </>
    );
};

export default PostHeader;
