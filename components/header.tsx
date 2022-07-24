/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Header = () => {
  return (
    <Link href="/" passHref>
      <a>
        <div className="flex-col md:flex-row flex items-center mb-20 mt-8">
          <img
            src="/assets/profile.jpg"
            alt="Author"
            width="50px"
            className="rounded-full shadow-lg mb-4 md:mr-4 md:mb-0"
          />
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight ">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
              Kyle&apos;s{" "}
            </span>
            Blog
          </h2>
        </div>
      </a>
    </Link>
  );
};

export default Header;
