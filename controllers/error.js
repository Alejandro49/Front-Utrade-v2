exports.get404 = (req, res, next) => {
  res.status(404).render('404', {
    path: '/404',
    isAuthenticated: false
  });
};

exports.get500 = (req, res, next) => {
  res.status(500).render('500', {
    path: '/500',
    isAuthenticated: false
  });
};
