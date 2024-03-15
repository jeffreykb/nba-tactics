import React, { useState } from "react";
import "./announcer.scss";
import { AnnouncerProps } from "../types";

export const Announcer = ({ announcements }: AnnouncerProps) => {
  return (
    <div className="announcer-main-container">
      {announcements.map((announcement) => (
        <div className="announcement-string">
          <span className="mike-breen">Mike Breen:</span>{announcement}
        </div>
      ))}
    </div>
  );
};

export default Announcer;
