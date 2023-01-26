import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('posts')
export class PostsController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}
