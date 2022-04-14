import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import TextAnimation from "../../components/animations/TextAnimation";
import ButtonBig from "../../components/button/ButtonBig";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import SocialButtons from "../../components/social/SocialButtons";
import useViewport from "../../components/useViewport";
import {
  ButtonWrapper, Content, Info, Section, SocialWrapper, TitleContainer
} from "./HeroElements";

//framer motion variant
const showLeft = {
  hidden: { opacity: 0, x: "100vw" },
  visible: { opacity: 1, x: 0, transition: { delay: 0.5, duration: 0.5 } },
};

const Hero = () => {
  //button link to projects page
  let history = useHistory();
  const handleClick = () => {
    history.push("/projects");
  };

  //breakpoint for SocialButtons drop from Nav to Page
  const { width } = useViewport();
  const breakpoint = 768;

  return (
    <>
      <Section id="home">
        <Content>
          <TitleContainer>
            <SectionTitle
              hero
              subheading="Developing DEV..."
              heading="Chris"
              Animation={<TextAnimation text="Risner" />}
            />
          </TitleContainer>
          <Info as={motion.div} variants={showLeft} initial="hidden" animate="visible">
            <p className="pro">
              Full Stack <span>React Developer</span> I eat, sleep and breathe React
            </p>
          </Info>
          {/* <ButtonWrapper>
            <ButtonBig name="View Projects" BS  onClick={handleClick} primary smooth={true} duration={500} spy={true} exact="true" offset={-70} />
          </ButtonWrapper> */}
          <SocialWrapper>{width <= breakpoint && <SocialButtons />}</SocialWrapper>
        </Content>
      </Section>
    </>
  );
};

export default Hero;
