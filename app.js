var username= "josetimonen";
//to get all books
var books = require("./getbooks.js");
books.getbooks();

//to get a book by passing bookid
//var book = require("./getabook");
//book.getabook(2);

//to get forEach books in array
//var book = require("./getabook");
//var books = [1,2,3];
//books.forEach(function(bookId){
//	book.getabook(bookId);	
//});

//to get forEach directly
//var book = require("./getabook");
//var books = [1,2,3];
//books.forEach(book.getabook);


//to list all arguments from global object - node app.js 1 2
//console.log(process.argv);


//to list sliced arguments from global object - node app.js 1 2
//console.log(process.argv.slice(2));

//coming back to books
//to get forEach directly
//var book = require("./getabook");
//var books = process.argv.slice(2);
//books.forEach(book.getabook);
//console.log("I reached end");