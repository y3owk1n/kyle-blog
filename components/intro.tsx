import Image from "next/legacy/image";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { blurDataURL } from "../lib/constants";

const Intro = () => {
  return (
    <section className="mt-16 mb-16 md:mb-12">
      <div className="flex-col md:flex-row flex items-center mb-6">
        <div className="relative w-[100px] h-[100px] mb-4 md:mr-4 md:mb-0">
          <Image
            layout="fill"
            placeholder="blur"
            blurDataURL={blurDataURL}
            objectFit="cover"
            src="/assets/profile.png"
            alt="Author"
            className=" rounded-full"
          />
        </div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
            Kyle&apos;s{" "}
          </span>
          Blog
        </h1>
      </div>
      <p className="text-center md:text-left text-lg">
        A digital marketer and web developer, based in the Malaysia 🇲🇾.
      </p>
      <div className="mt-4 flex gap-4 justify-center md:justify-start">
        <a
          href="https://github.com/y3owk1n"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/kyle-wong-958a58115/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="h-5 w-5" />
        </a>
        <a
          href="https://www.instagram.com/yeowkin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram className="h-5 w-5" />
        </a>
        <a
          href="mailto:me@kylewong.my"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillMail className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Intro;
