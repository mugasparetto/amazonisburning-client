import React, { useEffect, useState } from 'react';
import moment from 'moment';

import { Container, TimeBox } from './styles';

const initialDate = new Date('2023-11-19T08:00:00.000Z');

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
        days: duration.days().toString().padStart(2, '0'),
        hours: duration.hours().toString().padStart(2, '0'),
        minutes: duration.minutes().toString().padStart(2, '0'),
        seconds: duration.seconds().toString().padStart(2, '0'),
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container>
      <TimeBox>
        <span>{timeElapsed.days}</span>
        <span>days</span>
      </TimeBox>
      <TimeBox>
        <span>{timeElapsed.hours}</span>
        <span>hours</span>
      </TimeBox>
      <TimeBox>
        <span>{timeElapsed.minutes}</span>
        <span>mins</span>
      </TimeBox>
      <TimeBox>
        <span>{timeElapsed.seconds}</span>
        <span>secs</span>
      </TimeBox>
    </Container>
  );
};

export default TimeElapsed;
