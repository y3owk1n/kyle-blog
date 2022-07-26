import ErrorPage from "next/error";
import { useRouter } from "next/router";
import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import PostTitle from "../../components/post-title";
import type PostType from "../../interfaces/post";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import { DEVDOMAIN, DOMAIN } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";

type Props = {
  post: PostType;
  morePosts: PostType[];
};

export default function Post({ post, morePosts }: Props) {
  const router = useRouter();
  const devEnvironment = process.env.NODE_ENV === "development";

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const disqusShortname = "kylewong-my";

  const disqusConfig = {
    url: `${DOMAIN}/posts/${router.query.slug}`,
    identifier: post.slug, // Single post id
    title: post.title, // Single post title
  };

  return (
    <Layout
      title={`${post.title} | Kyle's Blog`}
      description={post.excerpt}
      image={`${devEnvironment ? DEVDOMAIN : DOMAIN}${post.coverImage}`}
      date={new Date(post.date).toISOString()}
      type="article"
    >
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody
                content={post.content}
                disqusShortName={disqusShortname}
                disqusConfig={disqusConfig}
              />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "excerpt",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
