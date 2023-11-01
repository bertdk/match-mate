import axios from 'axios';

export const createTournament = async (body: {
  name: string;
  pointsOnWin: number;
  pointsOnTie: number;
  pointsOnLoss: number;
}) => {
  const response = await axios.post('http://localhost:4006/api/tournaments', {
    name: body.name,
    pointsOnWin: body.pointsOnWin,
    pointsOnTie: body.pointsOnTie,
    pointsOnLoss: body.pointsOnLoss,
  });
  return response.data as { name: string; id: string };
};

export const getTournament = async (id: string) => {
  const res = await axios.get(`http://localhost:4006/api/tournaments/${id}`);

  return res.data as {
    id: string;
    name: string;
    pointsOnWin: number;
    pointsOnTie: number;
    pointsOnLoss: number;
  };
};

export const getRanking = async (tournamentId: string) => {
  const res = await axios.get(
    `http://localhost:4006/api/tournaments/${tournamentId}/ranking`,
  );
  return res.data as {
    items: { name: string; points: number; id: string }[];
    count: number;
  };
};

export const updateTournament = async (
  id: string,
  body: {
    name: string;
    players: {
      name: string;
      id?: string | undefined;
    }[];
  },
) => {
  const response = await axios.patch(
    `http://localhost:4006/api/tournaments/${id}`,
    {
      name: body.name,
      players: body.players
        .filter((x) => x.name)
        .map((player) => ({
          id: player.id,
          name: player.name,
        })),
    },
  );
  return response.data as { id: string };
};
