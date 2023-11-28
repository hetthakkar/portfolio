import { TextContainer } from "@/components/TextContainer";

export const metadata = {
  title: "Education | Het Thakkar",
  description:
    "List of educational institutions attended and degrees earned by Het Thakkar",
};

export default function Education() {
  return (
    <>
      <div className="content-box text-white font-bold text-4xl mb-10 mt-8">
        Education
      </div>
      <TextContainer>
        <div>
          <div className="card-title">
            Masters in Computer Science at{" "}
            <a
              className="font-semibold italic link"
              target="_blank"
              rel="noreferrer"
              href="https://ncsu.edu"
            >
              North Carolina State University
            </a>
          </div>
          <div className="card-subtitle">August 2021 - December 2022</div>
        </div>
      </TextContainer>
      <TextContainer className="mt-8 mb-8">
        <div>
          <div className="card-title">
            Bachelor of Technology in Information and Communication Technology
            at{" "}
            <a
              className="font-semibold italic link"
              target="_blank"
              rel="noreferrer"
              href="https://daiict.ac.in"
            >
              DA-IICT
            </a>
          </div>
          <div className="card-subtitle">August 2016 - May 2020</div>
        </div>
      </TextContainer>
    </>
  );
}
