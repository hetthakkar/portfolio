import { TextContainer } from "@/components/TextContainer";
import ContactForm from "./ContactForm";

export const metadata = {
  title: `Contact | Het Thakkar`,
  description: `Contact Het Thakkar using the contact form`,
};

export default async function Contact() {
  return (
    <div>
      <div className="content-box text-white font-bold text-4xl mb-10 mt-8">
        Contact
      </div>
      <TextContainer>
        <div>
          <ContactForm />
        </div>
      </TextContainer>
    </div>
  );
}
