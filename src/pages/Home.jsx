import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/hero/Hero";

const Home = () => {
  return (
    <motion.div style={{ overflowX: "hidden"}}
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100vw"}}
      transition={{duration: 0.5}}>
      <Hero />
    </motion.div>
  );
};

export default Home;
