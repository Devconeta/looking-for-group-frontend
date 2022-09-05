export const fetchTeams = async () => {
  const res = await fetch("http://localhost:3000/api/teams");
  const data = await res.json();

  return data;
};
