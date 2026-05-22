import { Controller, Get, Param } from '@nestjs/common';

@Controller('player')
export class PlayerController {
    @Get()
    getAllPlayers(): string {
        return "All Players";
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
