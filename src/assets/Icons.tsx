import React from 'react';
import arrowUp from './arrowUp.svg';
import arrowDown from './arrowDown.svg';
import arrowLeft from './arrowLeft.svg';
import decks from './decks.svg';
import ampup from './ampup.svg';
import challenges from './challenges.svg';
import teams from './teams.svg';
import stores from './stores.svg';
import help from './help.svg'

interface IconProps {
  color?: string;
}

export const ArrowUp: React.FC<IconProps> = ({ color }) => (
  <img src={arrowUp} alt="Arrow Up" style={{ fill: color }} />
);

export const ArrowDown: React.FC<IconProps> = ({ color }) => (
  <img src={arrowDown} alt="Arrow Down" style={{ fill: color }} />
);

export const ArrowLeft: React.FC<IconProps> = ({ color }) => (
  <img src={arrowLeft} alt="Arrow Left" style={{ fill: color }} />
);

export const Decks: React.FC<IconProps> = ({ color }) => (
  <img src={decks} alt="Decks" style={{ fill: color }} />
);

export const AmpUp: React.FC<IconProps> = ({ color }) => (
  <img src={ampup} alt="AmpUp" style={{ fill: color }} />
);

export const Challenges: React.FC<IconProps> = ({ color }) => (
  <img src={challenges} alt="Challenges" style={{ fill: color }} />
);

export const Teams: React.FC<IconProps> = ({ color }) => (
  <img src={teams} alt="Teams" style={{ fill: color }} />
);

export const Stores: React.FC<IconProps> = ({ color }) => (
  <img src={stores} alt="Stores" style={{ fill: color }} />
);

export const Help: React.FC<IconProps> = ({ color }) => (
  <img src={help} alt="Help" style={{ fill: color }} />
);
