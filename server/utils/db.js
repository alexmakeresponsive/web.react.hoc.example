import mongoose from 'mongoose';
import '../models/post.js';
import { config } from '../../etc/config.json';

const Post = mongoose.model('Post');


export function initConnection() {
    mongoose.connect(config.db.stringConnection)
}
export function getPosts() {
    return Post.find();
}
export function createPost(data) {
    const post = new Post({
        title: data.title,
        text: data.text,
        color: data.color,
        dateCreatedAt: new Date(),
    });

    return post.save();
}
export function removePost(id) {
    return Post.findById(id).remove();
}



let postsSample = [
    { dateCreatedAt: new Date(), title: 'Post 1 title', text:  'Post 1 text', comments: [{id:11, user: 'Username11', comment:'Comment 11'}, {id:12, user: 'Username12', comment:'Comment 12'}] },
    { dateCreatedAt: new Date(), title: 'Post 2 title', text:  'Post 2 text', comments: [{id:21, user: 'Username21', comment:'Comment 21'}, {id:22, user: 'Username22', comment:'Comment 22'}] },
];

//db.posts.insertOne();
//db name - posts
//collection name - posts
