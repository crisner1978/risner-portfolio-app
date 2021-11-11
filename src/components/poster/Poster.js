import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Menu, MenuLink } from "./PosterElements";

const magic = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1, duration: 1 } },
};

const Poster = ({ id, image, title, content, liveUrl, codeUrl }) => {
  return (
    <Card
      as={motion.div}
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "-10px 10px 10px #00040d",
        transition: "linear",
      }}>
      <motion.img
        variants={magic}
        initial="hidden"
        animate="visible"
        src={image}
        alt={title}
      />
      <CardContent
        as={motion.div}
        variants={magic}
        initial="hidden"
        animate="visible">
        <h4>{title}</h4>
        <p>{content}</p>
        <Menu>
          <MenuLink href={liveUrl} target="_blank">
            View Live
          </MenuLink>
          <MenuLink href={codeUrl} target="_blank">
            View Code
          </MenuLink>
        </Menu>
      </CardContent>
    </Card>
  );
};

export default Poster;
