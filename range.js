module.exports = (req, res, next ) =>{
   // Setting header and pagination
    res.header('Content-Range','appointments 0 - 10/10')
    next()
}