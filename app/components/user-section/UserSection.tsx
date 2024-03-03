import React from "react";
import "./user-section.scss";
import { UserSectionProps } from "../types";

export const UserSection = ({
  teamName,
  roster,
  energy,
  handleGainEnergy,
  handleSpendEnergy,
}: UserSectionProps) => {
  const energyCSS: any = {
    5: "five",
    4: "four",
    3: "three",
    2: "two",
    1: "one",
    0: "zero"
  };

  return (
    <div className="user-section-main-container">
      <div className="team-name-label">{teamName}</div>
      <div className="energy-container">
        <div className={`energy-label ${energyCSS[energy]}`}>
          Energy: {energy}
        </div>
      </div>
      <div className="roster-container">
        <div className="roster-label">Roster</div>
        <div className="roster-players">
          {roster.map((player) => {
            return (
              <div className="roster-player-name" key={player.name}>
                {player.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="energy-container"></div>
    </div>
  );
};

export default UserSection;