import React from 'react';
import { ScrollContainer } from '../styles';

const Solutions: React.FC = () => {
  return (
    <>
      <h2>Possible solutions</h2>
      <ScrollContainer>
        <p>
          There are{' '}
          <a
            href="https://ipam.org.br/wp-content/uploads/2023/03/Amazoniar-Solucoes-para-o-desmatamento-na-Amazonia-VF.pdf"
            target="_blank"
            rel="noreferrer"
          >
            guidelines
          </a>{' '}
          with four suggestions on how to fight the Amazon’s deforestation.
          Here, we present a sneak peek on the topics:
        </p>
        <ol>
          <li>
            <strong>Designation of public forests:</strong> undesignated areas
            face high deforestation, often illegal, due to weak oversight;
            proper designation (conservation units, indigenous lands, etc.)
            would ensure sustainable use.
          </li>
          <li>
            <strong>Conservation incentives for private areas:</strong> measures
            such as economic incentives and tax redistribution could be taken to
            guarantee that some private areas are conserved.
          </li>
          <li>
            <strong>Increase agricultural productivity:</strong> the lack of
            productivity in livestock makes it seem that farmers need more land
            to achieve their production goals, which could drive more
            deforestation. Techniques such as pasture rotation,
            crop-livestock-forest integration, and avoiding monoculture can
            reduce this pressure.
          </li>
          <li>
            <strong>Strengthening environmental control:</strong> stronger laws,
            incentives, and enforcement—previously proven effective—are needed
            but have been weakened by budget cuts.
          </li>
        </ol>
      </ScrollContainer>
    </>
  );
};

export default Solutions;
