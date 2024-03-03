"use client"

import React from "react";
import "./court-tile.scss";
import { useGetTileType } from "@/app/hooks/court-hooks";

export const CourtTile = ({ id }) => {
  const { type } = useGetTileType(id);
  return <div className={`court-tile-main-container ${type}`}>{id}</div>;
};

export default CourtTile;