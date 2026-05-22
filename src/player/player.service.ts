import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayerService {

    getAllPlayers(): string {
        return "All Players";
    }
    
}
