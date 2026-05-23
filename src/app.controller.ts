import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('two')
  getTwo(): string {
    return 'Hello Manuel';
  }

  @Get('product/:id')
  getProduct(@Param('id') id: string): string {
    return `Product ID: ${id}`;
  }

  @Get('search/:query/:page')
  getSearch(@Param() params): string {
    return `Search Query: ${params.query}, Page: ${params.page}`;
  }
}
