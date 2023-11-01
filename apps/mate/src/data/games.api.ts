import axios from 'axios';

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
  const res = await axios.get(
    `http://localhost:4006/api/games?tournamentId=${tournamentId}`,
  );

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
  const response = await axios.post(
    `http://localhost:4006/api/games/tournaments/${tournamentId}`,
    {
      scores: body.scores.map((score) => ({
        playerId: score.playerId,
        gamePoints: score.gamePoints,
      })),
    },
  );
  return response.data as { id: string };
};
