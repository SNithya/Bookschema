var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/booksdb');
Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

//Properties from Thing

var Book = new Schema({
  title             : {type : String, default : '', required : true},
  body              : {type : String, default : ''},
  description       : {type : String, default : '', required : true},//A short description of the item. 
  image             : {type : String, default : '',requried : true},//URL of an image of the item
  name              : {type : String, default :'', required : true},//The name of the item
  url               : {type : String, default :'', required : true},//URL of the item.

//Properties from CreativeWork
about               : {type : String, default : '', required : true}, //The subject matter of the content.
 
  aggregateRating   : {type : String, default : '',requried : true}, //The overall rating, based on a collection of reviews or ratings, of the item.

  audio             : {type : String, default :'', required : true}, //An embedded audio object.

  author            : {type : String, default :'', required : true}, //The author of this content. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangabely.

    awards          : {type : String, default : '',requried : true}, //Awards won by this person or for this creative work.

  contentLocation   : {type : String, default :'', required : true}, //The location of the content.

  contentRating     : {type : String, default :'', required : true}, //Official rating of a piece of content—for example,'MPAA PG-13'.

 datePublished      : {type : String, default : '', required : true}, //Date of first broadcast/publication.
 
  editor            : {type : String, default : '',requried : true}, //Editor for this content.

  encodings         : {type : String, default :'', required : true}, //The media objects that encode this creative work

  genre             : {type : String, default :'', required : true}, //Genre of the creative work

   headline         : {type : String, default : '', required : true}, //Headline of the article

  inLanguage        : {type : String, default : '',requried : true}, //The language of the content. please use one of the language codes from the IETF BCP 47 standard.

  interactionCount  : {type : String, default :'', required : true}, //A count of a specific user interactions with this item—for example, 20 UserLikes, 5 UserComments, or 300 UserDownloads. The user interaction type should be one of the sub types of UserInteraction.

  isFamilyFriendly  : {type : String, default :'', required : true}, //Indicates whether this content is family friendly.

   keywords         : {type : String, default : '', required : true}, //The keywords/tags used to describe this content.
 
  offers            : {type : String, default : '',requried : true}, //An offer to sell this item—for example, an offer to sell a product, the DVD  of      a  movie, or tickets to an event.

  publisher         : {type : String, default :'', required : true}, //The publisher of the creative work.

  reviews           : {type : String, default :'', required : true}, //Review of the item.

 video              : {type : String, default : '', required : true}, // An embedded video object.

// Properties from Book
  bookEdition       : {type : String, default : '', required : true},//The edition of the book. 
  bookFormat        : {type : String, default : '',requried : true},//The format of the book.
  illustrator       : {type : String, default :'', required : true},//The illustrator of the book.
  isbn              : {type : String, default :'', required : true},//The ISBN of the book.
  numberOfPages     : {type : String, default :'', required : true},//The number of pages in the book.
  price             : {type : String, default :'', required : true},//The price of the book
  productDimensions : {type : String, default :'', required : true},//The productDimensions of the book
  shippingweight    : {type : String, default :'', required : true},//The shippingweight of the book
  averageCustomerReview: {type : String, default :'', required : true},//The averageCustomerReview of the book
  created_at  : {type : Date, default : Date.now},
  updated_at  : {type : Date, default : Date.now}
});

  
mongoose.model('Book', Book);
var Book = exports.Book = mongoose.model('Book');
	
