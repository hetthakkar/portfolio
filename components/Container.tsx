import { Metadata } from "next";
interface ContainerProps {
  children: React.ReactNode;
  head?: {
    title?: string;
    description?: string;
    canonical?: string;
  };
}

export const metdata: Metadata = {
  title: "Het Thakkar",
  metadataBase: new URL("https://hetthakkar.me"),
  description: "Het Thakkar's personal website",
  openGraph: { images: [{ url: "https://hetthakkar.me/profile.png" }] },
  robots: "index, follow",
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <main>{children}</main>;
};
