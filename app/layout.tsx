import Script from "next/script";
import "../styles/index.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
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

      <body>{children}</body>
    </html>
  );
}
