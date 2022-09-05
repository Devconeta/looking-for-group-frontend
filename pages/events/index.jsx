import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Events/Card";

import { fetchTeams } from "../api/utils";

const Index = () => {
  const [teams, setTeams] = useState([{}, {}, {}]);

  //   useEffect(() => {
  //     fetchTeams().then((teams) => {
  //       setTeams(teams);
  //     });
  //   }, []);

  return (
    <div className="eventContainer">
      <Navbar />
      <div className="flex absolute z-10 backdrop-blur-sm h-screen w-screen">
        <div className="flex flex-row justify-center w-full mx-16 mt-32 border gap-10">
          {teams.map((team, index) => {
            return <Card key={index} team={team} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
