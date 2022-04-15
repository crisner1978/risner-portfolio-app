import React from "react";
import { posters } from "../../lib/assets/posters";
import TextAnimation from "../../components/animations/TextAnimation";
import Poster from "../../components/poster/Poster";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { Container, ProjectWrapper, Section } from "./ProjectElements";

const Projects = () => {
  return (
    <Section id="projects">
      <SectionTitle
        subheading="some of my recent work"
        Animation={<TextAnimation text="Projects" />}
        upper
      />
      <Container>
        <ProjectWrapper>
          {posters.map(({ id, image, title, content, liveUrl, codeUrl }) => {
            return (
              <Poster
                key={id}
                image={image}
                title={title}
                content={content}
                liveUrl={liveUrl}
                codeUrl={codeUrl}
              />
            );
          })}
        </ProjectWrapper>
      </Container>
    </Section>
  );
};

export default Projects;
