/* eslint-disable import/extensions */
import mongoose from 'mongoose';
import connectToDb from '../database/mongoDb.js';

connectToDb();

const blogPostSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  date: Number,
  body: { type: String, required: [true, 'please enter a blog post body'] },

  tags: {
    type: {
      html: { type: String, default: 'hey' },
      css: { type: String, required: [true, 'css tag is required'] },
      js: { type: String },
      // _id: false,
    },

    required: [true, 'at least one tag is required'],
    default: undefined,
  },
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

let blogPost = {
  title: 'First Blog Post',
  subtitle: 'The future is good',
  date: 202230216,
  body: 'Hello World',
  tags: {
    html: 'html',
    css: 'css',
    js: 'js',
  },
};

blogPost = await BlogPost.create(blogPost, (err, small) => {
  if (err) console.log(err);
});
console.log(blogPost);

connectToDb().catch((error) => console.log(error));
