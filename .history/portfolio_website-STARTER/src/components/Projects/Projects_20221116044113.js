import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
<Section nonpadding id="projects">
  <SectionDivider/>
  <SectionTitle>
    Projects
  </SectionTitle>
  <GridContainer>
    {projects.map(project)}

  </GridContainer>

</Section>
);

export default Projects;