import { useEffect, useState } from "react";

import {
  HOOPS,
  PAINT,
  MIDRANGE,
  HALFCOURT,
  COURT_TILE_TYPES,
  OFFENSE_ONE_STARTER_TILE,
  OFFENSE_TWO_STARTER_TILE,
} from "../data/court-data";

import { TEAM_NUMBER } from "../data/game-data";

export const isHoop = (id: string) => HOOPS.includes(id);
export const isPaint = (id: string) => PAINT.includes(id);
export const isMidrange = (id: string) => MIDRANGE.includes(id);
export const isHalfCourt = (id: string) => HALFCOURT.includes(id);
export const isOffenseOneStarter = (id: string) =>
  OFFENSE_ONE_STARTER_TILE.includes(id);
export const isOffenseTwoStarter = (id: string) =>
  OFFENSE_TWO_STARTER_TILE.includes(id);

export const useCourtTile = (id: string) => {
  let type = "";
  let offensiveDefault = false;

  // assigning tile type
  if (isHoop(id)) {
    type = id === "E1" ? COURT_TILE_TYPES.HOOP_ONE : COURT_TILE_TYPES.HOOP_TWO;
  } else if (isPaint(id)) {
    type = COURT_TILE_TYPES.PAINT;
  } else if (isMidrange(id)) {
    type = COURT_TILE_TYPES.MIDRANGE;
  } else if (isHalfCourt(id)) {
    type = COURT_TILE_TYPES.HALFCOURT;
  } else {
    type = COURT_TILE_TYPES.THREE;
  }

  // assigning offense
  if (isOffenseOneStarter(id)) {
    offensiveDefault = true;
  }

  return { type, offensiveDefault };
};