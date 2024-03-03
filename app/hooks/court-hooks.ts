import {
  HOOPS,
  PAINT,
  MIDRANGE,
  HALFCOURT,
  COURT_TILE_TYPES,
} from "../data/court-data";

export const isHoop = (id: string) => HOOPS.includes(id);
export const isPaint = (id: string) => PAINT.includes(id);
export const isMidrange = (id: string) => MIDRANGE.includes(id);
export const isHalfCourt = (id: string) => HALFCOURT.includes(id);

export const useGetTileType = (id: string) => {
  let type = "";

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

  return { type };
};