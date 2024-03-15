"use client"

import { useState } from "react";
import { PHASES } from "../data/game-data";
import { PlayerProps } from "../components/types";

export const useGameState = () => {
  const [phase, setPhase] = useState(PHASES.INITIAL);
  const [gameRosters, setGameRosters] = useState({});

  const handleSetGameRosters = ({ teamOneName, teamOneRoster, teamTwoName, teamTwoRoster }: {
    teamOneName: string;
    teamOneRoster: PlayerProps[];
    teamTwoName: string;
    teamTwoRoster: PlayerProps[];
  }) => {
    const formattedGameRosters = {
      teamOne: {
        name: teamOneName,
        roster: teamOneRoster
      },
      teamTwo: {
        name: teamTwoName,
        roster: teamTwoRoster
      }
    };

    setGameRosters(formattedGameRosters);
  }

  return {
    phase,
    setPhase,
    gameRosters,
    handleSetGameRosters,
  };
};