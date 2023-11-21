import React from 'react';
import {} from './styles';

const Methodology: React.FC = () => {
  return (
    <>
      <h2>Methodology</h2>
      <p>
        The GOES-16 satellite has been chosen for this application as the
        reference satellite because it generates data on a steady basis, with
        ten-minute intervals - meaning that the information is near real-time.
        More information about the GOES-16 can be{' '}
        <a
          href="https://www.star.nesdis.noaa.gov/goes/sector.php?sat=G16&sector=nsa"
          target="_blank"
          rel="noreferrer"
        >
          found here
        </a>
        .
      </p>
      <p>
        The satellite information is gathered by INPE (Instituto Nacional de
        Pesquisas Espaciais, or National Institute for Spatial Research, from
        Brazil) and processed to generate spreadsheets with the location of the
        fires. An algorithm identifies if these locations are inside or outside
        the Amazon biome perimeter, and these are then shown as a counter,
        constantly being refreshed as satellite information is made available.
        If one location is repeatedly reported as a hotspot, the algorithm
        disregards it and doesn’t add it to the current count.
      </p>
      <p>
        There are many other satellites covering the same area aside from the
        GOES-16. They differ in resolution, pixel size (some of them may capture
        fires as small as 1m x 30m, while the GOES-16’s pixels are 2km x 2km),
        and orbit.
      </p>
      <p>
        It is also important to notice that such satellite images do not
        differentiate between intentionally burnt areas and spontaneous fires.
        Both are linked to global warming, and more information regarding this
        is displayed in the <em>WHY SO MANY FIRES</em> section.
      </p>
      <p>
        Each focus counted may not represent only one fire and unfortunately,
        with our current technology, it is not possible to distinguish two
        different fires when they are present inside the same pixel, nor get
        precise data of what exactly is burning and how much has already burnt.
      </p>
    </>
  );
};

export default Methodology;
