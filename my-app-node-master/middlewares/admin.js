module.exports = function(req,res,next){
    const token = req.header('x-auth-token');
    if(!req.user.admin) res.status(403).send('Access denied!')
    next();
}