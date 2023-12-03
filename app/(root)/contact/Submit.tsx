"use client";

import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

export default function Submit() {
  const { pending, data } = useFormStatus();
  const [showSubmitted, setShowSubmitted] = useState(false);

  useEffect(() => {
    if (pending) {
      setShowSubmitted(true);
    }
  }, [pending, data]);

  return (
    <>
      {showSubmitted && (
        <p className="text-gray-300">
          Thanks for reaching out! I&apos;ll get back to you soon.
        </p>
      )}
      <button
        type="submit"
        aria-disabled={pending}
        className="bg-grayLight hover:bg-grayLighter  text-gray-200 font-medium py-2 px-4 rounded-lg transition transition-all"
      >
        {pending ? "Sending..." : "Send"}
      </button>
    </>
  );
}
