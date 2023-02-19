/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import connectToDB from '../database/mongoDb.js';
import BlogPost from '../models/BlogPostSchema.js';

connectToDB();
async function blog_get(req, res) {
  const blogPosts = await BlogPost.find().lean();
  res.render('blog', { tapTitle: 'Blog', blogPosts });
}

export default { blog_get };
