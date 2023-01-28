import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { Post, PostDocument, IPost } from './post.schema';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = new this.postModel(createPostDto);

    return newPost.save();
  }

  async findAll(): Promise<IPost[]> {
    return this.postModel.find().exec();
  }

  async remove(id: string): Promise<Post> {
    return this.postModel.findByIdAndDelete(id);
  }
}
