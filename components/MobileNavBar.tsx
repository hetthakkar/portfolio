"use client";

import { useEffect, useState } from "react";
import { MenuIcon } from "./MenuIcon";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import cn from "classnames";
import { usePathname } from "next/navigation";

export const MobileNavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const page = document.getElementById("current-page");
      if (page) {
        page.classList.add("hidden");
      }
    } else {
      document.body.style.overflow = "unset";
      const page = document.getElementById("current-page");
      if (page) {
        page.classList.remove("hidden");
      }
    }
  }, [isOpen]);

  return (
    <div className="visible md:hidden">
      <MenuIcon
        className="fill-current text-gray-300 transition-all"
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className=" absolute flex-col items-center justify-start mt-4 bg-grayBg rounded-2xl p-8"
          style={{
            left: 0,
            top: 80,
            width: "100%",
            zIndex: 1000,
          }}
        >
          <div className="flex flex-col">
            <MobileNavItem href="/" text="Home" />
            <MobileNavItem href="/projects" text="Projects" />
            <MobileNavItem href="/work" text="Work Experience" />
            <MobileNavItem href="/education" text="Education" />
            <MobileNavItem href="/misc" text="Misc" />
            <MobileNavItem href="/contact" text="Contact" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

const MobileNavItem: React.FC<{
  href: string;
  text: string;
  onClick?: () => void;
}> = ({ href, text, onClick }) => {
  "use client";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn("mobile-nav-link", "font-semibold")}
    >
      {text}
    </Link>
  );
};
