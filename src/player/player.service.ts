import { Injectable } from '@nestjs/common';
import { Player } from './player.entity';

@Injectable()
export class PlayerService {
  private players: Player[] = [
    { id: 1, name: 'Player 1', age: 25, team: 'Team A' },
    { id: 2, name: 'Player 2', age: 30, team: 'Team B' },
    { id: 3, name: 'Player 3', age: 22, team: 'Team C' },
  ];

  getAllPlayers(): Player[] {
    return this.players;
  }

  getPlayerById(id: number): Player | undefined {
    return this.players.find((player) => player.id === id);
  }

  createPlayer(name: string, age: number, team: string): string {
    const newPlayer: Player = {
      id: this.players.length + 1,
      name,
      age,
      team,
    };
    this.players.push(newPlayer);
    return `Player ${name} created`;
  }
}
