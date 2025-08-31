import React from 'react';

import { ScrollContainer } from '../styles';
import FiresDiagram from '../../../../../assets/fires-diagram.svg';

const Fires: React.FC = () => {
  return (
    <>
      <h2>Why so many fires</h2>
      <ScrollContainer>
        <p>
          Amazon fires are worsened by feedback loops involving deforestation,
          land use, and climate change. El Niño-driven droughts dry the forest,
          while leaf litter increases flammability. Reduced vegetation lowers
          rainfall, and smoke from slash-and-burn agriculture further suppresses
          rain. These factors make fires spread more easily, perpetuating a
          cycle of forest loss and intensified drought.
        </p>
        <img
          style={{
            width: '100%',
            margin: '2rem auto',
            display: 'block',
            maxWidth: '40rem',
            textAlign: 'center',
          }}
          src={FiresDiagram}
          alt="Diagram explaining the feedback loop happening in the Amazon rainforest"
        />
      </ScrollContainer>
    </>
  );
};

export default Fires;
