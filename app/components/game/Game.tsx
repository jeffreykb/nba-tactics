"use client"

import React, { useEffect, useState } from "react";
import "./game.scss";

import { useGameState } from "@/app/state/game-state";
import { useGenerateTiles, useGenerateEnergy } from "@/app/hooks/game-hooks";
import { useAnnouncer } from "@/app/hooks/announcer-hooks";

import { PHASES } from "@/app/data/game-data";

import RosterSetup from "../roster-setup/RosterSetup";
import Court from "../court/Court";
import UserSection from "../user-section/UserSection";
import Announcer from "../announcer/Announcer";

export const Game = () => {
  const { tiles, handleUpdateTile } = useGenerateTiles();
  const { phase, setPhase, gameRosters, handleSetGameRosters } = useGameState();
  const {
    userOneEnergy,
    userTwoEnergy,
    handleGainEnergy,
    handleSpendEnergy
  } = useGenerateEnergy();
  const { allAnnouncements, next, handleChangeAnnouncement } = useAnnouncer();

  return (
    <div className="game-main-container">
      <div className="nba-tactics-header">NBA Tactics</div>
      {phase === PHASES.INITIAL && (
        <div className="body-container">
          <button
            className="initial-cta"
            onClick={() => setPhase(PHASES.ROSTER_SETUP)}
          >
            PLAY
          </button>
        </div>
      )}
      {phase === PHASES.ROSTER_SETUP && (
        <div className="body-container">
          <RosterSetup
            nextPhase={() => setPhase(PHASES.GAME_START)}
            handleSetGameRosters={handleSetGameRosters}
          />
        </div>
      )}
      {phase === PHASES.GAME_START && (
        <div className="game-body">
          <UserSection
            teamName={gameRosters?.teamOne?.name}
            roster={gameRosters?.teamOne?.roster}
            energy={userOneEnergy}
          />
          <Court tiles={tiles} handleUpdateTiles={handleUpdateTile} />
          <UserSection
            teamName={gameRosters?.teamTwo?.name}
            roster={gameRosters?.teamTwo?.roster}
            energy={userTwoEnergy}
          />
        </div>
      )}
      {phase === PHASES.GAME_START && (
        <Announcer announcements={allAnnouncements} />
      )}
    </div>
  );
};

export default Game;