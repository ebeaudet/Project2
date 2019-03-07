// Page elements
var $newPlayerName = $("#example-text");
var $newPlayerButton = $("#example-text");
var $highscores = $("#example-text");
var $deletePlayer = $(".player");

// The API object contains methods for each kind of request we'll make
var API = {
  savePlayer: function(player) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/players",
      data: JSON.stringify(player)
    });
  },
  getPlayers: function() {
    return $.ajax({
      url: "api/players",
      type: "GET"
    });
  },
  deletePlayer: function(id) {
    return $.ajax({
      url: "api/players/" + id,
      type: "DELETE"
    });
  }
};

// refreshPlayers gets new examples from the db and repopulates the list
var refreshPlayers = function() {
  API.getPlayers().then(function(data) {
    var $players = data.map(function(player) {

      var $row = $("<div>");
      $row.addClass("player");

      $row.append("<p>" + player.playerName + " </p>");
      $row.append("<p>Score: " + player.score + "</p>");
      $row.append("<p>Wins: " + player.wins + "</p>");
      $row.append("<p>Losses: " + player.losses + "</p>");
      $row.append("<button data-id="+player.id+" class=player>"+x+"</button>");

      return $row;
    });

    $highscores.empty();
    $highscores.append($players);
  });
};

// Save the new player to the db and refresh the highscore
var playerFormSubmit = function(event) {
  event.preventDefault();

  var newPlayer = {
    playerName: $newPlayerName.val().trim(),
    round: 0
  }

  if (!player.playerName) {
    alert("You must enter a player name!");
    return;
  }

  API.savePlayer(player).then(function() {
    refreshPlayers();
  });

  $newPlayerName.val("");
};

// Remove a player from the highscore list and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .attr("data-id");

  API.deletePlayer(idToDelete).then(function() {
    refreshPlayers();
  });
};

// Add event listeners to the submit and delete buttons
$newPlayerButton.on("click", playerFormSubmit);
$deletePlayer.on("click", ".delete", handleDeleteBtnClick);
