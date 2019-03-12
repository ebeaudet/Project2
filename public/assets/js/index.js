console.log("index file loaded");

// Page elements
var $newPlayerName = $("#newPlayerName");
var $newPlayerButton = $("#newPlayerButton");
var $highscores = $("#highScores");

// The API object contains methods for each kind of request we'll make
var API = {
  savePlayer: function(player) {
    console.log(JSON.stringify(player));
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/players",
      data: JSON.stringify(player)
    });
  },
  saveThis: function(player) {
    return $.ajax({
      method: "PUT",
      url: "/api/players",
      data: player
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

API.getPlayers();

// refreshPlayers gets new examples from the db and repopulates the list
var refreshPlayers = function() {
  console.log("getting players");
  API.getPlayers().then(function(data) {
    console.log(data);
    var $players = data.map(function(player) {
      console.log(player);
      var $row = $("<div>");
      $row.addClass("player");

      $row.append("<p>" + player.playerName + " </p>");
      $row.append("<p>Score: " + player.score + "</p>");
      $row.append("<p>Wins: " + player.wins + "</p>");
      $row.append("<p>Losses: " + player.losses + "</p>");
      $row.append("<button onclick='handleDeleteBtnClick("+player.id+")'>x</button>");

      return $row;
    });

    $highscores.empty();
    $highscores.append($players);
  });
};

// Save the new player to the db and refresh the highscore
var playerFormSubmit = function(event) {

  console.log("Creating new player");
  event.preventDefault();

  var newPlayer = {
    playerName: $newPlayerName.val().trim(),
    round: 0
  }

  if (!newPlayer.playerName) {
    alert("You must enter a player name!");
    return;
  }

  console.log(newPlayer);
  API.savePlayer(newPlayer).then(function() {
    refreshPlayers();
  });
  // API.saveThis(newPlayer).then(function() {
  //   refreshPlayers();
  // });

  $newPlayerName.val("");
};

// Remove a player from the highscore list and refresh the list
var handleDeleteBtnClick = function(id) {
  console.log("Deleting player");

  API.deletePlayer(id).then(function() {
    refreshPlayers();
  });
};

// Add event listeners to the submit and delete buttons
$newPlayerButton.on("click", playerFormSubmit);
refreshPlayers();
