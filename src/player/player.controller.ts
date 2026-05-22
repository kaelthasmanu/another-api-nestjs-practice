import { Controller, Get, Param } from '@nestjs/common';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {

    constructor(private readonly playerService: PlayerService) {}

    @Get()
    getAllPlayers(): string {
        return this.playerService.getAllPlayers();
    }

    @Get(":id")
    getPlayerById(@Param("id") id: string): string {
        return `Player ID: ${id}`;
    }

    @Get("create/:name")
    createPlayer(@Param("name") name: string): string {
        return `Player ${name} created`;
    }

    @Get("update/:id/:name")
    updatePlayer(@Param("id") id: string, @Param("name") name: string): string {
        return `Player ID: ${id} updated to ${name}`;
    }

    @Get("delete/:id")
    deletePlayer(@Param("id") id: string): string {
        return `Player ID: ${id} deleted`;
    }
}
