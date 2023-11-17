import React from 'react';

import {} from './styles';
import FiresDiagram from '../../../../../assets/fires-diagram.svg';

const Fires: React.FC = () => {
  return (
    <>
      <h2>Why so many fires</h2>
      <p>
        Fires are a constant threat to the Amazon, and they are amplified by
        positive feedback loops in which the damage caused by deforestation and
        global warming are involved. The El Niño phenomenon, intensified by
        climate change, causes severe droughts and depletes moisture from the
        deep soil. When the trees then shed their leaves, the sunlight heats and
        dries the forest interior. These leaves also form a layer of fuel on the
        forest floor, thus undermining the forest's firebreaking function and
        increasing the forest’s flammability.
      </p>
      <p>
        At the same time, land use (cattle pasture, crop fields, etc) reduces
        evapotranspiration from vegetation, resulting in even lesser amounts of
        rainfall. The smoke emitted when the land is on fire or being prepared
        by the slash-and-burn agricultural method also acts as a rain inhibitor;
        it saturates the atmosphere with condensation nuclei, so the water
        droplets do not get heavy enough to fall to the earth, intensifying
        droughts. The fires become easily spreadable, destroying more of the
        forest’s territory and feeding back this loop, as one can notice on the
        diagram below.
      </p>
      <img
        style={{ width: '100%', margin: '1.5rem 0' }}
        src={FiresDiagram}
        alt="Diagram explaining the feedback loop happening in the Amazon rainforest"
      />
      <p style={{ marginTop: '1rem' }}>
        The fires in the Amazon pose a significant risk to the forest itself and
        the world. It is estimated that 15% of global terrestrial photosynthesis
        occurs in the Amazon Rainforest (Field et al., 1998), and the biomass
        found there contains 100 billion tons of carbon (Malhi et al., 2008),
        which is equivalent to a decade's worth of carbon emissions (IPAM
        Amazônia, 2021). Therefore, protecting the forest is crucial in
        preventing climate change from worsening. Until today, the forest has
        been acting as a carbon sink, removing carbon from the atmosphere.
        However, the fires and deforestation can transform it into a carbon
        emitter - an irreversible state (Gatti et al., 2021).
      </p>
    </>
  );
};

export default Fires;
