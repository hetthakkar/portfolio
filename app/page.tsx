import Link from "next/link";
import { Container } from "../components/Container";

import Image from "next/image";
import ProfilePicture from "../public/profile.jpg";
import { TextContainer } from "../components/TextContainer";

export const metadata = {
  title: `Het Thakkar`,
  description: `Portfolio website for Het Thakkar`,
};

export default function Page() {
  return (
    <Container>
      <div className="md:mt-8 flex flex-col items-center sm:flex-row sm:items-start justify-start w-full max-w-2xl mx-auto">
        <div className="cursor-pointer">
          <Link href="/" passHref={true}>
            <Image
              alt="Het Thakkar"
              width={105}
              height={105}
              src={ProfilePicture}
              placeholder="empty"
              className="rounded-full"
            />
          </Link>
        </div>
        <div className="flex flex-col items-start ml-8">
          <h1 className="text-gray-300 text-5xl font-semibold">Het Thakkar</h1>
          <h2 className="mt-2 mb-16 md:mb-24 text-gray-400 text-lg font-thin">
            Software engineer
          </h2>
        </div>
      </div>
      <TextContainer className="mb-8">
        <div>
          <div className="card-title">About Me</div>
          <div className="mt-4 card-text">
            I am a software engineer who enjoys building cool things. I like
            exploring new places on my bike, lifting weights, making latte art,
            reading science fiction and fantasy books, and listening to a lot of
            trance and progressive music.
          </div>
        </div>
      </TextContainer>
    </Container>
  );
}
