import { get } from './base.api';

export const getPlayers = async (tournamentId: string) => {
  const res = await get(`/players/tournaments/${tournamentId}`);
  const players = res.data;
  return players as {
    count: number;
    items: {
      id?: string;
      name: string;
    }[];
  };
};
