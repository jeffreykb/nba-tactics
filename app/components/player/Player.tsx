import React, { useState, useEffect } from "react";
import { PlayerProps } from "../types";

export const Player = ({ name }: PlayerProps) => {
  return (
    <div className="player-main-container">
      <div className="player-name">{name}</div>
    </div>
  );
};