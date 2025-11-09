import { BookCard } from "@/components/BookCard";
import ExternalLink from "@/components/icons/ExternalLink";
import Link from "next/link";
import waves from "@/public/waves.png";

import Image from "next/image";
import bookCover from "@/public/myth_of_sisyphus.jpg";

export const metadata = {
  title: "Misc | Het Thakkar",
  description:
    "Miscellaneous information about Het Thakkar like reading lists, music and playlists",
};

export default function Misc() {
  return (
    <>
      <h1 className="content-box text-white font-bold text-4xl mb-10 mt-8">
        Currently Reading
      </h1>
      <div className="flex flex-col justify-center items-center flex-wrap w-full max-w-2xl mx-auto">
        <BookCard
          title="The Myth of Sisyphus"
          author="Albert Camus"
          description="A philosophical essay exploring the concept of the absurd and the human condition. Perfect for my quarter life crisis."
          cover={bookCover}
          coverWidth={300}
          coverHeight={100}
          className="mb-8 md:max-h-64"
        />
      </div>
      <div className="content-box text-white font-bold text-4xl mb-10 mt-8">
        Check out my generative art
      </div>
      <Link href="/misc/waves" passHref={true}>
        <div className="w-full codemax-w-2xl mx-auto flex md:flex-col overflow-hidden justify-center items-center">
          <div className="flex flex-col justify-center items-center bg-grayLight rounded-lg">
            <Image src={waves} alt="Waves artwork" width={300} height={280} />
            <p className="text-white px-4 pb-2 pt-1 hover:underline">
              Waves🌊{" "}
              <ExternalLink className="text-white inline scale-75 -ml-1 -mt-0.5" />{" "}
            </p>
          </div>
        </div>
      </Link>
      <div className="content-box text-white font-bold text-4xl mb-10 mt-8">
        What I&apos;m vibing to right now
      </div>
      <div className="w-full max-w-2xl mx-auto flex md:flex-col overflow-hidden justify-start items-start">
        <iframe
          className="w-full"
          height="315"
          src="https://www.youtube.com/embed/tYGqfWUjIxY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="content-box text-white mb-4 p-2 md:p-4 rounded-b-lg bg-grayLight flex flex-col">
        <span className=" font-normal text-2xl">
        YOTTO | Anjunadeep Open Air: London 2025 (Official Set)
        </span>
        <span className="font-thin text-base mt-2 leading-5"></span>
      </div>
      <div className="content-box text-gray-200 mb-2 mt-10 text-2xl flex flex-col">
        Here&apos;s a Spotify playlist I have been maintaining for the past few
        years with the latest dance music I really like
      </div>
      <div className="w-full max-w-2xl mx-auto flex md:flex-col overflow-hidden justify-start items-start mb-10">
        <iframe
          src="https://open.spotify.com/embed/playlist/0mp422NtfcH1VpRnXE8nD1?utm_source=generator&theme=0"
          width="100%"
          height="380"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </>
  );
}
