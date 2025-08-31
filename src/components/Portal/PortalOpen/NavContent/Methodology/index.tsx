import React, { useCallback } from 'react';
import { Link } from './styles';
import { ScrollContainer } from '../styles';

interface MethodologyProps {
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Methodology: React.FC<MethodologyProps> = ({ setActiveTab }) => {
  const handleClick = useCallback(() => {
    setActiveTab('fires');
  }, [setActiveTab]);

  return (
    <>
      <h2>Methodology</h2>
      <ScrollContainer>
        <p>
          Among the many other satellites covering the same area, the GOES-16
          satellite is used as a reference because it provides near-real-time
          fire data every ten minutes on a steady basis. More information about
          the GOES-16 can be{' '}
          <a
            href="https://www.star.nesdis.noaa.gov/goes/sector.php?sat=G16&sector=nsa"
            target="_blank"
            rel="noreferrer"
          >
            found here
          </a>
          .
        </p>{' '}
        <p>
          INPE (Brazil’s National Institute for Space Research) processes this
          data into spreadsheets with the fire locations, and an algorithm is
          then applied to determine whether they are inside or outside the
          Amazon biome. The system cannot distinguish intentional burns from
          natural fires, nor separate multiple fires within a single pixel or
          measure the exact extent of burning.
        </p>
      </ScrollContainer>
    </>
  );
};

export default Methodology;
