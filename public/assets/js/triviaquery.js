$(document).ready(function () {

  // var category = 12;
  // var difficulty = "easy";
  var queryURL = "https://opentdb.com/api.php?amount=10";
  var catQueryUrl = "https://opentdb.com/api_category.php"
  // var queryCat = "&category=" + category;
  // var queryDiff = "&difficulty=" + difficulty;
  // var multi = "&type=multiple"

  $.ajax({
    url: catQueryUrl,
    method: "GET"
  })
    // After data comes back from the request
    .then(function (response) {
      console.log(catQueryUrl);

      console.log(response);
      // storing the data from the AJAX request in the results variable
      var results = response.trivia_categories;
      console.log(results);
      var catbox = [];


      // if (randomCat.indexOf(catbox[randomCat - 1]) > -1) {
      //       randomCategory();
      // Looping through each result item
      for (var i = 0; i < 4; i++) {

        var randomCat = Math.floor(Math.random() * results.length);
        console.log("random cat " + randomCat);

        var catId = results[i].id
        console.log("cat Id " + catId);

        var catName = results[randomCat].name;
        catbox.push(catName);
        console.log("cat name " + catName)

      }

      $("#catOne").append(catbox[0]);
      $("#catTwo").append(catbox[1]);
      $("#catThree").append(catbox[2]);
      $("#catFour").append(catbox[3]);
    })



})




// $(".catColOne").addClass("&category="+ catbox[0]);
// $(".catColTwo").addClass("&category="+ catbox[1]);
// $(".catColThree").addClass("&category="+ catbox[2]);
// $(".catColFour").addClass("&category="+ catbox[3]);


      //     $("#c1q1").addClass("&category=" + randomCategoryCodes[0]);
//     $("#c1q1", "c1q2", "c1q3").data(
//       "category",
//       "&category=" + randomCategoryCodes[0]
//     );
//     $("#c2q1", "c2q2", "c2q3").data(
//       "category",
//       "&category=" + randomCategoryCodes[1]
//     );
//     $("#c3q1", "c3q2", "c3q3").data(
//       "category",
//       "&category=" + randomCategoryCodes[2]
//     );
//     $("#c1q4", "c1q4", "c1q4").data(
//       "category",
//       "&category=" + randomCategoryCodes[3]
//     );
//     console.log("c1q4 data right here" + $("#c1q4").data());
//   }

//   populateCats();

//   // temporary defaults for category and difficulty
//   var category = 12;
//   var difficulty = "easy";
//   var queryStart = "https://opentdb.com/api.php?amount=1&type=multiple";
//   var queryCat = "&category=" + category;
//   var queryDiff = "&difficulty=" + difficulty;

//   // queryURL puts the two halves together
//   var queryUrl = queryStart + queryCat + queryDiff;
//   console.log(queryUrl);

//   function getQuestion(queryCat, queryDiff) {
//     $.get(queryStart + queryCat + queryDiff, function(data) {
//       console.log("Posts", data);
//     });
//   }
//   getQuestion(queryCat, queryDiff);
//   getQuestion("&category=" + 14, "&difficulty=hard");
// });
