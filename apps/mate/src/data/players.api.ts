import { api } from './base.api';

export const getPlayers = async (tournamentId: string) => {
  const res = await api.get(`/players/tournaments/${tournamentId}`);
  const players = res.data;
  return players as {
    count: number;
    items: {
      id?: string;
      name: string;
    }[];
  };
};
