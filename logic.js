

var food ["spaghetti", "pizza", "burgers", "chicken"];
console.log(food)

$.ajax({
    url: "https://www.omdbapi.com/?t=romancing+the+stone&y=&plot=short&apikey=trilogy",
    method: "GET"
  }).then(function(response) {
    console.log(response);