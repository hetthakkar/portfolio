"use client";

export default function ShareSketch() {
  return (
    <button
      className="default-button"
      onClick={() => {
        // Share current url
        navigator.share({
          url: window.location.href,
        });
      }}
    >
      Share current version
    </button>
  );
}
