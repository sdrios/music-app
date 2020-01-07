const express = require("express");
const app = express();
const modules = require('./models');
const bodyParser = require("body-parser");

// support parsing of application/json type post data
app.use(bodyParser.json());

//doesn't support parsing of app/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public'));

app.get('/artist', function(req, response){
    console.log('querying artist');
    modules.artists.findAll().then(function(artists){
        console.log(artists);
        response.send(artists);
    });
});

app.put('/artist/:id', function(req, response){
    let updateValues = {};
    if(req.body.name){
        updateValues.name = req.body.name;
    }

    // if(req.body.dob){
    //     updateValues.dob = req.body.dob;
    // }

    console.log(updateValues);

    models.artists.update(updateValues, {where:{id:req.params.id}})
    .then(function(updated){
        console.log('updated success');
        console.log(updated);
        response.send(updated);
    });
});

app.post('/artist',function(req,response){
    console.log("creating artist");
    console.log(req.body);
    modules.artists.create({name:req.body.name})
    .then(function(artist){
        console.log(artist)
        response.send("new artist created with id:" + artist.id);
    })

})

app.get('/artist', function(req, response){
    modules.artists.findAll();
});


app.listen(3000, function(){
    console.log('server listening on port 3000');
});