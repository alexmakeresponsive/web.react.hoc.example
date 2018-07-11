import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PostssSchema = new Schema({
    dateCreatedAt: {type: Date},
    title: {type: String, required: true},
    text: {type: String, required: true},
    comments: {type: Object}
});


const Post = mongoose.model('Post', PostssSchema);