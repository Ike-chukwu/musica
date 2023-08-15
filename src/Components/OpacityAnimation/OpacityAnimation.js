import React from "react";
import { motion } from "framer-motion";

const OpacityAnimation = ({ children }) => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{width:"100%"}}
    >
      {children}
    </motion.div>
  );
};

export default OpacityAnimation;
