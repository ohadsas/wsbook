var book = require('../book');
console.log("Stock");

/*----Json book's----*/
var bookStore = {
	"books":[
			
				{
					"Id": "10",
					"Name": "First_Book",
					"Author": "Moshe",
					"Sell_Date" :"January"
				},
							{
					"Id": "11",
					"Name": "Second_Book",
					"Author": "Eyal",
					"Sell_Date" :"January"
				},

				{
					"Id": "12",
					"Name": "Third_Book",
					"Author": "Momo",
					"Sell_Date" :"June"
				},

				{
					"Id": "13",
					"Name": "Fifth_Book",
					"Author": "Oliver",
					"Sell_Date" :"August"
				},

				{
					"Id": "14",
					"Name": "Sixth_Book",
					"Author": "David",
					"Sell_Date" :"May"
				},

				{
					"Id": "15",
					"Name": "Seven_Book",
					"Author": "Miri",
					"Sell_Date" :"January"
				},

				{
					"Id": "16",
					"Name": "Eight_Book",
					"Author": "Shirly",
					"Sell_Date" :"March"
				},

				{
					"Id": "17",
					"Name": "Nine_Book",
					"Author": "Moshe",
					"Sell_Date" :"January"
				}
	]
};


/*----Stock():gets array of book's----*/
function Stock(){
	this.books = [];
	console.log("Stock Constructor Called");
}

/*----init the stock fields by read from the json above----*/
/*----init():init data from json, using addbook(book), no return param----*/
Stock.prototype.init = function(){
	console.log("init() called");
	var length = bookStore.books.length;
	for(var i = 0 ; i < length ; i++){

		var tempbook = book.getbook(bookStore.books[i].Id, bookStore.books[i].Name, bookStore.books[i].Sell_Date, 
						  bookStore.books[i].Author);
		this.addbook(tempbook);
	}
};

/*----Stock Object Prototype----*/
Stock.prototype.addbook = function(book){
	console.log("addbook(book) called");
	var exists = 0; // bool flag
	var length = this.books.length;
	for(var i = 0; i < length; i++){
		if(this.books[i].Id == book.id){
		console.log("can't add this book because this id already exists at the stock");
		exists = 1;
		}
	}
	if(exists == 0){
		this.books.push(book);
		console.log("add new book");
		book.printbookInfo();
		console.log("\n\n");
	}
};
Stock.prototype.getAllbook = function(){
		console.log("getAllbook() called");
		var length = this.books.length;
		if(length == 0){
			console.log("No book's at stock");
			return{};
		}else{
			this.printAllbooks(this.books);
			return this.books;
		}
};
	
Stock.prototype.getbookNameById = function(_id){
	console.log("getbookNameByid(id) called");
	var length = this.books.length;
	for(var i = 0; i < length; i++){
		if(this.books[i].id == _id){
			var bookName = {"bookname" : this.books[i].bookname};
		}
	}
	if(bookName){
		return bookName;
	}
	else{
		console.log("book with id: " + _id + " no exists at stock");
		return{};
	}
};

Stock.prototype.getbookById = function(idforbook){
	console.log("getbookById(id) called");
	var length = this.books.length;
	var exists = 0;
	for(var i = 0; i < length; i++){
		if(this.books[i].id == idforbook){
			console.log("book with id: " + idforbook + " found at stock");
			this.books[i].printbookInfo()
			exists = 1;
			return this.books[i];
		}
	}
	if(!exists){
		console.log("book with id: " + idforbook + " no exists at stock");
			return{};
	}
};
Stock.prototype.getbookSellDate = function(_sell_date){
	console.log("getbookSellDate(_sell_date) called");
	var SDbooks = [];
	var length = this.books.length;
	for(var i = 0; i < length; i++){
		if(this.books[i].sell_date == _sell_date){

			SDbooks.push(this.books[i]);
		}
	} 	
	return SDbooks;
};
	
/*----printAllbooks(array): print all the book's info----*/

Stock.prototype.printAllbooks = function(array){
	var length = array.length;
	if(length > 0){
		for(var i = 0; i < length; i++){
		console.log("\n------\nbook number " + (i+1));
		array[i].printbookInfo();
		}
	}
	else{
		console.log("the array is empty - check what you have in the array");
	}
};

/*----Stock Instance to export, return Stock obj----*/
exports.getStock = function(){
	console.log("getStock() called");
	var myStock = new Stock();
	myStock.init();
	return myStock;
};