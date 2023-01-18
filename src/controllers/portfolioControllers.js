/* eslint-disable camelcase */

function design_get(req, res) {
  res.render('design', { tapTitle: 'design' });
}

function development_get(req, res) {
  res.render('development', { tapTitle: 'development' });
}

export { design_get, development_get };
