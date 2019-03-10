
// // $(document).ready(function () {
//     var triviaCategories = {
//         9: "General Knowledge",
//         10: "Entertainment: Books",
//         11: "Entertainment: Film",
//         12: "Entertainment: Music",
//         14: "Entertainment: Television",
//         15: "Entertainment: Video Games",
//         17: "Science & Nature",
//         18: "Science: Computers",
//         19: "Science: Mathematics",
//         20: "Mythology",
//         21: "Sports",
//         22: "Geography",
//         23: "History",
//         24: "Politics",
//         25: "Art"
//     };

//     var randomCategoryArray = [];
//     function randomCategory() {
//         randomCat = Math.floor(Math.random() * triviaCategories.length + 1);
//         // console.log(randomCat);
//         if (randomCategoryArray.indexOf(randomCat) > -1) {
//             randomCategory();
//         }
//     }




//     function populateCats() {
//         randomCategoryArray = [];
//         randomCategory();
//         randomCategoryArray.push(randomCat);
//         randomCategory();
//         randomCategoryArray.push(randomCat);
//         randomCategory();
//         randomCategoryArray.push(randomCat);
//         randomCategory();
//         randomCategoryArray.push(randomCat);
//         console.log(randomCategoryArray);
//     }



//     populateCats();


//And their corresponding codes for API calls
// var triviaCodes = [9, 10, 11, 12, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// // var randomCategoryArray = [];
// var randomCategoryCodes = [];

// //Random category picks randomly from trivia array. If category already exists in the random category array already it runs again.
// function randomCategory() {
//   randomCat = Math.floor(Math.random() * triviaCodes.length + 1);
//   if (randomCategoryArray.indexOf(triviaCodes[randomCat - 1]) > -1) {
//     randomCategory();
//   }
// }
// // populate cats empties the randomCategoryArray, then picks three random categories and pushes them to the random category array. the if statement in the previously defined randomCategory function makes sure that they are unique. Every time we run populateCats, three random, unique intergers from 1 to the length of the triviaCategories are array are generated and pushed to the randomCategoryArray.

// function populateCats() {
//   // randomCategoryArray = [];
//   randomCategoryCodes = [];
//   var i;
//   for (i = 0; i < 4; i++) {
//     randomCategory();
//     // randomCategoryArray.push(triviaCategories[randomCat - 1]);
//     randomCategoryCodes.push(triviaCodes[randomCat - 1]);
//   }
//   // console.log(randomCategoryArray);
//   console.log(randomCategoryCodes);
  

// });

// $(document).on("click", ".catColOne", function (e) {

// var 


// $(function () {
//     $(".col-md-4 box").on("click", function (event) {
//         var id = $(this).data("id");
//         var newStatus = $(this).data("devoured");

//         var newBurgerState = {
//             status: newStatus
//         };

//         // Send the PUT request.
//         $.ajax("/api/burgers/" + id, {
//             type: "PUT",
//             data: newBurgerState
//         }).then(
//             function () {
//                 console.log("changed burger status", newStatus);
//                 // Reload the page to get the updated list
//                 location.reload();
//             }
//         );
//     });

//     $("#submitBtn").on("click", function (event) {
//         // Make sure to preventDefault on a submit event.
//         event.preventDefault();

//         var newBurger = {
//             burger_name: $("#burgerName").val().trim(),
//             devoured: false
//         };
//         //check to see if burger name exists
//         if (newBurger.burger_name.length > 0) {
//             // Send the POST request.
//             $.ajax("/api/burgers", {
//                 type: "POST",
//                 data: newBurger
//             }).then(
//                 function () {
//                     console.log("created new Burger");
//                     // Reload the page to get the updated list
//                     location.reload();
//                 }
//             );
//         }
//         else {
//             alert("Submit form cannot be empty. Please fill me up - OM NOM NOM!");
//         }

//     });

//     $(".remove-burger").on("click", function (event) {
//         var id = $(this).data("id");

//         // Send the DELETE request.
//         $.ajax("/api/burgers/" + id, {
//             type: "DELETE"
//         }).then(
//             function () {
//                 console.log("deleted burger", id);
//                 // Reload the page to get the updated list
//                 location.reload();
//             })
//     });
// })