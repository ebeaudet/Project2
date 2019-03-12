$(document).ready(function() {
  // first we ping our API for all of its available categories
  var catQueryUrl = "https://opentdb.com/api_category.php";
  $.ajax({
    url: catQueryUrl,
    method: "GET"
  })
    // after data comes back from the request
    .then(function(response) {
      // console.log(catQueryUrl);

      // console.log(response);
      // we store the data from the AJAX request in the results variable
      var results = response.trivia_categories;
      // console.log(results);
      // empty arrays for the category position, category string, and category ID
      var catBox = [];
      var catBoxString = [];
      var catBoxCode = [];

      // randomCategory function picks a random category, and makes sure that it is not a repeat of previous a previous random category
      function randomCategory() {
        randomCat = Math.floor(
          Math.random() * response.trivia_categories.length + 1
        );
        if (catBox.indexOf(randomCat) > -1) {
          randomCategory();
        }
      }

      // a for loop runs and populates eacj array with its respective data
      for (var i = 0; i < 4; i++) {
        randomCategory();
        // console.log(randomCat);
        catBox.push(randomCat);
        catBoxCode.push(response.trivia_categories[randomCat - 1].id);
        catBoxString.push(response.trivia_categories[randomCat - 1].name);
      }

      // we append the category strings to their appropriate dom elements
      $("#catOne").append(catBoxString[0]);
      $("#catTwo").append(catBoxString[1]);
      $("#catThree").append(catBoxString[2]);
      $("#catFour").append(catBoxString[3]);

      // we declate an empty array for question URLS, then use a series of for loops to populate it using the category codes from earlier
      var questionURLs = [];
      function easyQs() {
        for (i = 0; i < 4; i++) {
          var easyURL =
            "https://opentdb.com/api.php?amount=1&type=multiple&category=" +
            catBoxCode[i] +
            "&difficulty=easy";
          questionURLs.push(easyURL);
        }
      }
      function mediumQs() {
        for (i = 0; i < 4; i++) {
          var mediumURL =
            "https://opentdb.com/api.php?amount=1&type=multiple&category=" +
            catBoxCode[i] +
            "&difficulty=medium";
          questionURLs.push(mediumURL);
        }
      }
      function hardQs() {
        for (i = 0; i < 4; i++) {
          var hardURL =
            "https://opentdb.com/api.php?amount=1&type=multiple&category=" +
            catBoxCode[i] +
            "&difficulty=hard";
          questionURLs.push(hardURL);
        }
      }
      easyQs();
      mediumQs();
      hardQs();

      console.log(questionURLs);
    });
});
