import { Controller, Get, Post, Body } from '@nestjs/common';
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
}
