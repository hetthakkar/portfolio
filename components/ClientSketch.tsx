"use client";

import { SketchProps } from "react-p5";
import { Spinner } from "./Spinner";
import dynamic from "next/dynamic";

type Props = SketchProps;

const ClientSketch = dynamic(() => import("react-p5"), {
  ssr: false,
  suspense: true,
  loading: () => (
    <div className="h-screen w-full grid place-items-center">{<Spinner />}</div>
  ),
});

export default function ClientSketchWrapper({ ...props }: Props) {
  return <ClientSketch {...props} />;
}
