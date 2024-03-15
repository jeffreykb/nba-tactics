import React from "react";
import "./court-tile.scss";
import { useCourtTile } from "@/app/hooks/court-hooks";

export const CourtTile = ({
  id,
  handleUpdateTile,
}: {
  id: string;
  handleUpdateTile: () => void;
}) => {
  const { type, offensiveDefault } = useCourtTile(id);
  return (
    <div
      className={`court-tile-main-container ${type} ${
        offensiveDefault ? "offensive-default" : "standard"
      }`}
    >
      {id}
    </div>
  );
};

export default CourtTile;