$(document).ready(function () {
  // first we ping our API for all of its available categories
  var catQueryUrl = "https://opentdb.com/api_category.php";
  $.ajax({
    url: catQueryUrl,
    method: "GET"
  })
    // after data comes back from the request
    .then(function (response) {
      // we store the data from the AJAX request in the results variable
      var results = response.trivia_categories;
  
      // empty arrays for the category position, category string, and category ID
      var catBox = [];
      var catBoxString = [];
      var catBoxCode = [];
      var randomCat = 0;

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

      //html and urls are now generated dynamically. The boxes in each column correspond to their respective category ID from catBoxCode array
      var html;
      function easyQs() {
        for (i = 0; i < 4; i++) {
          var easyURL =
            "https://opentdb.com/api.php?amount=1&type=multiple&category=" +
            catBoxCode[i] +
            "&difficulty=easy";
          html = `  <div class="col-md-4 box catColOne easy" data-url=${easyURL}>
                        <span class="amt">$100</span>
                    </div>`
          $("#easyQuestions").append(html)
        }
      }

      function mediumQs() {
        for (i = 0; i < 4; i++) {
          var mediumURL =
            "https://opentdb.com/api.php?amount=1&type=multiple&category=" +
            catBoxCode[i] +
            "&difficulty=medium";
          html = `<div class="col-md-4 box catColOne medium" data-url=${mediumURL}>
                      <span class="amt">$200</span>
                  </div>`
          $("#mediumQuestions").append(html)
        }
      }
      function hardQs() {
        for (i = 0; i < 4; i++) {
          var hardURL =
            "https://opentdb.com/api.php?amount=1&type=multiple&category=" +
            catBoxCode[i] +
            "&difficulty=hard";
          html = `<div class="col-md-4 box catColOne hard" data-url=${hardURL}>
                      <span class="amt">$300</span>
                  </div>`
          $("#hardQuestions").append(html)
        }
      }
      easyQs();
      mediumQs();
      hardQs();

    });
});
