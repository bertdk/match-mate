import { api } from './base.api';

export type TournamentGame = {
  id: string;
  scores: {
    id: string;
    gamePoints: number;
    player: {
      id: string;
      name: string;
    };
  }[];
};

interface TournamentGames {
  items: TournamentGame[];
  count: number;
}

export const getGames = async (tournamentId: string) => {
  const res = await api.get(`/games?tournamentId=${tournamentId}`);

  return res.data as TournamentGames;
};

export const createGame = async (
  tournamentId: string,
  body: {
    scores: {
      playerId: string;
      gamePoints: number;
    }[];
  },
) => {
  const response = await api.post(`/games/tournaments/${tournamentId}`, {
    scores: body.scores.map((score) => ({
      playerId: score.playerId,
      gamePoints: score.gamePoints,
    })),
  });
  return response.data as { id: string };
};
