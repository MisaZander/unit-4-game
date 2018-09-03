//script.js

var game = {
    stage: 1,
    players: [
        {name: "Booples McGee",
         player: false,
         HP: 120,
         BAP: 20,
         CAP: 15,
         img: "assets/images/BM.png"}, //Images are relative to the HTML file
        {name: "Random Fedora",
         player: false,
         HP: 100,
         BAP: 30,
         CAP: 20,
         img: "assets/images/fedora.png"},
        {name: "Bachelor Party",
         player: false,
         HP: 140,
         BAP: 15,
         CAP: 25,
         img: "assets/images/BP.png"},
        {name: "Stretchy Death",
         player: false,
         HP: 150,
         BAP: 35,
         CAP: 30,
         img: "assets/images/SD.png"}
    ],

    init: function() {
        this.stage = 1; //Step 1: show all the players
        this.buildChars();
        this.executeStep();

        //For debugging: Choose Booples as the player and show the enemies
        this.players[0].player = true;
        this.stage = 2; //Stage 2: player selected, show the enemies
        this.executeStep();
    },

    buildChars: function() {
        //Create all the character divs, add them, and hide them
        for(let i = 0; i < game.players.length; i++){
            var newCard = $("<div>");
            newCard.attr("id", "player" + i);
            newCard.attr("class", "char-card");

            //Create the top of the card, the name div
            var nameDiv = $("<div>");
            nameDiv.attr("class", "char-text");
            var name = $("<p>");
            name.attr("class", "player-text");
            name.text(game.players[i].name);
            nameDiv.append(name);
            newCard.append(nameDiv);

            //Add the image to the card
            var imgDiv = $("<div>");
            imgDiv.attr("class", "char-img");
            var image = $("<img>");
            image.attr("src", game.players[i].img);
            imgDiv.append(image);
            newCard.append(imgDiv);

            //Finally, add the stats to the bottom
            var statDiv = $("<div>");
            statDiv.attr("class", "char-text");
            var stat = $("<p>");
            stat.attr("class", "player-text");
            stat.text("HP: " + game.players[i].HP);
            statDiv.append(stat);
            newCard.append(statDiv);

            //Tack the new character card into player selection
            $("#humans").append(newCard);
        } //Human for loop

        //Enemy builder
        for(let i = 0; i < game.players.length; i++){
            var newCard = $("<div>");
            newCard.attr("id", "enemy" + i);
            newCard.attr("class", "char-card");

            //Create the top of the card, the name div
            var nameDiv = $("<div>");
            nameDiv.attr("class", "char-text");
            var name = $("<p>");
            name.attr("class", "player-text");
            name.text(game.players[i].name);
            nameDiv.append(name);
            newCard.append(nameDiv);

            //Add the image to the card
            var imgDiv = $("<div>");
            imgDiv.attr("class", "char-img");
            var image = $("<img>");
            image.attr("src", game.players[i].img);
            imgDiv.append(image);
            newCard.append(imgDiv);

            //Finally, add the stats to the bottom
            var statDiv = $("<div>");
            statDiv.attr("class", "char-text");
            var stat = $("<p>");
            stat.attr("class", "player-text");
            stat.text("HP: " + game.players[i].HP);
            statDiv.append(stat);
            newCard.append(statDiv);

            //Tack the new character card into player selection
            $("#enemies").append(newCard);
        } //Enemy for loop

        //Add players to the left side of the arena, hidden
        


    }, //this.buildChars()

    executeStep: function() {
        //This function will fire in response to primarly click events
        switch(this.stage) {
            case 1: //Start a fresh game
                for(let i = 0; i < game.players.length; i++){
                    //Reveal the players
                    $("#player" + i).css("display", "block");
                }
                break;
            case 2:
                for(let i = 0; i < game.players.length; i++){
                    //Debugging: comment out the player hiding
                    //$("#player" + i).css("display", "none");
                    if(!game.players[i].player) {
                        $("#enemy" + i).css("display", "block"); //Show ONLY enemies who aren't the selected player
                    } 
                }
                break;
            default:
                alert("Oops, something went wrong! Please reload the page and fail the programmer responsible.");
                break;
        } //switch
    } //this.executeStep()
}; //game object

//main
game.init();