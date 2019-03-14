function pullQuestionsAPI(queryURL) {

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .then(function(response) {
      var results = response.results;

      for (var i = 0; i < results.length; i++) {
        var questionObj = results[0];
        var allAnswers = questionObj.incorrect_answers;
        allAnswers.push(questionObj.correct_answer);
      }

      $("#category").empty();
      $("#category").append(questionObj.category);
      $(".questionDiv").empty();
      $(".questionDiv").append(questionObj.question);
      $(".answers").empty();
      var html;
      var isCorrect;

      //shuffle all answers order
      shuffle(allAnswers);
      for (var i = 0; i < allAnswers.length; i++) {
        isCorrect = (allAnswers[i] === questionObj.correct_answer) ? "correct" : "incorrect"
        html = `<div>
                    <button class="btnAnswer btn-primary ${isCorrect}">${allAnswers[i]}</button>
                </div>`
        $(".answers").append(html);
      }

      $("#questionModal").modal("show");
    });
}
//https://www.frankmitchell.org/2015/01/fisher-yates/
function shuffle (array) {
    var i = 0, j = 0, temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}

$(document).on("click", ".box", function(e) {
    console.log("clicked");
    var url = e.target.dataset.url;
    pullQuestionsAPI(url);

    //      $(".box").hide();

});
