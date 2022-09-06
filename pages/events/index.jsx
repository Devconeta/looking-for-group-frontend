import { useEffect, useState } from "react";

import Card from "../../components/Events/Card";

import { fetchTeams } from "../api/index.js";
import AppContainer from "../../Containers/AppContainer";

const Index = () => {
  const [teams, setTeams] = useState([
    {
      name: "DEVCONETA",
      roles: { frontend: false, backend: false, designer: false },
      idea: "A platform for developers to connect with each other",
    },
    {
      name: "DEVCONETA",
      roles: { frontend: false, backend: false, designer: false },
      idea: "A platform for developers to connect with each other",
    },
    {
      name: "DEVCONETA",
      roles: { frontend: false, backend: false, designer: false },
      idea: "A platform for developers to connect with each other",
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  // useEffect(() => {
  //   fetchTeams().then((teams) => {
  //     setTeams(teams);
  //   });
  // }, []);

  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <AppContainer className="appContainer--events">
      <div className="flex flex-col h-[calc(100vh-5rem)] border">HOLA</div>
    </AppContainer>
  );
};

export default Index;
