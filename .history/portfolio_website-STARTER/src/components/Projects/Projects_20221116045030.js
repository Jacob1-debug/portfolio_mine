import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
<Section nonpadding id="projects">
  <SectionDivider/>
  <SectionTitle main>
    Projects
  </SectionTitle>
  <GridContainer>
    {projects.map((id, image, title, dexscription, tags, source, visit) =>(
      <BlogCard key={id}>
        <Img src='image'/>
        <TitleContent>
          <HeaderThree title>[it('should ', () => {
            
          })
          ]
            <Hr/>
          </HeaderThree>
        </TitleContent>

      </BlogCard>
        ))}

  </GridContainer>

</Section>
);

export default Projects;