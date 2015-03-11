/**
 * Created by le on 10/03/15.
 */

var connect = require('connect');
var app = connect();
app.use(logger);
app.use('/admin', restrict);
app.use('/admin', admin);
app.use(hello);
app.listen(3000);

function logger (req, res, next) {
    console.log('logger', req.method, req.url);
    next();
}

function restrict (req, res, next) {
    console.log('restrict middleware:', req.headers.authorization);
    next();
}

function admin (req, res, next) {
    console.log('admin middleware');
    next();
}

function hello (req, res) {
    res.setHeader('content-type', 'text/plain');
    res.end('hello world');
}