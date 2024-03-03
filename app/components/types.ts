export interface CourtProps {
  tiles: CourtTileProps[];
}

export interface CourtTileProps {
  id: string;
  player: PlayerProps;
  scoringType: string;
}

export interface PlayerProps {
  name: string;
  turnoverPercent: number;
  layupPercent: number;
  midrangePercent: number;
  threePercent: number;
  stealPercent: number;
  blockPercent: number;
  contesting: {
    layup: number;
    midrange: number;
    three: number;
  };
  // specialOne: () => {};
  // specialTwo: () => {};
}

export interface UserSectionProps {
  teamName: string;
  roster: PlayerProps[];
  energy: number;
  handleGainEnergy: (user: string) => null | undefined;
  handleSpendEnergy: (user: string, numEnergy: number) => null | undefined;
}
