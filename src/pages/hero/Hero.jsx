import {
  Section,
  Content,
  Left,
  TitleContainer,
  Info,
  SocialWrapper,
  ButtonWrapper,
} from "./HeroElements";
import { motion } from "framer-motion";
import SocialButtons from "../../components/social/SocialButtons";
import useViewport from "../../components/useViewport";
import ButtonBig from "../../components/button/ButtonBig";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { useHistory } from "react-router-dom";
import TextAnimation from "../../components/animations/TextAnimation";

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
    <Section>
      <Content>
        <Left>
          <TitleContainer>
            <SectionTitle
              subheading="Developing DEV..."
              heading="Chris"
              Animation={<TextAnimation text="Risner" />}
            />
          </TitleContainer>
          <Info
            as={motion.div}
            variants={showLeft}
            initial="hidden"
            animate="visible">
            <span className="pro">Front End focused Full Stack <br/> JavaScript Developer</span>
            <br />
            with a Passion for <br/>
            - React JS/Next JS, MongoDB and TailwindCSS.
          </Info>
          <ButtonWrapper>
            <ButtonBig name="View Projects" onClick={handleClick} primary />
          </ButtonWrapper>
          <SocialWrapper>
            {width <= breakpoint && <SocialButtons />}
          </SocialWrapper>
        </Left>
      </Content>
    </Section>
  );
};

export default Hero;
