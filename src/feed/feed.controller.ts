import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedPost } from './interface/post.interface';

@Controller('feed')
export class FeedController {

    constructor( private feedService: FeedService ) {}

    @Post()
    createPost (@Body() post: FeedPost) {
        return this.feedService.createPost(post)
    }

    @Get()
    getAllPost() {
        return this.feedService.getAllPost()
    }

    @Put(':id')
    updatePost(@Body() post: FeedPost, @Param() id: number) {
        return this.feedService.updatePost(id, post)
    }

    @Delete(':id')
    deletePost(@Param() id: number) {
        return this.feedService.deletePost(id)
    }

}
