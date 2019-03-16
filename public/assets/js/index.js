// Page elements
var $newPlayerName = $("#newPlayerName");
var $newPlayerButton = $("#newPlayerButton");

var $highscores = $("#highScores");
var $numPlayersButtons = $(".numPlayersButton");
var $numPlayersHeader = $("#numPlayersHeader");
var $newPlayerArea = $("#newPlayerArea");
var $currentPlayersArea = $("#currentPlayersArea");

var $startGame = $("#startGame");

var $playersInGame = $("#playersInGame");
var $playerList = $("#playerList");

// Variables
var numPlayers = 0;
var chosenPlayers = 0;
var currentPlayers = [];

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
  updatePlayer: function(player) {
    console.log(JSON.stringify(player));
    return $.ajax({
      type: "PUT",
      url: "api/players",
      data: player
    });
  },
  getPlayers: function() {
    return $.ajax({
      url: "api/players",
      type: "GET"
    });
  },
  getPlayer: function(playerId) {
    return $.ajax({
      url: "api/players/"+playerId,
      type: "GET"
    });
  },
  deletePlayer: function(playerId) {
    return $.ajax({
      url: "api/players/" + playerId,
      type: "DELETE"
    });
  }
};

API.getPlayers();

// refreshPlayers gets new examples from the db and repopulates the list
var refreshPlayers = function() {
  API.getPlayers().then(function(data) {
    var $players = data.map(function(player) {
      var $row = $("<span style='display: inline-block; padding: 5px; background: lightblue; border: 1px solid black'>");
      $row.addClass("player");
      $row.attr("id","player"+player.id);

      $row.append("<p>" + player.playerName + " </p>");
      $row.append("<p>Score: " + player.score + "</p>");
      $row.append("<p>Wins: " + player.wins + "</p>");
      $row.append("<p>Losses: " + player.losses + "</p>");
      $row.append("<button class='btn btn-success' onclick='playerChosen("+player.id+")'>Select</button>");
      $row.append("<button class='btn btn-danger ml-2' onclick='handleDeleteBtnClick("+player.id+")'>Remove</button>");

      return $row;
    });

    $highscores.empty();
    $highscores.append($players);
  });
};

// Reset all player's scores & round number to 0
var resetPlayers = function() {
  API.getPlayers().then(function(data) {
    for (var i = 0; i < data.length; i++) {
      console.log("Resetting round number & score of "+data[i].id);
      var player = {
        "id": data[i].id,
        "round": 0,
        "score": 0
      }
      API.updatePlayer(player);
    }
    currentPlayersList();
  });
}

// Gets the current player list on the game page
// currentPlayerIndex is 1 - 4
var currentPlayersList = function() {
  while ($playersInGame[0].firstChild) {
    $playersInGame[0].removeChild($playersInGame[0].firstChild);
  }

  API.getPlayers().then(function(data) {
    //console.log(data);
    currentPlayers = [];

    for (var i = 0; i < data.length; i++) {
      if (data[i].round > 0) {
        currentPlayers.push(data[i]);
      }
    }
    var lowestRoundPlayer = 0;
    for (var i = 1; i < currentPlayers.length; i++){
      if (currentPlayers[i].round < currentPlayers[lowestRoundPlayer].round) {
        lowestRoundPlayer = i;
      }
    }
    console.log(currentPlayers[lowestRoundPlayer].playerName + " is the current player");
    var sortedPlayers = [];
    while(sortedPlayers.length < currentPlayers.length) {
      sortedPlayers.push(currentPlayers[lowestRoundPlayer]);
      lowestRoundPlayer++;
      if (lowestRoundPlayer >= currentPlayers.length) {
        lowestRoundPlayer = 0;
      }
    }
    currentPlayers = sortedPlayers;

    for (var i = 0; i < sortedPlayers.length; i++) {
      var $row = $("<div>");
      $row.addClass("gamer");

      if (i == 0) {
        $row.append("<p id='curPlayer'>Current Player</p>");
        $row.attr("style","background-color:light purple; height:125px; margin-top:10px");
      } else {
        $row.attr("style","background-color:gray");
      }
      $row.append("<p class='gField'>" + sortedPlayers[i].playerName + " </p>");
      $row.append("<p class='gField'>Score: " + sortedPlayers[i].score + "</p>");
      $row.append("<p class='gField'>Wins: " + sortedPlayers[i].wins + "</p>");
      $row.append("<p class='gField'>Losses: " + sortedPlayers[i].losses + "</p>");
      $playersInGame.append($row);
    }

    switch(sortedPlayers.length) {
      case 1:
        $playerList.attr("style","height: 190px");
        break;
      case 2:
        $playerList.attr("style","height: 300px");
        break;
      case 3:
        $playerList.attr("style","height: 400px");
        break;
      case 4:
        $playerList.attr("style","height: 520px");
        break;
    }
    return sortedPlayers;
  });
}

// Save the new player to the db and refresh the highscore
var playerFormSubmit = function(event) {

  console.log("Creating new player: "+$newPlayerName.val().trim());
  event.preventDefault();

  var newPlayer = {
    "playerName": $newPlayerName.val().trim(),
    "score": 0,
    "round": 0,
    "wins": 0,
    "losses": 0
  }

  if (!newPlayer.playerName) {
    alert("You must enter a player name!");
    return;
  }

  API.savePlayer(newPlayer).then(function() {
    refreshPlayers();
  });

  $newPlayerName.val("");
  refreshPlayers();
};

// Remove a player from the highscore list and refresh the list
var handleDeleteBtnClick = function(id) {
  console.log("Deleting player");

  API.deletePlayer(id).then(function() {
    refreshPlayers();
  });
};

// Selecting number of players
var numPlayersChosen = function(quantity) {
  console.log("Number of players chosen!");
  console.log(quantity);
  numPlayers = quantity;
  $highscores.css("display", "block");
  $newPlayerArea.css("display", "block");
  $numPlayersButtons.css("display", "none");
  $numPlayersHeader.css("display", "none");
}

// Selecting unique player
var playerChosen = function(playerID) {
  $("#player"+playerID).css("display", "none");
  chosenPlayers++;

  setRound(playerID, 1);

  API.getPlayer(playerID).then(function(player) {
    currentPlayers.push(player);
  });

  if (chosenPlayers >= numPlayers) {
    console.log("All players selected");
    $highscores.css("display", "none");
    $startGame.css("display", "block");
    $newPlayerArea.css("display", "none");
    for (var i = 1; i <= currentPlayers.length; i++) {
      var $row = $("<span style='display: inline-block; padding: 5px; background: lightblue; border 1px solid black'>");
      $row.append("<p style='font-weight: bold;'>Player "+i+"</p>");
      $row.append("<p>" + currentPlayers[i-1].playerName + " </p>");
      $row.append("<p>Score: " + currentPlayers[i-1].score + "</p>");
      $row.append("<p><span style='padding: 2px';>Wins: " + currentPlayers[i-1].wins + "</span>"+
        "<span style='padding:2px;'>Losses: " + currentPlayers[i-1].losses +"</span></p>");
      $currentPlayersArea.append($row);
      $currentPlayersArea.append("<span style='font-weight: bold; font-size: 20px; padding: 3px'>VS</span>");
    }
    // It was being annoying and forgetting the last player... this fixes that (in a messy way)
    API.getPlayer(playerID).then(function(player) {
      var $row = $("<span style='display: inline-block; padding: 5px; background: lightblue; border: 1px solid black'>");
      $row.append("<p style='font-weight: bold;'>Player "+chosenPlayers+"</p>");
      $row.append("<p>" + player.playerName + " </p>");
      $row.append("<p>Score: " + player.score + "</p>");
      $row.append("<p><span style='padding: 2px';>Wins: " + player.wins + "</span>"+
        "<span style='padding:2px;'>Losses: " + player.losses +"</span></p>");
      $currentPlayersArea.append($row);
    });
  }
  console.log(currentPlayers);
}

var setRound = function(playerID, round) {
  console.log("Setting round number of "+playerID+" to "+round);
  var player = {
    "id": playerID,
    "round": round
  }
  API.updatePlayer(player);
  // refreshPlayers();
}

var addRound = function(playerID) {
  API.getPlayer(playerID).then(function(player) {
    var newRound = player.round + 1;
    setRound(playerID, newRound);
    currentPlayersList();
  });
  return true;
}

var setScore = function(playerID, score) {
  console.log("Setting score of "+playerID+" to "+score);
  var player = {
    "id": playerID,
    "score": score
  }
  API.updatePlayer(player);
  refreshPlayers();
}

var addScore = function(playerId, score) {
  API.getPlayer(playerId).then(function(player) {
    var newScore = score + player.score;
    setScore(playerId, newScore);
  });
}

var setWins = function(playerId, wins) {
  console.log("Setting wins of "+playerId+" to "+wins);
  var player = {
    "id": playerId,
    "wins": wins
  }
  API.updatePlayer(player);
  refreshPlayers();
}

var addWin = function(playerId) {
  API.getPlayer(playerId).then(function(player) {
    var newWins = player.wins + 1;
    setWins(playerId, newWins);
  });
}

var setLosses = function(playerId, losses) {
  console.log("Setting losses of "+playerId+" to "+losses);
  var player = {
    "id": playerId,
    "losses": losses
  }
  API.updatePlayer(player);
  refreshPlayers();
}

var addLoss = function(playerId) {
  API.getPlayer(playerId).then(function(player) {
    var newLosses = player.losses + 1;
    setLosses(playerId, newLosses);
  });
}


var answerQuestion = function(correct, idOfBox, score){
  console.log("Answered question");
  console.log("Is Correct? "+correct);
  if (correct) {
    addScore(currentPlayers[0].id, score);
    addRound(currentPlayers[0].id);

  } else {
    addScore(currentPlayers[0].id, score);
    addRound(currentPlayers[0].id);
  }
  $("#"+idOfBox.id).css('visibility','hidden');
  $("#questionModal").modal("hide");
}

// Add event listeners to the submit and delete buttons
$newPlayerButton.on("click", playerFormSubmit);
refreshPlayers();
currentPlayersList();
//
// module.exports.data = methods;
