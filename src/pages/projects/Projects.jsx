import { motion } from "framer-motion";
import React from "react";
import data from "../../assets/data/data";
import TextAnimation from "../../components/animations/TextAnimation";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import {
  Card,
  CardContent,
  Container,
  Menu,
  MenuLink,
  ProjectWrapper,
  Section
} from "./ProjectElements";

const magic = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1, duration: 1 } },
};

const Projects = () => {
  return (
    <Section>
      <SectionTitle
        subheading="some of my recent work"
        Animation={<TextAnimation text="Projects" />}
        upper
      />
      <Container>
        <ProjectWrapper>
          {data.map((data) => {
            return (
              <Card
                as={motion.div}
                initial={{ opacity: 0, x: "-100vw" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "-10px 10px 10px #00040d",
                  transition: { duration: 0.3 },
                }}
                key={data.id}>
                <motion.img
                  variants={magic}
                  initial="hidden"
                  animate="visible"
                  src={data.image}
                  alt={data.title}
                />
                <CardContent
                  as={motion.div}
                  variants={magic}
                  initial="hidden"
                  animate="visible">
                  <h4>{data.title}</h4>
                  <p>{data.content}</p>
                  <Menu>
                    <MenuLink href={data.liveUrl} target="_blank">
                      View Live
                    </MenuLink>
                    <MenuLink href={data.codeUrl} target="_blank">
                      View Code
                    </MenuLink>
                  </Menu>
                </CardContent>
              </Card>
            );
          })}
        </ProjectWrapper>
      </Container>
    </Section>
  );
};

export default Projects;
