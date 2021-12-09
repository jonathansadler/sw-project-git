var express = require('express');
var orm = require('orm');
var app = express();
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

//:3306 :8889
app.use(orm.express("mysql://root:root@localhost:8889/sw-2", {
	define: function (db, models, next) {
		models.deck = db.define("deck", {id:{type: 'integer', key: true}, name : String, faction: String});
		models.card = db.define("card", {id:{type: 'integer', key: true}, dataaa : String});
		
		models.card.hasOne("owner",models.deck,{ required: true })

		//console.log(models.card)

		next();
	}
}));

app.use(express.json())
app.listen(5000);


app.get("/", function (req, res) {

	res.send("Api Up");



});


app.post("/deckscreate", function (req, res) {
	
var name = req.body.name;
var faction = req.body.faction;

var newRecord = {};

newRecord.name = name;
newRecord.faction = faction;

	req.models.deck.create(newRecord, function(err, items) {

		// err - description of the error or null
		// items - array of inserted items

        if(err) {
			if(Array.isArray(err)) {
			  res.send(200);
			} else {
			  res.send(err);
			  //res.send(200);
			}
		  }

		  res.send(items);
		
	});	

});



app.post("/decksdelete", function (req, res) {

var name = req.body.name;
var faction = req.body.faction;
var newRecord = {};

newRecord.name = name;
newRecord.faction = faction;

	req.models.deck.find({ name: newRecord.name }).remove(function (err) {

        if(err) {
			if(Array.isArray(err)) {
			  res.send(200);
			} else {
			  res.send(err);
			  //res.send(200);
			}
		  }

		  res.send("removed");
	  });

});


app.get("/addcardtodecks", function (req, res) {

var addcardid = req.body.addcardid;

var name = req.body.name;

var newRecord = {};

newRecord.name = name;

req.models.card.find({ id: 3 }).first(function (err, items) {
    
    //console.log(items)

    deck.setOwner({ name: "Group G"}, function (err) {

        console.log(err)
    });
});


/*
	
	req.models.deck.find({ name: newRecord.name }, function (err, items) {


		var a = items[0].cardnav;
		let arr1 = a; 
		let arr2 = [newRecord.addcardid]; 
		items[0].cardnav = [...arr1, ...arr2];

		//items[0].card = [newRecord.addcardid];
		
        items[0].save(function (err) {
            // err.msg = "under-age";
			if(err) {
				if(Array.isArray(err)) {
				  res.send(200);
				} else {
				  res.send(err);
				  //res.send(200);
				}
			  }
	
			  res.send(items);



        });

		
	});	
*/	


});


app.get("/removecard", function (req, res) {

});

app.get("/swapcard", function (req, res) {

});

app.get("/alldecks", function (req, res) {

	req.models.deck.find(function(err, items) {

        if(err) {
			if(Array.isArray(err)) {
			  res.send(200);
			} else {
			  //res.send(err);
			  //res.send(200);
			}
		  }

		  res.send(items);

	});

});

app.get("/alldecks", function (req, res) {

});
