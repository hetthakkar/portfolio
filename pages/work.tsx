import { IBaseProps } from "../common/interfaces";
import { TextContainer } from "../components/TextContainer";
import { NextPage } from "next";
import { Container } from "../components/Container";
import Image from "next/image";

import RaxLogo from "../public/raxter.svg";
import ISROLogo from "../public/isro.png";
import MetaLogo from "../public/meta.png";

const Sep = <span className="-mt-2.5 hidden sm:block">|</span>;

const Work: NextPage<IBaseProps> = (props: IBaseProps) => {
  return (
    <Container
      head={{
        title: `Work | Het Thakkar`,
        description: `Places where Het Thakkar has worked including the job responsibilities, achievements and positions`,
      }}
    >
      <div className="content-box text-white font-bold text-4xl mb-10 mt-8">
        Work Experience
      </div>

      <TextContainer className="mb-8">
        <div className="card-title flex flex-col sm:flex-row sm:items-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://about.facebook.com/"
            className="link -ml-2.5"
          >
            <Image
              src={MetaLogo}
              width={105}
              height={30}
              alt="Meta Platforms Inc."
            />
          </a>
          {Sep}
          <span className="font-medium -mt-1.5 sm:ml-2">
            Front End Engineer
          </span>{" "}
        </div>
        <div className="card-subtitle">
          February 2023 - Present | <i>New York, US</i>
        </div>
      </TextContainer>

      <TextContainer className="mb-8">
        <div className="card-title flex flex-col sm:flex-row sm:items-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://about.facebook.com/"
            className="link -ml-2.5"
          >
            <Image
              src={MetaLogo}
              width={105}
              height={30}
              alt="Meta Platforms Inc."
            />
          </a>
          {Sep}
          <span className="font-medium -mt-1.5 sm:ml-2">
            Front End Engineer Intern
          </span>{" "}
        </div>
        <div className="card-subtitle">
          May 2022 - August - 2022 | <i>New York, US</i>
        </div>
      </TextContainer>

      <TextContainer className="mb-8">
        <div className="card-title flex flex-col sm:flex-row sm:items-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://raxter.io"
            className="link mr-2"
          >
            <Image src={RaxLogo} alt="RAx Labs Inc." />
          </a>
          {Sep}
          <span className="font-medium -mt-1.5 sm:ml-2">
            Software Development Engineer
          </span>{" "}
        </div>
        <div className="card-subtitle">
          October 2020 - July 2021 | <i>Remote(India)</i>
        </div>
      </TextContainer>

      <TextContainer className="mb-8">
        <div className="card-title flex flex-col sm:flex-row sm:items-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://raxter.io"
            className="link mr-2"
          >
            <Image src={RaxLogo} alt="RAx Labs Inc." />
          </a>
          {Sep}
          <span className="font-medium -mt-1.5 sm:ml-2">
            Software Development Engineer Intern
          </span>{" "}
        </div>
        <div className="card-subtitle">
          August 2020 - October 2020 | <i>Remote(India)</i>
        </div>
      </TextContainer>

      <TextContainer className="mb-8">
        <div className="card-title flex flex-col sm:flex-row sm:items-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.isro.gov.in/about-isro/space-applications-centre-sac"
            className="link mr-2"
          >
            <Image
              src={ISROLogo}
              alt="Indian Space Research Organization"
              width={60}
              height={50}
            />
          </a>
          {Sep}
          <span className="font-medium sm:ml-2">Summer Research Intern</span>
        </div>
        <div className="card-subtitle">
          May 2019 - July 2019 | <i>Ahmedabad, India</i>
        </div>
      </TextContainer>
    </Container>
  );
};

export default Work;
