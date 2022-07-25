import { DiscussionEmbed } from "disqus-react";
import Link from "next/link";

type Props = {
  content: string;
  disqusShortName: string;
  disqusConfig: {
    url: string;
    identifier: string;
    title: string;
  };
};

const PostBody = ({ content, disqusShortName, disqusConfig }: Props) => {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={`prose prose-blockquote:border-0 prose-blockquote:relative prose-blockquote:before:content-[''] prose-blockquote:before:absolute prose-blockquote:before:block prose-blockquote:before:bg-gradient-to-br prose-blockquote:before:from-pink-400 prose-blockquote:before:to-red-600 prose-blockquote:before:left-0 prose-blockquote:before:w-[6px] prose-blockquote:before:h-full prose-a:font-bold prose-a:underline prose-a:underline-offset-4 prose-a:decoration-red-500 prose-a:text-transparent prose-a:bg-clip-text prose-a:bg-gradient-to-br prose-a:from-pink-400 prose-a:to-red-600`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="inline-flex rounded-md shadow mt-10">
        <Link href="/" passHref>
          <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500">
            Back to home
          </a>
        </Link>
      </div>
      {!isDev && (
        <div className="mt-10">
          <DiscussionEmbed shortname={disqusShortName} config={disqusConfig} />
        </div>
      )}
    </div>
  );
};

export default PostBody;
