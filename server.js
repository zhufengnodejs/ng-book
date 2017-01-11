let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let app = express();
app.use(express.static(path.resolve('public')));
app.use(express.static(path.resolve('app')));
app.use(bodyParser.json());
let Book = require('./model').Book;
app.get('/', function (req, res) {
    res.sendFile('./app/index.html', {root: __dirname})
});
    //当客户端以GET方法访问/books路径的时候
app.route('/books')
    .get(function (req, res) {
        Book.find({}, function (err, books) {
            res.send(books);
        })
    //当客户端以POST方法访问/books路径的时候
    }).post(function (req, res) {
            let book = req.body;
            Book.create(book,function(err,doc){
                res.send(doc);
            });
    })

app.listen(8080);