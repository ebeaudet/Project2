// var questionObj = {

//     category: "",
//     question: "",
//     correct: "",
//     incorrect: []

// };


function pullQuestionsAPI() {

    var queryURL = "https://opentdb.com/api.php?amount=10&type=multiple";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After data comes back from the request
        .then(function (response) {
            console.log(queryURL);

            // console.log(response);

            var results = response.results;
            console.log(results);


            
            for (var i = 0; i < results.length; i++) {
                // console.log(results.length)
                var category = results[i].category;
                console.log(category);
                var question = results[i].question
                console.log(question);

                var correct = results[i].correct_answer
                console.log(correct);

                var incorrect = results[i].incorrect_answers;
                // var incorrectArr = []
                console.log(incorrect);

                
                var questionObj = {};
                // incorrectArr.push(incorrect)
                // console.log(incorrectArr);
                questionObj.incorrect = incorrect
                questionObj.correct = correct
                questionObj.question = question
                questionObj.category = category
                console.log(questionObj)

            }

            
                
        })

}



pullQuestionsAPI();









