$(document).ready(function(){
  $("form").submit(function(event){
    var movies = $("#favoriteMovies").val();
    var foods = $("#favoriteFoods").val();
    var sports = $("#favoriteSports").val();
    var userInput = [];
    // console.log(movies);
    // console.log(foods);
    // console.log(sports);


    userInput.push(movies);
    userInput.push(foods);
    userInput.push(sports);

    var newArray = ["supper man","bbq","basketbal"];

    var newArrayTwo =  newArray.concat(userInput);
    newArrayTwo;




    console.log(userInput);
    console.log(newArrayTwo);

    event.preventDefault();
  });
});
