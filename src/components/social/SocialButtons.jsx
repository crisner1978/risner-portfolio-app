import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaFreeCodeCamp,
} from "react-icons/fa";
import { SocialMenu, SocialIcons } from "./SocialElements";

const SocialButtons = () => {
  const showRight = {
    hidden: { opacity: 0, x: "250px", y: "-1200px" },
    visible: { opacity: 1, x: 0, y: 0 },
  };
  return (
    <SocialMenu
      as={motion.nav}
      variants={showRight}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.3 }}>
      <SocialIcons
        href="https://www.linkedin.com/in/chris-risner-828b23b5/"
        target="_blank">
        <FaLinkedinIn />
      </SocialIcons>
      <SocialIcons href="https://github.com/crisner1978" target="_blank">
        <FaGithub />
      </SocialIcons>
      <SocialIcons
        href="https://www.freecodecamp.org/fccd25d458e-4b82-41a4-9247-42c2a91e2b3b"
        target="_blank">
        <FaFreeCodeCamp />
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/crisner1978/" target="_blank">
        <FaFacebookF />
      </SocialIcons>
    </SocialMenu>
  );
};

export default SocialButtons;
