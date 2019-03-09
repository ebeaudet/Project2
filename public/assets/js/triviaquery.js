var axios = require("axios");

//Trivia categories correspond with API's numbering system
var triviaCategories = [9,10,11,12,14,15,17,18,19,20,21,22,23,24,25];
var randomCategoryArray = [];
var previousQuestions = [];
// placeholder for user input
var chosenCat = 1;
var questionCatOne = [];
var questionCatTwo = [];
var questionCatThree = [];

//Random category picks randomly from trivia array. If categoru already exists in the random category array already it runs again.
function randomCategory() {
  randomCat = Math.floor(Math.random() * triviaCategories.length + 1);
  // console.log(randomCat);
  if (randomCategoryArray.indexOf(randomCat) > -1) {
    randomCategory();
  }
}

// populate cats empties the randomCategoryArray, then picks three random categories and pushes them to the random category array. the if statement in the previously defined randomCategory function makes sure that they are unique. Every time we run populateCats, three random, unique intergers from 1 to the length of the triviaCategories are array are generated and pushed to the randomCategoryArray.

function populateCats() {
  randomCategoryArray = [];
  randomCategory();
  randomCategoryArray.push(randomCat);
  randomCategory();
  randomCategoryArray.push(randomCat);
  randomCategory();
  randomCategoryArray.push(randomCat);
}

populateCats();
// console.log(randomCategoryArray);

// beginning of the query just needs a category code number added to the end to return a single random question from the opentdb API. This never changes.
var queryStatic =
  "https://opentdb.com/api.php?amount=1&type=multiple&category=";
// second part of the query is determined by the user's choice from one of the three random categories
var queryCat = triviaCategories[randomCategoryArray[chosenCat]];
// queryURL puts the two halves together
var queryUrl = queryStatic + queryCat;

function getQuestion() {
  axios.get(queryUrl).then(function(response) {
    if (
      // because the API does not provide a unique ID for each question, we use the correct answer as our unique identifier. We check to make sure that the correct answer of this question exists in the empty previousQuestions array in the if statement. If it is, the function restarts and randomly selects another.
      previousQuestions.indexOf(response.data.results[0].correct_answer) > -1
    ) {
      getQuestion();
    } else {
      // If it isn't we, push it into the array in the else statement.
      previousQuestions.push(response.data.results[0].correct_answer);
      if ((chosenCat = 0)) {
        questionCatOne.push(response.data.results[0]);
      } else if ((chosenCat = 1)) {
        questionCatTwo.push(response.data.results[0]);
      } else if ((chosenCat = 2)) {
        questionCatThree.push(response.data.results[0]);
      }
      console.log("Question: " + questionCatTwo[0].question);
      // console.log("Choices: " +questionCatTwo.results[0].correct_answer 
          // " " +
          // questionCatTwo.results[0].incorrect_answers[0] +
          // " " +
          // questionCatTwo.results[0].incorrect_answers[1] +
          // " " +
          // questionCatTwo.results[0].incorrect_answers[2] +
      // " "
    }
  });
}

function questionPopulator() {
  getQuestion();
  getQuestion();
  getQuestion();
}

document.getElementById("buttonOne").onclick = function() {
  questionPopulator();
};

var value = questionCatOne + questionCatTwo + questionCatThree;

document.getElementById("buttonTwo").onclick = function() {
  console.log(value);
};

// ("#buttonOne").on("click", function(event) {
//   event.preventDefault();
//   questionPopulator();
//   };

//   ("#buttonTwo").on("click", function(event) {
//     event.preventDefault();
//     questionPopulator();
//     };

// console.log("cat one: " + questionCatOne);
// console.log("cat two: " + questionCatTwo);
// console.log("cat three: " + questionCatThree);

// function questionPopulator() {
//   chosenCat = 1;
//   getQuestion();
//   getQuestion();
//   getQuestion();
// }

// function questionPopulator() {
//   chosenCat = 2;
//   getQuestion();
//   getQuestion();
//   getQuestion();
// }

// console.log(questionCatOne + questionCatTwo + questionCatThree);

// newQuestion();
// console.log(previousQuestions);
