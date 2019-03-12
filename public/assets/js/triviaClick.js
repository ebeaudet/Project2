function pullQuestionsAPI() {
  var queryURL = "https://opentdb.com/api.php?amount=1&type=multiple";

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .then(function(response) {
      var results = response.results;

      for (var i = 0; i < results.length; i++) {
        var category = results[i].category;
        var question = results[i].question;
        var correct = results[i].correct_answer;
        var incorrect = results[i].incorrect_answers;
        var allAnswers = [];
        var questionObj = {};

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
        console.log("these are all " + allAnswers);i
        var answersDiv = $("<div>");
        var answer = Math.floor(Math.random() * (allAnswers.length - 1));
        var button = $("<button>");
        button.text(allAnswers[answer]);
        console.log(allAnswers[answer]);
        answersDiv.append(button);
        $(".answers").append(answersDiv);
        button.addClass("btnAnswer btn-primary");
      }

      $("#questionModal").modal("show");
    });
}

pullQuestionsAPI();
