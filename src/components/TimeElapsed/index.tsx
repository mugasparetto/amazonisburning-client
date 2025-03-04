import React, { useEffect, useState } from 'react';
import moment from 'moment';

import { Container, TimeModule } from './styles';

const initialDate = new Date('2025-03-05T00:00:00.000Z');

const TimeElapsed: React.FC = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const duration = moment.duration(
        new Date().getTime() - initialDate.getTime()
      );
      setTimeElapsed({
        days: duration.days().toString(),
        hours: duration.hours().toString(),
        minutes: duration.minutes().toString(),
        seconds: duration.seconds().toString(),
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <TimeModule>
        <span>{timeElapsed.days}</span>
        <span>days</span>
      </TimeModule>
      <TimeModule>
        <span>{timeElapsed.hours}</span>
        <span>hours</span>
      </TimeModule>
      <TimeModule>
        <span>{timeElapsed.minutes}</span>
        <span>mins</span>
      </TimeModule>
      <TimeModule>
        <span>{timeElapsed.seconds}</span>
        <span>secs</span>
      </TimeModule>
    </Container>
  );
};

export default TimeElapsed;
