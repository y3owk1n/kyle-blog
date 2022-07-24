import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

/* eslint-disable @next/next/no-img-element */
const Intro = () => {
  return (
    <section className="mt-16 mb-16 md:mb-12">
      <div className="flex-col md:flex-row flex items-center mb-6">
        <img
          src="/assets/profile.jpg"
          alt="Author"
          width="100px"
          className="rounded-full shadow-lg mr-4"
        />
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
            Kyle&apos;s{" "}
          </span>
          Blog
        </h1>
      </div>
      <p className="text-left text-lg">
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
