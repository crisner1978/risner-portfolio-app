import { MdPlace } from "react-icons/md";
import { InfoWrapper } from "./ContactInfoElements";
import { motion } from "framer-motion";

//framer motion slide on page
const infoLeft = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.5 } },
};
//framer motion appear on page
const magic = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1, duration: 1 } },
};

const ContactInfo = ({ icon = <MdPlace />, text = "this is the info" }) => {
  return (
    <motion.div variants={infoLeft} initial="hidden" animate="visible">
      <InfoWrapper>
        <motion.div variants={magic} className="icon">
          {icon}
        </motion.div>
        <motion.div variants={magic} className="info">
          {text}
        </motion.div>
      </InfoWrapper>
    </motion.div>
  );
};

export default ContactInfo;
