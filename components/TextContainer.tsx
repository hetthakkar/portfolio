"use client";

import cn from "classnames";
import { motion, MotionProps } from "framer-motion";

interface TextContainerProps extends MotionProps {
  className?: string;
  children: React.ReactNode;
}

const defaultProps: MotionProps = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" },
};

const TextContainer: React.FC<TextContainerProps> = ({
  children,
  className,
}) => {
  return (
    <motion.div
      {...defaultProps}
      className={cn(
        "bg-grayBg rounded-lg w-full max-w-2xl mx-auto p-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export { TextContainer };
