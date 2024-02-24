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
            <strong>Designation of public forests:</strong> the non-designated
            public forests are the ones mainly affected by deforestation, as
            they are awaiting a status of either ‘land to be conserved’ or ‘land
            to be sustainably used’, encouraging illegal possession of the land
            and its uncontrolled deforestation. There is a lack of oversight in
            these regions and designating the public forests as a conservational
            unit, indigenous land, or any other category would ensure their
            appropriate usage.
          </li>
          <li>
            <strong>Conservation incentives for private areas:</strong> measures
            such as economic incentives and tax redistribution could be taken to
            guarantee that some private areas are conserved.
          </li>
          <li>
            <strong>Increase agricultural productivity:</strong> the lack of
            productivity in livestock generates a feeling that the farmers need
            more land to accomplish production goals, creating the need for more
            deforestation when this could be addressed by simple techniques like
            pasture rotation and crop-livestock-forest integration. Avoiding
            monoculture would also be interesting, as this practice decreases
            biodiversity.
          </li>
          <li>
            <strong>Strengthening environmental control:</strong> Creating laws
            and incentives to protect the forest and supervising their
            implementation could potentially help the Amazon get back on track.
            This has been done before and proved to be economically efficient
            and ecologically adequate, but subsequent budget cuts undermined
            their efficacy.
          </li>
        </ol>
      </ScrollContainer>
    </>
  );
};

export default Solutions;
