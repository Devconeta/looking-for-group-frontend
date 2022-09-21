import { useContext, useEffect, useState } from "react";

import TeamCard from "../../components/Matchup/TeamCard";
import AppContainer from "../../Containers/AppContainer";

import { OffChainContext } from "../../context/offchainContext";
import { OffChainGetTeamById } from "../api/offChain/get";

const Index = () => {
  const { allTeams, userData } = useContext(OffChainContext);

  const [publicTeams, setPublicTeams] = useState([]);

  useEffect(() => {
    if (allTeams.length > 0) {
      const publicTeams = allTeams.filter(team => team.isPublic);
      setPublicTeams(publicTeams.reverse());
    }
  }, [allTeams]);

  return (
    <AppContainer className="appContainer--events">
      <div className="relative right-[2rem] flex max-h-[calc(100vh-6.5rem)] mt-[1.5rem] w-full flex-wrap gap-2 overflow-y-scroll scrollbar-hide 2xl:max-h-[calc(100vh-6.5rem)] 2xl:pt-[1.5rem] ">
        {/* <div className="fixed left-0 top-[5rem] z-10 h-24 w-full bg-gradient-to-t from-transparent to-black/70 2xl:top-[6.5rem]" />
        <div className="fixed left-0 bottom-0 z-10 h-24 w-[100vw] bg-gradient-to-b from-transparent to-black/70" />{" "} */}
        {publicTeams.map((team, index) => {
          return <TeamCard key={index} team={team} userData={userData} />;
        })}
      </div>
    </AppContainer>
  );
};

export default Index;
