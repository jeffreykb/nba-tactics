"use client"

import { useState } from "react";
import { PLAYER_MOCK_DATA } from "../data/player-data";
import { TEAM_NUMBER } from "../data/game-data";
import { PlayerProps } from "../components/types";

export const useRosterSetup = () => {
  const [currentTeamDrafting, setCurrentTeamDrafting] = useState(TEAM_NUMBER.ONE);
  const [teamOneName, setTeamOneName] = useState("Team 1");
  const [teamOneRoster, setTeamOneRoster] = useState([]);
  const [teamTwoName, setTeamTwoName] = useState("Team 2");
  const [teamTwoRoster, setTeamTwoRoster] = useState([]);

  const [waiverWire, setWaiverWire] = useState(PLAYER_MOCK_DATA);

  const isTeamOne = currentTeamDrafting === TEAM_NUMBER.ONE;

  const handlePlayerDraft = (player: PlayerProps) => {
    const addPlayer = isTeamOne ? setTeamOneRoster : setTeamTwoRoster;
    addPlayer((prevRoster) => [...prevRoster, player]);
    setWaiverWire((prevWire) => prevWire.filter((p) => p.id !== player.id));
    setCurrentTeamDrafting((prevTeam) =>
      prevTeam === TEAM_NUMBER.ONE ? TEAM_NUMBER.TWO : TEAM_NUMBER.ONE
    );
  }

  const handleTeamName = (teamNumber: string, teamName: string) => {
    const addTeamName =
      teamNumber === TEAM_NUMBER.ONE ? setTeamOneName : setTeamTwoName;
    addTeamName(teamName);
  }

  const teamsAreSet = (teamOneRoster.length === 5 && teamTwoRoster.length === 5) || waiverWire.length === 0;

  return {
    currentTeamDrafting,
    teamsAreSet,
    teamOneName,
    teamOneRoster,
    teamTwoName,
    teamTwoRoster,
    waiverWire,
    handleTeamName,
    handlePlayerDraft,
  };
};