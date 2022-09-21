import React, { useState } from "react";
import TreasuryMode from "./TreasuryMode/TreasuryMode";
import TeamMode from "./TeamMode/TeamMode";

const Team = ({ team, setEditMode }) => {
  const [treasuryMode, setTreasuryMode] = useState(false);

  return (
    // TEAM CONTAINER
    <div className="flex min-h-[26rem] rounded-xl border-[1px] border-white/30 bg-black/30 p-8 text-primaryLight backdrop-blur-lg">
      {/* TEAM  MODE  */}
      {!treasuryMode ? (
        <TeamMode
          team={team}
          setTreasuryMode={setTreasuryMode}
          setEditMode={setEditMode}
        />
      ) : (
        // TREASURY MODE
        <TreasuryMode team={team} setTreasuryMode={setTreasuryMode} />
      )}
    </div>
  );
};

export default Team;
