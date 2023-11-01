import axios from 'axios';

export const getPlayers = async (tournamentId: string) => {
  const res = await axios.get(
    `http://localhost:4006/api/players/tournaments/${tournamentId}`,
  );
  const players = res.data;
  return players as {
    count: number;
    items: {
      id?: string;
      name: string;
    }[];
  };
};
