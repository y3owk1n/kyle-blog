import { AppProps } from "next/app";
import Script from "next/script";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const isDev = process.env.NODE_ENV === "development";
  return (
    <>
      {!isDev && (
        <Script
          src={"https://kyle-umami.up.railway.app/umami.js"}
          data-website-id="2732127c-366b-4a69-8067-b750b856bbd4"
          strategy="lazyOnload"
        />
      )}
      <Component {...pageProps} />
    </>
  );
}
