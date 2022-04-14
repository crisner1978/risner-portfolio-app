import { TitleWrapper } from "./SectionTitleElements";
import { motion } from "framer-motion";

const SectionTitle = ({
  subheading,
  heading,
  Animation,
  hero = false,
  upper = false,
}) => {
  return (
    <TitleWrapper upper={upper} hero={hero}>
      <motion.p
        as={motion.p}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}>
        {subheading}
      </motion.p>
      <motion.h2
       
        as={motion.h2}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1, duration: 1 }}>
        {heading} {Animation}
      </motion.h2>
    </TitleWrapper>
  );
};

export default SectionTitle;
