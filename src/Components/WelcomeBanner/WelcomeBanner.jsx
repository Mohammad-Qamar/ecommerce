import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Welcome.css";

const WelcomeBanner = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.h2
          className="welcome-heading"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Welcome to ClothKings 👑
        </motion.h2>
      )}
    </AnimatePresence>
  );
};

export default WelcomeBanner;
