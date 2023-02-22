/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import connectToDB from '../database/mongoDb.js';
import BlogPost from '../models/BlogPostSchema.js';

connectToDB();

// const blogPosts = [
//   {
//     title: 'Lorem ipsum dolor sit amet.',
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi exercitationem soluta rerum eligendi minus repudiandae quae ipsam, eum sapiente nesciunt.`,
//     body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsum laudantium aspernatur incidunt, labore tenetur qui, saepe excepturi dolorem vitae explicabo quaerat? Quod rem in reiciendis eius neque natus, dolor aliquam officia voluptatibus itaque minus delectus nostrum dolores atque, sit assumenda similique asperiores doloremque cum soluta? Consequuntur deserunt impedit quod, eligendi illum accusantium nobis earum, dolores harum id sunt aut

//     <br>
//     <br>
//     inventore incidunt, praesentium voluptas dolore quis debitis labore exercitationem fugit sed velit. Perferendis officia illum minima nesciunt facilis sunt. Cupiditate nobis eos quod cum enim ipsam! Ab quasi quam fuga officiis in ut corporis rerum quas placeat, voluptatibus voluptates eos?
//     <br>
//     <br>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellat. Itaque fuga repellendus quisquam est, unde adipisci placeat ut ipsam voluptatem, labore eius commodi excepturi ullam, mollitia eum rerum? Ex, facere vero! Earum ducimus voluptatem temporibus pariatur adipisci quibusdam veniam est molestiae, quisquam, perferendis delectus illo repudiandae vel, nostrum officia.
//     <br>
//     <br>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsam pariatur necessitatibus autem, esse mollitia nihil facere doloribus cumque, possimus perspiciatis dolore dolor! Vitae iusto tempore, unde rem esse minima debitis repellendus pariatur aut optio quisquam, necessitatibus omnis ratione voluptatem asperiores illum assumenda non repudiandae ullam qui aliquid sequi? Tenetur qui ad vero cum et incidunt veniam blanditiis voluptate saepe quos recusandae quisquam explicabo asperiores, dolor, laboriosam eligendi omnis deleniti sit. Eius eum magni pariatur ex quae, at facilis consectetur itaque beatae, voluptatum, ea quibusdam aliquid necessitatibus consequuntur impedit suscipit! Aut, beatae non. Accusantium, aliquid autem saepe qui eligendi deleniti!
//     <br>
//     <br>

//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quod veritatis exercitationem iste explicabo animi id rem assumenda eum laboriosam?

//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus excepturi minus explicabo. Totam nesciunt quisquam architecto, provident, possimus voluptatem unde eos accusantium eaque corporis pariatur excepturi, laudantium saepe debitis nulla. Optio quibusdam cum architecto possimus at tenetur unde odio error laudantium eveniet sunt quas, tempore quo aut illo similique temporibus in quod consequatur. Quas est neque perspiciatis. Ipsum iste fugit nostrum dolore tempora aliquam quisquam, natus aperiam sed. Ipsam, saepe.</p>
//     <br>
//     <br>

//     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quo accusamus mollitia expedita rerum. Tempore doloremque provident officia fuga nulla </p>

//     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quas ipsa non libero sit laboriosam. Eum, delectus? Beatae, exercitationem ad? Dolorum blanditiis beatae aperiam cum! Possimus dolores sint, facere voluptatibus dolore iste tempore! Nostrum officiis sunt fugiat exercitationem eos ad, architecto, explicabo illo eligendi provident minus odio, veritatis ut. Nostrum, quas ut ipsam incidunt maiores accusamus, laboriosam tempore repellat, suscipit unde illo accusantium. Molestiae, accusantium iusto nesciunt tenetur unde minima quis repellendus ut assumenda porro natus beatae repudiandae tempore architecto sunt doloribus voluptatibus aliquam blanditiis excepturi obcaecati sequi perspiciatis maxime. Eius beatae corporis blanditiis rem molestiae odio incidunt, nesciunt maxime.`,
//     tags: 'html, css, js',
//     createdAt: 'Tue Feb 21 2023 12:16:39 GMT-0500 (Eastern Standard Time)',
//     slug: 'Lorem ipsum dolor sit amet.',
//   },
//   {
//     title: 'Lorem ipsum dolor sit amet.',
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi exercitationem soluta rerum eligendi minus repudiandae quae ipsam, eum sapiente nesciunt.`,
//     body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsum laudantium aspernatur incidunt, labore tenetur qui, saepe excepturi dolorem vitae explicabo quaerat? Quod rem in reiciendis eius neque natus, dolor aliquam officia voluptatibus itaque minus delectus nostrum dolores atque, sit assumenda similique asperiores doloremque cum soluta? Consequuntur deserunt impedit quod, eligendi illum accusantium nobis earum, dolores harum id sunt aut inventore incidunt, praesentium voluptas dolore quis debitis labore exercitationem fugit sed velit. Perferendis officia illum minima nesciunt facilis sunt. Cupiditate nobis eos quod cum enim ipsam! Ab quasi quam fuga officiis in ut corporis rerum quas placeat, voluptatibus voluptates eos?`,
//     tags: 'html, css, js',
//     createdAt: 'Tue Feb 21 2023 12:16:39 GMT-0500 (Eastern Standard Time)',
//     slug: 'Lorem ipsum dolor sit amet.',
//   },
//   {
//     title: 'Lorem ipsum dolor sit amet.',
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi exercitationem soluta rerum eligendi minus repudiandae quae ipsam, eum sapiente nesciunt.`,
//     body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsum laudantium aspernatur incidunt, labore tenetur qui, saepe excepturi dolorem vitae explicabo quaerat? Quod rem in reiciendis eius neque natus, dolor aliquam officia voluptatibus itaque minus delectus nostrum dolores atque, sit assumenda similique asperiores doloremque cum soluta? Consequuntur deserunt impedit quod, eligendi illum accusantium nobis earum, dolores harum id sunt aut inventore incidunt, praesentium voluptas dolore quis debitis labore exercitationem fugit sed velit. Perferendis officia illum minima nesciunt facilis sunt. Cupiditate nobis eos quod cum enim ipsam! Ab quasi quam fuga officiis in ut corporis rerum quas placeat, voluptatibus voluptates eos?`,
//     tags: 'html, css, js',
//     createdAt: 'Tue Feb 21 2023 12:16:39 GMT-0500 (Eastern Standard Time)',
//     slug: 'Lorem ipsum dolor sit amet.',
//   },
//   {
//     title: 'Lorem ipsum dolor sit amet.',
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi exercitationem soluta rerum eligendi minus repudiandae quae ipsam, eum sapiente nesciunt.`,
//     body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsum laudantium aspernatur incidunt, labore tenetur qui, saepe excepturi dolorem vitae explicabo quaerat? Quod rem in reiciendis eius neque natus, dolor aliquam officia voluptatibus itaque minus delectus nostrum dolores atque, sit assumenda similique asperiores doloremque cum soluta? Consequuntur deserunt impedit quod, eligendi illum accusantium nobis earum, dolores harum id sunt aut inventore incidunt, praesentium voluptas dolore quis debitis labore exercitationem fugit sed velit. Perferendis officia illum minima nesciunt facilis sunt. Cupiditate nobis eos quod cum enim ipsam! Ab quasi quam fuga officiis in ut corporis rerum quas placeat, voluptatibus voluptates eos?`,
//     tags: 'html, css, js',
//     createdAt: 'Tue Feb 21 2023 12:16:39 GMT-0500 (Eastern Standard Time)',
//   },
//   {
//     title: 'Lorem ipsum dolor sit amet.',
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi exercitationem soluta rerum eligendi minus repudiandae quae ipsam, eum sapiente nesciunt.`,
//     body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsum laudantium aspernatur incidunt, labore tenetur qui, saepe excepturi dolorem vitae explicabo quaerat? Quod rem in reiciendis eius neque natus, dolor aliquam officia voluptatibus itaque minus delectus nostrum dolores atque, sit assumenda similique asperiores doloremque cum soluta? Consequuntur deserunt impedit quod, eligendi illum accusantium nobis earum, dolores harum id sunt aut inventore incidunt, praesentium voluptas dolore quis debitis labore exercitationem fugit sed velit. Perferendis officia illum minima nesciunt facilis sunt. Cupiditate nobis eos quod cum enim ipsam! Ab quasi quam fuga officiis in ut corporis rerum quas placeat, voluptatibus voluptates eos?`,
//     tags: 'html, css, js',
//     slug: 'Lorem ipsum dolor sit amet.',
//   },
//   {
//     title: 'Lorem ipsum dolor sit amet.',
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi exercitationem soluta rerum eligendi minus repudiandae quae ipsam, eum sapiente nesciunt.`,
//     body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsum laudantium aspernatur incidunt, labore tenetur qui, saepe excepturi dolorem vitae explicabo quaerat? Quod rem in reiciendis eius neque natus, dolor aliquam officia voluptatibus itaque minus delectus nostrum dolores atque, sit assumenda similique asperiores doloremque cum soluta? Consequuntur deserunt impedit quod, eligendi illum accusantium nobis earum, dolores harum id sunt aut inventore incidunt, praesentium voluptas dolore quis debitis labore exercitationem fugit sed velit. Perferendis officia illum minima nesciunt facilis sunt. Cupiditate nobis eos quod cum enim ipsam! Ab quasi quam fuga officiis in ut corporis rerum quas placeat, voluptatibus voluptates eos?`,
//     tags: 'html, css, js',
//     createdAt: 'Tue Feb 21 2023 12:16:39 GMT-0500 (Eastern Standard Time)',
//     slug: 'Lorem ipsum dolor sit amet.',
//   },
//   {
//     title: 'Lorem ipsum dolor sit amet.',
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi exercitationem soluta rerum eligendi minus repudiandae quae ipsam, eum sapiente nesciunt.`,
//     body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsum laudantium aspernatur incidunt, labore tenetur qui, saepe excepturi dolorem vitae explicabo quaerat? Quod rem in reiciendis eius neque natus, dolor aliquam officia voluptatibus itaque minus delectus nostrum dolores atque, sit assumenda similique asperiores doloremque cum soluta? Consequuntur deserunt impedit quod, eligendi illum accusantium nobis earum, dolores harum id sunt aut inventore incidunt, praesentium voluptas dolore quis debitis labore exercitationem fugit sed velit. Perferendis officia illum minima nesciunt facilis sunt. Cupiditate nobis eos quod cum enim ipsam! Ab quasi quam fuga officiis in ut corporis rerum quas placeat, voluptatibus voluptates eos?`,
//     tags: 'html, css, js',
//     createdAt: 'Tue Feb 21 2023 12:16:39 GMT-0500 (Eastern Standard Time)',
//     slug: 'Lorem ipsum dolor sit amet.',
//   },
//   {
//     title: 'Lorem ipsum dolor sit amet.',
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi exercitationem soluta rerum eligendi minus repudiandae quae ipsam, eum sapiente nesciunt.`,
//     body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsum laudantium aspernatur incidunt, labore tenetur qui, saepe excepturi dolorem vitae explicabo quaerat? Quod rem in reiciendis eius neque natus, dolor aliquam officia voluptatibus itaque minus delectus nostrum dolores atque, sit assumenda similique asperiores doloremque cum soluta? Consequuntur deserunt impedit quod, eligendi illum accusantium nobis earum, dolores harum id sunt aut inventore incidunt, praesentium voluptas dolore quis debitis labore exercitationem fugit sed velit. Perferendis officia illum minima nesciunt facilis sunt. Cupiditate nobis eos quod cum enim ipsam! Ab quasi quam fuga officiis in ut corporis rerum quas placeat, voluptatibus voluptates eos?`,
//     tags: 'html, css, js',
//     createdAt: 'Tue Feb 21 2023 12:16:39 GMT-0500 (Eastern Standard Time)',
//     slug: 'Lorem ipsum dolor sit amet.',
//   },
//   {
//     title: 'Lorem ipsum dolor sit amet.',
//     description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi exercitationem soluta rerum eligendi minus repudiandae quae ipsam, eum sapiente nesciunt.`,
//     body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsum laudantium aspernatur incidunt, labore tenetur qui, saepe excepturi dolorem vitae explicabo quaerat? Quod rem in reiciendis eius neque natus, dolor aliquam officia voluptatibus itaque minus delectus nostrum dolores atque, sit assumenda similique asperiores doloremque cum soluta? Consequuntur deserunt impedit quod, eligendi illum accusantium nobis earum, dolores harum id sunt aut inventore incidunt, praesentium voluptas dolore quis debitis labore exercitationem fugit sed velit. Perferendis officia illum minima nesciunt facilis sunt. Cupiditate nobis eos quod cum enim ipsam! Ab quasi quam fuga officiis in ut corporis rerum quas placeat, voluptatibus voluptates eos?`,
//     tags: 'html, css, js',
//     createdAt: 'Tue Feb 21 2023 12:16:39 GMT-0500 (Eastern Standard Time)',
//     slug: 'Lorem ipsum dolor sit amet.',
//   },
// ];

async function blog_get(req, res) {
  const blogPosts = await BlogPost.find().lean();
  res.render('blog/index', { tapTitle: 'Blog', blogPosts });
}

async function blogPost_get(req, res) {
  const blogPost = await BlogPost.findOne({ slug: req.params.slug }).lean();
  res.render('blog/blogPost', { tapTitle: 'Blog Post', blogPost });
}

async function createBlogPost_get(req, res) {
  res.render('blog/createBlogPost', { tapTitle: 'New blog post' });
}

async function createBlogPost_post(req, res) {
  const blogPost = await BlogPost.create({
    title: req.body.title,
    description: req.body.description,
    body: req.body.body,
    tags: [...req.body.tags.split(',')],
  });

  const { slug } = blogPost;
  res.redirect(`${slug}`);
}

export default {
  blog_get,
  blogPost_get,
  createBlogPost_get,
  createBlogPost_post,
};
