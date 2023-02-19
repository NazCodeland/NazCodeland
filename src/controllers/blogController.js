/* eslint-disable camelcase */

const blogPost = [
  {
    id: '3423232',
    user: {
      id: '23143',
      name: 'Jimmy Carter',
      username: 'JimmyC',
    },
    title: 'Being me',
    description: 'How to be a president',
    modified: '2009-03-17T03:53:36Z',
    tags: [
      {
        html: 'html',
        css: 'css',
        js: 'js',
      },
    ],
  },
  {
    id: '3423232',
    user: {
      id: '23143',
      name: 'Jimmy Carter',
      username: 'JimmyC',
    },
    title: 'Being me',
    description: 'How to be a president',
    modified: '2009-03-17T03:53:36Z',
    tags: [
      {
        html: 'html',
        css: 'css',
      },
    ],
  },
  {
    id: '3423232',
    user: {
      id: '23143',
      name: 'Jimmy Carter',
      username: 'JimmyC',
    },
    title: 'Being me',
    description: 'How to be a president',
    modified: '2009-03-17T03:53:36Z',
    tags: [
      {
        html: 'html',
      },
    ],
  },
];

export default function blog_get(req, res) {
  res.render('blog', { tapTitle: 'Blog', blogPost });
}
