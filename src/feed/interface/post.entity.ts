import { FeedPost } from "./post.interface";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

//Armando las entidades de las tablas de la BBDD
@Entity('feed_post')
export class FeedPostEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: 'Valor por defecto'})
    body: string;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

}