"use client"

import React, { useEffect, useState } from "react";
import "./game.scss";
import Court from "../court/Court";
import { PLAYER_MOCK_DATA } from "@/app/data/player-data";
import { useGenerateTiles, useGenerateEnergy } from "@/app/hooks/game-hooks";
import UserSection from "../user-section/UserSection";

export const Game = () => {
  const { tiles } = useGenerateTiles();
  const {
    userOneEnergy,
    userTwoEnergy,
    handleGainEnergy,
    handleSpendEnergy
  } = useGenerateEnergy();

  return (
    <div className="game-main-container">
      <UserSection
        teamName={"Warriors"}
        roster={[PLAYER_MOCK_DATA[0]]}
        energy={userOneEnergy}
        handleGainEnergy={handleGainEnergy}
        handleSpendEnergy={handleSpendEnergy}
      />
      <Court tiles={tiles} />
      <UserSection
        teamName={"Nuggets"}
        roster={[PLAYER_MOCK_DATA[1]]}
        energy={userTwoEnergy}
        handleGainEnergy={handleGainEnergy}
        handleSpendEnergy={handleSpendEnergy}
      />
    </div>
  );
};

export default Game;