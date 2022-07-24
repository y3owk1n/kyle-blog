import Head from "next/head";
import { useRouter } from "next/router";
import { DEVDOMAIN, DOMAIN } from "../lib/constants";

interface Props {
  title?: string;
  description?: string;
  image?: string;
  date?: string;
  type?: string;
}

const Meta = ({ title, description, image, date, type }: Props) => {
  const router = useRouter();
  const devEnvironment = process.env.NODE_ENV === "development";

  const meta = {
    title: title ? title : "Kyle Wong - Digital Marketer, developer.",
    description: description
      ? description
      : `Hello, I'm Kyle, a digital marketer and web developer, based in the Malaysia 🇲🇾.`,
    image: image
      ? image
      : `${devEnvironment ? DEVDOMAIN : DOMAIN}/assets/blog/hello/cover.jpg`,
    type: type ? type : "website",
    date: date ? date : null,
  };

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={meta.description} />
      <meta property="og:url" content={`${DOMAIN}${router.asPath}`} />
      <link rel="canonical" href={`${DOMAIN}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Kyle Wong" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
    </Head>
  );
};

export default Meta;
