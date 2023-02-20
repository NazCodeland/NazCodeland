/* eslint-disable import/extensions */
import mongoose from 'mongoose';

// without extending the mongoose Schema class,
// intellisense doesn't provide property names
// for objects passed to Schema
class MySchema extends mongoose.Schema {}

// prettier-ignore
const blogPostSchema = new MySchema(
  {
    title: { type: String, required: [true, 'please enter a blog post title'], unique: true},
    description: {type: String, required: [true, 'please enter a brief blog post description']},
    publishedDate: { type: Date, default: Date.now },
    body: { type: String, required: [true, 'please enter a blog post body'] },

    tags: {
      type: Array,
      required: [true, 'at least one tag is required'],
      default: undefined,
    },
    slug: {
      type: String,
      required: true, 
      unique: true,
    }
  },
  { timestamps: true }
);

blogPostSchema.pre('validate', function createSlug(next) {
  // eslint-disable-next-line no-invalid-this
  this.slug = this.title.toLowerCase().replaceAll(' ', '-');

  next();
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;
