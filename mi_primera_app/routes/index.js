var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var bodyParser = require('body-parser');




var schema=mongoose.Schema;






var productoSchema=new schema({
	name:String,
	image:String,
	price:{type:Number, default: 0},
	category:{type:String,enum:['computers','smartphone','accesories']},
	description:String

});


var Product=mongoose.model('Product',productoSchema);









/* GET home page. */
router.get('/', function(req, res) {
  
  console.log("API REST POR EL PUERTO 8000")
  res.render('index');
});


///SACAR PROUDCTOS, LEER, TRAERMELOS //////
router.get('/api/producto',function(req,res){
	console.log("API REST POR EL PUERTO 8000")
});



router.get('/api/producto/:productoId',function(req,res){

});

/////////////////////////////////////////////




/////SUBIR PRODUCTOS////////////////////


router.post('/api/producto',function(req,res){
	console.log('POST /api/producto');
	console.log(req.body);
		var product=new Product({
			name:product.body.name,
			image:product.body.image,
			price:product.body.price,
			category:product.body.category,
			description:product.body.description
		});
	
	product.save(function (err){
		if(error) trow 
			console.log(product);
	});
			
});


///////////////////////////////////////////



//////ACTUALIZAR PRODUCTOS POR ID.....////

router.put('/api/producto/:productoId',function(req,res){

});


////////////////////////////////////////////



//////////////////////////////////////////////////



router.delete('/api/producto/:productoId',function(req,res){


});






module.exports = router;





