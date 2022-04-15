import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { AboutWrapper, AboutDesc, ButtonWrapper } from "./AboutElements";
import { SocialWrapper } from "../hero/HeroElements";
import ProfileImg from "../../lib/assets/images/profilePhoto.jpg";
import { motion } from "framer-motion";
import useViewport from "../../lib/hooks/useViewport";
import ButtonBig from "../../components/button/ButtonBig";
import SocialButtons from "../../components/social/SocialButtons";

//framer-motion variant
const showRight = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.5 } },
};

const About = ({ handleShowModal }) => {
  //breakpoint for SocialButtons drop from Nav to Page
  const { width } = useViewport();
  const breakpoint = 768;

  return (
    <AboutWrapper id="about">
      <div className="container">
        <div className="left">
          <SectionTitle className="section-title" subheading="About Me" heading="" upper />
          <AboutDesc as={motion.p} variants={showRight} initial="hidden" animate="visible">
            "Hi there! I am Chris! I've been coding for over year. As a Full Stack developer I've
            worked with Chainbytes LLC to help build & scale their companies. Along my journey I
            realised my passion existed in building software solutions and problem solving."
          </AboutDesc>
        </div>
        <motion.div
          as={motion.div}
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="right"
        >
          <motion.img
            initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1, duration: 1 }}
            style={{ width: "120px", height: "120px", borderRadius: "50%" }}
            src={ProfileImg}
            alt="profile-img"
          />
        </motion.div>
      </div>
      <ButtonWrapper>
        <ButtonBig name="My Toolbox" primary onClick={handleShowModal} />
      </ButtonWrapper>
      <SocialWrapper>{width <= breakpoint && <SocialButtons />}</SocialWrapper>
    </AboutWrapper>
  );
};

export default About;
