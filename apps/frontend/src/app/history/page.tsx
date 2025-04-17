'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Game } from '@repo/db';

const HistoryPage = () => {
  const [games, setGames] = useState<
    (Game & {
      whitePlayer: { username: string };
      blackPlayer: { username: string };
    })[]
  >([]);

  const fetchGames = async () => {
    try {
      const res = await axios.get('http://localhost:3030/chess/completedGames', {
        withCredentials: true,
      });
      setGames(res.data.games || []);
    } catch (error) {
      console.error('Failed to fetch games:', error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-stone-900 px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-semibold text-white mb-8 text-center">🎯 Completed Games</h1>

        <div className="overflow-x-auto shadow-xl rounded-2xl bg-white/5 backdrop-blur p-4">
          <table className="min-w-full table-auto text-left text-white">
            <thead>
              <tr className="text-sm font-medium uppercase tracking-wider text-zinc-400 border-b border-zinc-700">
                <th className="px-4 py-3">Game #</th>
                <th className="px-4 py-3">White</th>
                <th className="px-4 py-3">Black</th>
                <th className="px-4 py-3">Result</th>
                <th className="px-4 py-3 hidden sm:table-cell">Played On</th>
              </tr>
            </thead>
            <tbody>
              {games.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-zinc-400">
                    No games found.
                  </td>
                </tr>
              ) : (
                games.map((game, index) => (
                  <tr
                    key={game.gameId}
                    className="border-b border-zinc-800 hover:bg-stone-800/70 transition duration-200"
                  >
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3 font-medium">{game.whitePlayer.username}</td>
                    <td className="px-4 py-3 font-medium">{game.blackPlayer.username}</td>
                    <td className="px-4 py-3">{game.result}</td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      {new Date(game.startAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
