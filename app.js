
/**
 * Module dependencies.
 */

var express = require('express'),
    sys = require('sys'),
    app = module.exports = express.createServer(),
    models = require('./model');
    Book = models.Book;

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  app.use(express.compiler({ src: __dirname + '/public', enable: ['sass'] }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});



// Root

app.get('/', function(req, res){
  res.redirect('/books');
});


// Book Routes

// Listing of Books
app.get('/books', function(req, res){
  Book.find({}, function(err, docs) {
    res.render('books/index', {
      title: 'List of Books',
      books: docs
    });
  });
});

// New book
app.get('/books/new', function(req, res){
  res.render('books/new', {
    title: 'New Book'
  });
});

// Create/Update books
app.post('/books', function(req, res){
  if(req.body.book._id)
    Book.findOne({_id:req.body.book._id}, function(err, a) {
      a.title = req.body.book.title;
      a.body = req.body.book.body;
      a.description = req.body.book.description; 
      a.image = req.body.book.image; 
      a.name = req.body.book.name; 
      a.url = req.body.book.url;
      a.about = req.body.book.about;
      a.aggregateRating = req.body.book.aggregateRating;
      a.audio = req.body.book.audio; 
      a.author = req.body.book.author; 
      a.awards = req.body.book.awards; 
      a.contentLocation = req.body.book.contentLocation;
      a.contentRating = req.body.book.contentRating;
      a.datePublished = req.body.book.datePublished;
      a.description = req.body.book.description; 
      a.editor = req.body.book.editor; 
      a.encodings = req.body.book.encodings; 
      a.genre = req.body.book.genre;
      a.headline = req.body.book.headline;
      a.inLanguage = req.body.book.inLanguage;
      a.interactionCount = req.body.book.interactionCount; 
      a.isFamilyFriendly = req.body.book.isFamilyFriendly; 
      a.keywords = req.body.book.keywords; 
      a.offers = req.body.book.offers;
      a.publisher = req.body.book.publisher; 
      a.reviews = req.body.book.reviews; 
      a.video = req.body.book.video; 
      a.bookEdition = req.body.book.bookEdition;
      a.bookFormat = req.body.book.bookFormat;
      a.illustrator = req.body.book.illustrator;
      a.isbn = req.body.book.isbn; 
      a.numberOfPages = req.body.book.numberOfPages;
      a.price = req.body.book.price;
      a.productDimensions = req.body.book.productDimensions;
      a.shippingweight = req.body.book.shippingweight;
      a.averageCustomerReview = req.body.book.averageCustomerReview;
      a.save(function(err) {
        console.log(err);
      })
    });
  else {
    book = new Book(req.body.book);
    book.save(function(err){
      console.log("Created");
    });
  }

  res.redirect('/books');

});

// View an book
app.get('/book/:id', function(req, res){
  Book.findOne({_id:req.params.id}, function(err,book){
    res.render('books/show', {
      title: book.doc.title,
      book: book.doc
    });
  });
});

// Edit an book
app.get('/book/:id/edit', function(req, res){
  Book.findOne({_id:req.params.id}, function(err,book){
    res.render('books/edit', {
      title: 'Edit '+book.doc.title,
      book: book.doc
    });
  });
});

// Delete an book
app.del('/book/:id', function(req, res){
  Book.findOne({_id:req.params.id}, function(err,book){
    book.remove(function(err){
      console.log(err);
    });
  });
  res.redirect('/books');
});


// Only listen on $ node app.js

if (!module.parent) {
  app.listen(3000);
  console.log("Express server listening on port %d", app.address().port)
}
