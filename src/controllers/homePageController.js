// eslint-disable-next-line camelcase
export default function homePage_get(req, res) {
  res.render('index', { tapTitle: 'Home' });
}
