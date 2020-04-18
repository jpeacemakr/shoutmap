const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");


var app = Express();

Mongoose.connect("mongodb+srv://shoutmapadmin:shoutmappass@cluster0-mkagc.mongodb.net/shoutmap?retryWrites=true&w=majority");

//set the model for a shout
const ShoutModel = Mongoose.model("shout", {
    username: String,
    shouttext: String,
    longitude: Number, 
    latitude: Number,
    time: String,
    date: String
});

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));



//returns all people
app.get("/api/hello", async (request, response) => {
    response.send("Hello world!");
});



//adds a new shout
app.post("/api/newshout", async (request, response) => {
    try {
        var shout = new ShoutModel(request.body);
        var result = await shout.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});



//returns all people
app.get("/api/allshouts", async (request, response) => {
    try {
        var result = await ShoutModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});



//finds a specific person
/*
app.get("/shoutuser/:id", async (request, response) => {
    try {
        var shoutuser = await PersonModel.findById(request.params.id).exec();
        response.send(shoutuser);
    } catch (error) {
        response.status(500).send(error);
    }
});
*/




app.listen(3000, () => {
    console.log("Listening at localhost:3000");
});