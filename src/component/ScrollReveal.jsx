import React, { useEffect, useRef } from "react";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useAnimation,
  useInView,
} from "framer-motion";

export const ScrollReveal = ({ children, delay = 0, ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay },
      });
    }
  }, [isInView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      {...props}
    >
      {children}
    </motion.div>
  );
};
