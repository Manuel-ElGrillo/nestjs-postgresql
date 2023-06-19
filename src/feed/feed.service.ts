import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'
import { FeedPostEntity } from './interface/post.entity';
import { InjectRepository } from '@nestjs/typeorm' 
import { FeedPost } from './interface/post.interface'

@Injectable()
export class FeedService {

    constructor ( 
        @InjectRepository(FeedPostEntity) 
        private feedPostRepository: Repository<FeedPostEntity> 
    ){}

    createPost (feedPost: FeedPost) {
        return this.feedPostRepository.save(feedPost);
    }

    getAllPost () {
        return this.feedPostRepository.find();
    }

    updatePost (id: number, feedPost: FeedPost) {
        return this.feedPostRepository.update(id, feedPost);
    }

    deletePost( id: number ) {
        return this.feedPostRepository.delete( id );
    }

}
