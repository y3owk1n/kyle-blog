import Link from "next/link";
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="inline-flex rounded-md shadow mt-10">
        <Link href="/" passHref>
          <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500">
            Back to home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PostBody;
