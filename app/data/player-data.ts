export const PLAYER_MOCK_DATA = [
  {
    name: "Stephen Curry",
    movement: 4,
    turnoverPercent: 7,
    layupPercent: 95,
    midrangePercent: 75,
    threePercent: 45,
    halfcourtPercent: 25,
    stealPercent: 10,
    blockPercent: 10,
    contesting: {
      layup: -15,
      midrange: -5,
      three: -2,
    },
    // specialOne: (isOffense: boolean, movement: number) => {
    //   return isOffense && movement + 2;
    // },
    // specialTwo: (isUncontested: boolean, threePercent: number) => {
    //   return isUncontested && threePercent * 2;
    // },
  },
  {
    name: "Jamal Murray",
    movement: 4,
    turnoverPercent: 5,
    layupPercent: 90,
    midrangePercent: 70,
    threePercent: 40,
    halfcourtPercent: 20,
    stealPercent: 12,
    blockPercent: 20,
    contesting: {
      layup: -20,
      midrange: -7,
      three: -3,
    },
    // specialOne: (isOffense: boolean, movement: number) => {
    //   return isOffense && movement + 2;
    // },
    // specialTwo: (isUncontested: boolean, threePercent: number) => {
    //   return isUncontested && threePercent * 2;
    // },
  },
];
