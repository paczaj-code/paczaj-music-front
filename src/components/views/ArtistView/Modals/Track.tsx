import React from 'react';
import { TrackTypes } from '../../../../types/interfaces';

const Track: React.FC<TrackTypes> = ({
  id,
  name,
  position,
  length_minutes,
}) => {
  return (
    <div className="track">
      <p className="track__position">{position}</p>
      <p className="track__name">{name}</p>
      <p className="track__length">{length_minutes}</p>
    </div>
  );
};

export default Track;
