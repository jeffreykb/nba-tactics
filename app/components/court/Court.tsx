"use client"

import React, { useState, useEffect } from "react";
import "./court.scss";
import { CourtProps } from "../types";
import CourtTile from "./court-tile/CourtTile";

export const Court = ({ tiles }: CourtProps) => {
  console.log(tiles)
  return <div className="court-main-container">{
    Object.keys(tiles).map((rowKey: any) => {
      const row: any = tiles[rowKey];
      return (
        <div key={rowKey} className="court-row">
          {Object.keys(row).map((tileKey) => {
            const tile = row[tileKey];
            return <CourtTile key={tile.id} id={tile.id} />
          })}
        </div>
      );
    })
  }</div>
};

export default Court;