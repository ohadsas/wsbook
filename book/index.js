function book(id, bookname, sell_date, author){
	this.id = id;
	this.bookname = bookname;
	this.sell_date = sell_date;
	this.author = author;
	
	console.log("book C'tor");
}


/*---------------------- Prototypes--------------------------*/

book.prototype.setbookName = function(bookname){
	if(bookname != null){
		this.bookname = bookname;
		console.log("book name changed to: " + bookname);
	}
	else{
		console.log("book name didn't cahnge");
	}
};

book.prototype.sell_date = function(sell_date){
	if(sell_date != null){
		this.sell_date = sell_date;
		console.log("book sell_date changed to: " + sell_date);
	}
	else{
		console.log("book sell_date didn't cahnge");
	}
};

book.prototype.author = function(author){
	if(author != null){
		this.author = author;
		console.log("book author changed to: " + author);
	}
	else{
		console.log("book author didn't cahnge");
	}
};


book.prototype.printbookInfo = function(){
	console.log("Id: " + this.id);
	console.log("Name: " + this.bookname);
	console.log("sell_date: " + this.sell_date);
	console.log("author: " + this.author);
};

exports.getbook = function(id, bookname, sell_date, author){
	var mybook = new book(id, bookname, sell_date, author);
	return mybook;
};
