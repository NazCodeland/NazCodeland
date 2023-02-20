/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import connectToDB from '../database/mongoDb.js';
import BlogPost from '../models/BlogPostSchema.js';

connectToDB();

async function blog_get(req, res) {
  const blogPosts = await BlogPost.find().lean();
  res.render('blog/index', { tapTitle: 'Blog', blogPosts });
}

async function blogPost_get(req, res) {
  const blogPost = await BlogPost.findOne({ slug: req.params.slug }).lean();
  res.render('blog/blogPost', { tapTitle: 'Blog Post', blogPost });
}

async function createBlogPost_get(req, res) {
  res.render('blog/create', { tapTitle: 'New blog post' });
}

async function createBlogPost_post(req, res) {
  const blogPost = await BlogPost.create({
    title: req.body.title,
    description: req.body.description,
    date: Date.now(),
    body: req.body.body,
    tags: [...req.body.tags.split(',')],
  }).then((doc) => doc.toObject());

  res.render('blog/create', { tapTitle: 'New blog post', blogPost });
}

export default {
  blog_get,
  blogPost_get,
  createBlogPost_get,
  createBlogPost_post,
};
