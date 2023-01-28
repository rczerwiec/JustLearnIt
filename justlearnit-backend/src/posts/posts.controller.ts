import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { IPost } from './post.schema';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get()
  async findAll(): Promise<IPost[]> {
    return this.postService.findAll();
  }

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    console.log(id);
    return this.postService.remove(id);
  }
}
