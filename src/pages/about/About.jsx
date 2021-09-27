import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { AboutWrapper, AboutDesc, ButtonWrapper } from "./AboutElements";
import { SocialWrapper } from "../../components/hero/HeroElements";
import ProfileImg from "../../assets/images/chrisImg1.jpg";
import { motion } from "framer-motion";
import useViewport from "../../components/useViewport";
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
    <motion.div
      style={{ overflowX: "hidden" }}
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100vw" }}
      transition={{ duration: 0.5 }}>
      <AboutWrapper>
        <div className="container">
          <div className="left">
            <SectionTitle
              className="section-title"
              subheading="Hi, my name is..."
              heading="Chris"
              upper
            />
            <AboutDesc
              as={motion.p}
              variants={showRight}
              initial="hidden"
              animate="visible">
              I am addicted to coding. I'm a junior web developer, with a
              passion for learning more. I enjoy problem solving and writing
              clean efficient code. I aspire to create simple, intuitive and
              elegant designs.
            </AboutDesc>
            <ButtonWrapper>
              <ButtonBig name="My Toolbox" primary onClick={handleShowModal} />
            </ButtonWrapper>
            <SocialWrapper>
              {width <= breakpoint && <SocialButtons />}
            </SocialWrapper>
          </div>
          <div className="right">
            <motion.img
              initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1, duration: 1 }}
              style={{ width: "270px" }}
              src={ProfileImg}
              alt="profile-img"
            />
          </div>
        </div>
      </AboutWrapper>
    </motion.div>
  );
};

export default About;
