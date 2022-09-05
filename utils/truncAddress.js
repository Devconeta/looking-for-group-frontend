export const truncAddress = (address) => {
  const first = address.slice(0, 6);
  const last = address.slice(-4);

  return `${first}...${last}`;
};
