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
        Satellites with short refreshment intervals are often stationary, as
        they are fixed over one longitude at the equator
        (https://doi.org/10.1016/B978-0-12-815826-5.00001-5). More information
        about the GOES-16 can be found here
        (https://www.star.nesdis.noaa.gov/goes/sector.php?sat=G16&sector=nsa).
      </p>
      <p>
        The satellite information is then gathered by INPE (Instituto Nacional
        de Pesquisas Espaciais, or National Institute for Spatial Research, from
        Brazil) and processed to generate spreadsheets with the location of the
        fires. An algorithm identifies if these locations are inside or outside
        the Amazon biome perimeter, and these are then shown as a counter,
        constantly being refreshed as satellite information is made available.
        If one location is repeatedly reported as a hotspot, the algorithm
        disregards it and doesn’t add it to the current count.
      </p>
      <p>
        There are many other satellites covering the same area - some are polar
        satellites (NOAA-18, NOAA-19, METOP-B, METOP-C, NASA TERRA, NASA AQUA,
        NPP-Suomi and NOAA-20) and another geostationary satellite called MSG-3,
        aside from the GOES-16. They differ in resolution, pixel size (some of
        them may capture fires as small as 1m x 30m, while the GOES-16’s pixels
        are 2km x 2km), and orbit.
      </p>
      <p>
        For comparison, the graph below shows data relative to a period of 24
        hours in the past, captured by all available satellites. The differences
        reflect the diversity of the satellites' characteristics, as the ones
        mentioned before. It is important to notice that there is no right or
        wrong, but there are many ways to interpret the same information.
      </p>
      <p>
        It is also important to notice that such satellite images do not
        differentiate between intentionally burnt areas (as what happens to
        clear pasture, prepare the soil for a new crop, deforestation, sugar
        cane harvest, vandalism, land disputes, and social protests) and
        spontaneous fires. Both are linked to global warming, and more
        information regarding this is displayed in this (linkar) section.
      </p>
      <h4>Does each number correspond to a wildfire?</h4>
      <p>
        Each focus counted may not represent only one fire; specially in
        satellites with bigger pixels, such as the GOES-16, there might be more
        than one fire in each pixel, but they are still only counted as one.
        Unfortunately, with our current technology, it is not possible to
        distinguish two different fires when they are present inside the same
        pixel, nor get precise data of what exactly is burning and how much has
        already burnt.
      </p>
    </>
  );
};

export default Methodology;
