function pullQuestionsAPI() {
  var queryURL = "https://opentdb.com/api.php?amount=1&type=multiple";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .then(function(response) {
      console.log(queryURL);

      // console.log(response);

      var results = response.results;
      console.log(results);

      for (var i = 0; i < results.length; i++) {
        // console.log(results.length)
        var category = results[i].category;
        console.log(category);
        var question = results[i].question;
        console.log(question);

        var correct = results[i].correct_answer;
        console.log(correct);

        var incorrect = results[i].incorrect_answers;
        // var incorrectArr = []
        console.log(incorrect);

        var allAnswers = [];
        var questionObj = {};
        // incorrectArr.push(incorrect)
        // console.log(incorrectArr); 
        questionObj.incorrect = incorrect;
        questionObj.correct = correct;
        questionObj.question = question;
        questionObj.category = category;
        console.log(questionObj);
        allAnswers.push(correct);
        console.log("this is the correct answer " + allAnswers);

        for (var j = 0; j < questionObj.incorrect.length; j++) {
          allAnswers.push(questionObj.incorrect[j]);
        }
      }

      $("#category").append(category);
      $(".questionDiv").append(question);

      for (var i = 0; i < allAnswers.length; i++) {
        console.log("these are all " + allAnswers);
        var answersDiv = $("<div>");
        var answer = Math.floor(Math.random() * allAnswers.length);
        var button = $("<button>");
        button.text(allAnswers[i]);
        console.log(answer[i]);
        answersDiv.append(button);
        $(".answers").append(answersDiv);
        button.addClass("btnAnswer btn-primary");
      }

      $("#questionModal").modal("show");
    });
}

pullQuestionsAPI();
