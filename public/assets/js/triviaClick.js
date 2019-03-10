
// $(document).ready(function () {
    var triviaCategories = {
        9: "General Knowledge",
        10: "Entertainment: Books",
        11: "Entertainment: Film",
        12: "Entertainment: Music",
        14: "Entertainment: Television",
        15: "Entertainment: Video Games",
        17: "Science & Nature",
        18: "Science: Computers",
        19: "Science: Mathematics",
        20: "Mythology",
        21: "Sports",
        22: "Geography",
        23: "History",
        24: "Politics",
        25: "Art"
    };

    var randomCategoryArray = [];
    function randomCategory() {
        randomCat = Math.floor(Math.random() * triviaCategories.length + 1);
        // console.log(randomCat);
        if (randomCategoryArray.indexOf(randomCat) > -1) {
            randomCategory();
        }
    }




    function populateCats() {
        randomCategoryArray = [];
        randomCategory();
        randomCategoryArray.push(randomCat);
        randomCategory();
        randomCategoryArray.push(randomCat);
        randomCategory();
        randomCategoryArray.push(randomCat);
        randomCategory();
        randomCategoryArray.push(randomCat);
        console.log(randomCategoryArray);
    }



    populateCats();

// });


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