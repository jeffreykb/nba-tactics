import { useState } from "react";
import { ANNOUNCER_FLOW } from "../data/announcer-data";

export const useAnnouncer = () => {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(ANNOUNCER_FLOW["offenseSetUp"]);
  const [allAnnouncements, setAllAnnouncements] = useState([
    ANNOUNCER_FLOW["offenseSetUp"].text,
  ]);

  const handleChangeAnnouncement = (next: string) => {
    const nextAnnouncement = ANNOUNCER_FLOW[next];
    setCurrentAnnouncement(nextAnnouncement);
    setAllAnnouncements((prev) => [...prev, nextAnnouncement.text]);
  }

  return {
    allAnnouncements,
    next: currentAnnouncement.next,
    handleChangeAnnouncement,
  };
};