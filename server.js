var book = require('./book');
var stock = require('./stock');
var express = require('express');
var http = require('http');
var app = express();
app.set('json spaces',3);

var myStock = stock.getStock();

// create server and print the response JSON to browser
http.createServer(app);

/*----get stock information----*/
/*----get all book's at stock----*/
app.get('/stock',function(req,res) { 
	console.log(" '/book/stock' called");
	console.log("Path:    " + __filename);
	console.log("PATH : '/book/stock' ");
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.status(200).json(myStock);
});

/*----get all book's at stock----*/
app.get('/book/all',function(req,res) { 
	console.log(" '/book/all' called");
	console.log("Path:    " + __filename);
	console.log("PATH : '/book/all' ");
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.status(200).json(myStock.getAllbook());
});


/*----get book name by id----*/
app.get('/book/name/:id', function(req,res){
	console.log("Path:    " + __filename);	
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.status(200).json(myStock.getbookNameById(req.params.id));
});

/*----get book info by id----*/
app.get('/book/:id', function(req,res){
	console.log("Path:    " + __filename);	
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.status(200).json(myStock.getbookById(req.params.id));
});

/*----get all book's with specific sell_date----*/
app.get('/book/sell_date/:sell_date', function(req,res){
	console.log("Path:    " + __filename);	
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.status(200).json(myStock.getbookSellDate(req.params.sell_date));
});

var port = process.env.PORT || 3000;
//var port = 3000;
app.listen(port);
console.log("listening on port "+port+"...\n\n");
