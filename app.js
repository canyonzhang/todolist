const express = require("express");
const bodyParser = require("body-parser");
//own custom date module
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

  const activities = ["Make Breakfast", "Study", "Go to Gym"]; //initialize activity here because when the server first triggers the get method, it will not have a value, it will only
  //have a value after the form is submitted in list.ejs and we have a post request.

  const workItems = [];

app.get("/", function(req, res) {

let day = date.getDate(); //we have a module date, and we require at the beginning of app.js, which binds all of the modules exports to the const date, then let day = date(); calls the function bound
// to the module date's exports.

  console.log("activities is " + activities);
  res.render("list", {
    listTitle: day,
    newActivities: activities
  });
});

app.post("/", function(req, res){ //when the form is submitted in list.ejs, it is caught here by app.post("/", function(req, res))

console.log(req.body);
let activity = req.body.newActivity;

console.log("req.body.list is " + req.body.list);

if(req.body.list === "Work"){
  workItems.push(activity);
  res.redirect("/work");
}
else{
  activities.push(activity);
  res.redirect("/");
}

  console.log("activity is " + activity);
  res.redirect("/"); //when a post request is triggered on our home route, we'll save the value of the text box to activity and redirect
  // to our home route, which is caught by our app.get("/") method, where res.render the newActivity to activity, and send it back to list.ejs.
});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newActivities: workItems});
});

app.post("/work", function(req, res){
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})

app.get("/about", function(req, res){
  res.render("about");
})


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
