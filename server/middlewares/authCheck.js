function authCheck(req, res, next) {
  if (req.session?.user) {
    console.log('authCheck');
    next();
  } else {
    return res.redirect('/api/user/signin');
  }
}
module.exports = authCheck;
