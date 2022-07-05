//date.js module

exports.getDate = function() { // the var getDate is bound to an anonymous function
 const today = new Date();
 const currentDay = today.getDay();

 const options = {
   weekday: "long",
   day: "numeric",
   month: "long"
 };

 return today.toLocaleDateString("en-US", options);

}  //creating a getDate attribute and assigning it to the getDate function in our date module

exports.getDay = function(){ //creating a getDay attribute and assigning it to the getDay function in our date module
  const today = new Date();
  const currentDay = today.getDay();

  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);

};


console.log(module.exports);
