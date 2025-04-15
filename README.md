# ♟️ Online Chess Arena

A modern multiplayer chess platform built for speed, style, and strategy.

Play real-time chess with friends, track your moves, enjoy immersive sounds, and never lose progress again — all powered by cutting-edge tech.

---

## 🚀 Live Features

- 🎯 **Drag & Drop Movement** – Intuitive piece movement via drag-and-drop.
- 🔄 **State Persistence** – Game state survives reloads and restores using game ID.
- ⏱️ **Multiple Time Controls** – Choose from different chess clock settings.
- 🔊 **Sound Effects** – Hear satisfying clicks with every move.
- ✨ **Possible Moves Highlighted** – Visual cues show legal moves on click.
- ⚡ **Redis-Powered Sync** – Super-fast game state updates with Redis.
- 🏳️ **Resign Button** – Gracefully accept defeat.
- 🐳 **Docker-Compose Ready** – Simple one-command development setup.

---

## 🛠 Tech Stack

| Layer         | Tech Used                           |
|---------------|-------------------------------------|
| **Frontend**  | [Next.js](https://nextjs.org/)      |
| **Backend**   | [Express](https://expressjs.com/), [ws](https://github.com/websockets/ws), [Redis](https://redis.io/) |
| **Monorepo**  | [Turborepo](https://turbo.build/repo) |
| **Runtime**   | [Bun](https://bun.sh/)              |
| **DevOps**    | [Docker](https://www.docker.com/), Docker Compose |

---

## 🔮 Coming Soon

- ⌛ **Auto-Resign on Inactivity** – Forfeit automatically after a set time of no moves.
- ♻️ **New Game Option** – Rematch or start fresh after the game ends.
- 🤖 **Bot Integration** – Play against Bot when no human is around.
- 📊 **Moves Table** – Detailed breakdown of game progress.
- 🕰️ **Game History** – See past games and reflect on your journey.

---

## 🐳 Local Development

Spin up the full stack locally using Docker Compose:

```bash
docker-compose up --build
