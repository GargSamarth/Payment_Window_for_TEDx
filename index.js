var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require("body-parser");
// mongoose.connect("mongodb://localhost/ticket_details");
//
// var detailsSchema = new mongoose.Schema({
// 	FirstName: String,
// 	LastName: String,
// 	dob: String,
// 	Gender: String,
// 	Address: String,
// 	City: String,
// 	State: String,
// 	Zip: Number
// });
//
// var Form = mongoose.model('Form', detailsSchema);


app.use(bodyParser.urlencoded({extended: true}));
var value = 33.32;
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req,res)=>{
	res.render("home",{value:value});
});

// app.post("/", (req,res)=>{
// 		// var FirstName: req.body.FirstName,
// 		// 		LastName: req.body.LastName,
// 		// 		dob: req.body.dob,
// 		// 		Gender: req.body.Gender,
// 		// 		Address: req.body.inputAddress,
// 		// 		City: req.body.inputCity,
// 		// 		State: req.body.inputState,
// 		// 		Zip: req.body.inputZip,
// 				// value+=33.34;
//
// 				// var userAdd = {
// 				// 	FirstName: req.body.FirstName,
// 				// 	LastName: req.body.LastName,
// 				// 	dob: req.body.dob,
// 				// 	Gender: req.body.Gender,
// 				// 	Address: req.body.inputAddress,
// 				// 	City: req.body.inputCity,
// 				// 	State: req.body.inputState,
// 				// 	Zip: req.body.inputZip,
// 				// }
// 				// Form.create(userAdd, function(err, newlyCreated){
// 				// 	if(err){
// 				// 		console.log(err);
// 				// 	} else{
// 				// 		console.log("success!!");
// 				// 	}
// 				// });
// });

app.listen(3000, ()=>{
	console.log("running TEDX server!!");
});
