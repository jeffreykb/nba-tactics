import React from "react";
import "./roster-setup.scss";
import { useRosterSetup } from "@/app/hooks/roster-setup-hooks";
import { PlayerProps } from "../types";
import { TEAM_NUMBER } from "@/app/data/game-data";

export const RosterSetup = ({
  nextPhase,
  handleSetGameRosters,
}: {
  nextPhase: () => void;
  handleSetGameRosters: ({
    teamOneName,
    teamOneRoster,
    teamTwoName,
    teamTwoRoster,
  }: {
    teamOneName: string;
    teamOneRoster: PlayerProps[];
    teamTwoName: string;
    teamTwoRoster: PlayerProps[];
  }) => void;
}) => {
  const {
    teamsAreSet,
    teamOneName,
    teamOneRoster,
    teamTwoName,
    teamTwoRoster,
    waiverWire,
    handleTeamName,
    handlePlayerDraft,
  } = useRosterSetup();

  return (
    <div className="roster-setup-main-container">
      <div className="roster-setup-header">Choose your players</div>
      <div className="player-select-container">
        <div className="user-roster">
          <input
            className="team-label"
            value={teamOneName}
            onChange={(e) => handleTeamName(TEAM_NUMBER.ONE, e.target.value)}
          />
          <div className="team-roster">
            {teamOneRoster.map((player) => (
              <div key={player?.id} className="roster-player">
                {player?.name}
              </div>
            ))}
          </div>
        </div>
        <div className="waiver-wire">
          {teamsAreSet ? (
            <button
              className="button-cta"
              onClick={() => {
                handleSetGameRosters({
                  teamOneName,
                  teamOneRoster,
                  teamTwoName,
                  teamTwoRoster,
                });
                nextPhase();
              }}
            >
              READY
            </button>
          ) : (
            <div className="waiver-label">Available Players</div>
          )}
          <div className="available-players">
            {waiverWire.map((player) => (
              <div
                key={player.id}
                className="waiver-player"
                onClick={() => {
                  handlePlayerDraft(player);
                }}
              >
                {player.name}
              </div>
            ))}
          </div>
        </div>
        <div className="user-roster">
          <input
            className="team-label"
            value={teamTwoName}
            onChange={(e) => handleTeamName(TEAM_NUMBER.TWO, e.target.value)}
          />
          <div className="team-roster">
            {teamTwoRoster.map((player) => (
              <div key={player?.id} className="roster-player">
                {player?.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RosterSetup;