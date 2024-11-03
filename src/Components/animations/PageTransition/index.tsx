"use client";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";


const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const {pathname} = useLocation();
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      //   exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
