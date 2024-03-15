"use client"

import { useEffect, useState } from "react";
import { COURT_ROWS, COURT_NUM_COLUMNS } from "@/app/data/court-data";

export const useGenerateTiles = () => {
  const [tiles, setTiles] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null); 

  useEffect(() => {
    const newTiles: any = {};

    COURT_ROWS.forEach((rowLetter) => {
      const row: any = {};
      let column = 1;

      while (column <= COURT_NUM_COLUMNS) {
        row[column] = {
          id: `${rowLetter}${column}`,
          player: null,
          scoringType: null
        };

        column++;
      }

      newTiles[rowLetter] = row;
    });

    setTiles(newTiles);
  }, []);

  const handleUpdateTile = (tileKey: string, body: any) => {
    setTiles((prevTiles) => {
      const newTiles = { ...prevTiles };
      newTiles[tileKey[0]][tileKey[1]] = body;

      return newTiles;
    });
  };

  const handleTileModal = (tileKey: string) => {
    
  }

  return { tiles, handleUpdateTile };
};

export const useGenerateEnergy = () => {
    const defaultEnergy = 5;
    const [userOneEnergy, setUserOneEnergy] = useState(defaultEnergy);
    const [userTwoEnergy, setUserTwoEnergy] = useState(defaultEnergy);

    const handleSpendEnergy = (user: string, numEnergy: number) => {
      const isUserOne = user === "one";
      const spendEnergy = isUserOne ? setUserOneEnergy : setUserTwoEnergy;
      const currentRemainingEnergy = isUserOne ? userOneEnergy : userTwoEnergy;

      if (numEnergy > currentRemainingEnergy) {
        return null;
      } else {
        spendEnergy((prevEnergy) => prevEnergy - numEnergy);
      }
    };

    const handleGainEnergy = (user: string) => {
      const isUserOne = user === "one";
      const gainEnergy = isUserOne ? setUserOneEnergy : setUserTwoEnergy;
      const currentRemainingEnergy = isUserOne ? userOneEnergy : userTwoEnergy;

      if (currentRemainingEnergy === defaultEnergy) {
        return null;
      } else {
        gainEnergy((prevEnergy) => prevEnergy ++);
      }
    };

    return {
      userOneEnergy,
      userTwoEnergy,
      handleSpendEnergy,
      handleGainEnergy,
    };
};

