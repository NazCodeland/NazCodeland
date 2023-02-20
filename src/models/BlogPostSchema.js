/* eslint-disable no-invalid-this */
/* eslint-disable import/extensions */
import mongoose from 'mongoose';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

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
  this.slug = this.title.toLowerCase().replaceAll(' ', '-');

  this.title = DOMPurify.sanitize(this.title);
  this.description = DOMPurify.sanitize(this.description);
  this.body = DOMPurify.sanitize(marked(this.body));
  this.tags = DOMPurify.sanitize(this.tags);
  next();
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;
