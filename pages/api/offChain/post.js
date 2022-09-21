const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

/* --------------- API calls for teams things --------------- */

export const OffChainCreateTeam = async (teamData) => {
  const url = `${NEXT_PUBLIC_BASE_URL}/teams`;

  const payload = {
    address: teamData.deployerAddress,
    name: teamData.name,
    idea: teamData.idea,
    slogan: teamData.slogan,
    avatar: teamData.avatar ? teamData.avatar : "",
    isPublic: teamData.isPublic,
    tags: teamData.tags,
    lookingFor: teamData.lookingFor,
    maxMembers: teamData.maxMembers,
  };

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payload),
  });
  const data = await response.json();

  return data;
};

export const OffChainEditTeam = async (teamData) => {
  const url = `${NEXT_PUBLIC_BASE_URL}/teams/${teamData.id}`;

  const payload = {
    address: teamData.deployerAddress,
    name: teamData.name,
    idea: teamData.idea,
    slogan: teamData.slogan,
    avatar: teamData.avatar ? teamData.avatar : "",
    isPublic: teamData.isPublic,
    tags: teamData.tags,
    lookingFor: teamData.lookingFor,
    maxMembers: teamData.maxMembers,
  };

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(payload),
  });
  const data = await response.json();

  return data;
};

export const OffChainSetAddressTeam = async (id, address, name) => {
  const url = `${NEXT_PUBLIC_BASE_URL}/teams/${id}`;

  const payload = {
    address: address,
    name: name,
    isContractDeployed: true,
  };

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(payload),
  });
  const data = await response.json();

  return data;
};

export const OffChainJoinTeam = async (address, code) => {
  const url = `${NEXT_PUBLIC_BASE_URL}/teams/join`;

  const payload = {
    address: address,
    code: code,
  };

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payload),
  });
  const data = await response.json();

  return data;
};

/* --------------- API calls for user things --------------- */

export const OffChainModifyUserData = async (newInformation) => {
  const url = `${NEXT_PUBLIC_BASE_URL}/users;`;

  const payload = {
    id: "string",
    createdAt: "2022-09-09T23:10:18.907Z",
    updatedAt: "2022-09-09T23:10:18.907Z",
    address: "string",
    name: "string",
    level: "NEWBIE",
    email: "string",
    avatar: "string",
    timezone: "string",
    isActive: true,
  };

  const response = await fetch(url, {
    method: "PUT",
    body: payload,
  });

  const data = await response.json();

  return data;

  /*
    @dev - The object will have this form.
  
    {
      data: [null],
      meta: {
        page: 0,
        take: 0,
        itemCount: 0,
        pageCount: 0,
        hasPreviousPage: true,
        hasNextPage: true,
      },
      results: [
        {
          data: [null],
          meta: {
            page: 0,
            take: 0,
            itemCount: 0,
            pageCount: 0,
            hasPreviousPage: true,
            hasNextPage: true,
          },
        },
      ],
    }
  */
};

export const joinTeam = async (teamData) => {
  // const response = await fetch("https://www.balldontlie.io/api/v1/teams");
  // const data = await response.json();
  // return data;
};

export const leaveTeam = async (teamData) => {
  // const response = await fetch("https://www.balldontlie.io/api/v1/teams");
  // const data = await response.json();
  // return data;
};
