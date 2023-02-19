/* eslint-disable import/extensions */
import mongoose from 'mongoose';

// without extending the mongoose Schema class,
// intellisense doesn't provide property names
// for objects passed to Schema

class MySchema extends mongoose.Schema {}

const blogPostSchema = new MySchema(
  {
    title: String,
    subtitle: String,
    date: Number,
    body: { type: String, required: [true, 'please enter a blog post body'] },

    tags: {
      type: [
        {
          html: { type: String, default: 'hey' },
          css: { type: String, required: [true, 'css tag is required'] },
          js: { type: String },
          // _id: false,
        },
      ],

      required: [true, 'at least one tag is required'],
      default: undefined,
    },
  },
  { timestamps: true }
);

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;
