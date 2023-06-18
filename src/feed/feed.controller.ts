import { Controller, Post, Body } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedPost } from './interface/post.interface';

@Controller('feed')
export class FeedController {

    constructor( private feedService: FeedService ) {}

    @Post()
    createPost (@Body() post: FeedPost) {
        return this.feedService.createPost(post)
    }

}
