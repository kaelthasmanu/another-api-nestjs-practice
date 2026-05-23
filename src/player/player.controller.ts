import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { PlayerService } from './player.service';
import { Player } from './player.entity';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  getAllPlayers(): Player[] {
    return this.playerService.getAllPlayers();
  }

  @Get(':id')
  getPlayerById(@Param('id', ParseIntPipe) id: number): Player | undefined {
    return this.playerService.getPlayerById(id);
  }

  @Post('create')
  createPlayer(@Body() body: Player): Player {
    return this.playerService.createPlayer(body);
  }

  @Post('update/:id/:name')
  updatePlayer(
    @Param('id', ParseIntPipe) id: number,
    @Param('name') name: string,
  ): string {
    return `Player ID: ${id} updated to ${name}`;
  }

  @Delete('delete/:id')
  deletePlayer(@Param('id', ParseIntPipe) id: number): string {
    return `Player ID: ${id} deleted`;
  }
}
