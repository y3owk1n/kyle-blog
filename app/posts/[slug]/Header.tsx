import { blurDataURL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <Link
            href="/"
            passHref>
            <div className="flex-col md:flex-row flex items-center mb-20 mt-8">
                <div className="relative w-[40px] h-[40px] mb-4 md:mr-4 md:mb-0">
                    <Image
                        fill={true}
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                        src="/assets/profile.png"
                        alt="Author"
                        className=" rounded-full"
                    />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight ">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
                        Kyle&apos;s{" "}
                    </span>
                    Blog
                </h2>
            </div>
        </Link>
    );
};

export default Header;
