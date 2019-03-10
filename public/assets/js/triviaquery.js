$(document).ready(function() {
  //Trivia categories from the API as strings
  var triviaCategories = [
    "General Knowledge",
    "Entertainment: Books",
    "Entertainment: Film",
    "Entertainment: Music",
    "Entertainment: Television",
    "Entertainment: Video Games",
    "Science & Nature",
    "Science: Computers",
    "Science: Mathematics",
    "Mythology",
    "Sports",
    "Geography",
    "History",
    "Politics",
    "Art"
  ];
  //And their corresponding codes for API calls
  var triviaCodes = [9, 10, 11, 12, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  var randomCategoryArray = [];
  var randomCategoryCodes = [];

  //Random category picks randomly from trivia array. If category already exists in the random category array already it runs again.
  function randomCategory() {
    randomCat = Math.floor(Math.random() * triviaCategories.length + 1);
    if (randomCategoryArray.indexOf(triviaCategories[randomCat - 1]) > -1) {
      randomCategory();
    }
  }
  // populate cats empties the randomCategoryArray, then picks three random categories and pushes them to the random category array. the if statement in the previously defined randomCategory function makes sure that they are unique. Every time we run populateCats, three random, unique intergers from 1 to the length of the triviaCategories are array are generated and pushed to the randomCategoryArray.

  function populateCats() {
    randomCategoryArray = [];
    randomCategoryCodes = [];
    var i;
    for (i = 0; i < 4; i++) {
      randomCategory();
      randomCategoryArray.push(triviaCategories[randomCat - 1]);
      randomCategoryCodes.push(triviaCodes[randomCat - 1]);
    }
    console.log(randomCategoryArray);
    console.log(randomCategoryCodes);
    $(".catOne").append(randomCategoryArray[0]);
    $(".catTwo").append(randomCategoryArray[1]);
    $(".catThree").append(randomCategoryArray[2]);
    $(".catFour").append(randomCategoryArray[3]);
    $("#c1q1").addClass("&category=" + randomCategoryCodes[0]);
    $("#c1q1", "c1q2", "c1q3").data(
      "category",
      "&category=" + randomCategoryCodes[0]
    );
    $("#c2q1", "c2q2", "c2q3").data(
      "category",
      "&category=" + randomCategoryCodes[1]
    );
    $("#c3q1", "c3q2", "c3q3").data(
      "category",
      "&category=" + randomCategoryCodes[2]
    );
    $("#c1q4", "c1q4", "c1q4").data(
      "category",
      "&category=" + randomCategoryCodes[3]
    );
    console.log("c1q4 data right here" + $("#c1q4").data());
  }

  populateCats();

  // temporary defaults for category and difficulty
  var category = 12;
  var difficulty = "easy";
  var queryStart = "https://opentdb.com/api.php?amount=1&type=multiple";
  var queryCat = "&category=" + category;
  var queryDiff = "&difficulty=" + difficulty;

  // queryURL puts the two halves together
  var queryUrl = queryStart + queryCat + queryDiff;

  function getQuestion(queryCat, queryDiff) {
    $.get(queryStart + queryCat + queryDiff, function(data) {
      console.log("Posts", data);
    });
  }
  getQuestion(queryCat, queryDiff);
  getQuestion("&category=" + 14, "&difficulty=hard");
});
