//script.js

var game = {
    stage: 1,
    combatants: [-1, -1],
    HP: [0, 0],
    attack: 0,
    players: [
        {name: "Booples McGee",
         player: false,
         enemy: false,
         isAlive: true,
         HP: 120,
         BAP: 20,
         CAP: 15,
         img: "assets/images/BM.png"}, //Images are relative to the HTML file
        {name: "Random Fedora",
         player: false,
         enemy: false,
         isAlive: true,
         HP: 100,
         BAP: 30,
         CAP: 20,
         img: "assets/images/fedora.png"},
        {name: "Bachelor Party",
         player: false,
         enemy: false,
         isAlive: true,
         HP: 140,
         BAP: 15,
         CAP: 25,
         img: "assets/images/BP.png"},
        {name: "Stretchy Death",
         player: false,
         enemy: false,
         isAlive: true,
         HP: 150,
         BAP: 35,
         CAP: 30,
         img: "assets/images/SD.png"}
    ],

    init: function() {
        this.stage = 1; //Step 1: show all the players
        this.buildChars();
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
        for(let i = 0; i < game.players.length; i++){
            var newCard = $("<div>");
            newCard.attr("id", "hero" + i); //#hero0, so jQuery knows who to set to display
            newCard.attr("class", "arena-char");

            //Health bar
            var healthContainer = $("<div>"); //The top third of newCard
            healthContainer.attr("class", "arena-char-third fopplebottom");
            var BSHealthContainer = $("<div>"); //Create the main BG progres bar
            BSHealthContainer.attr("class", "progress");
            var BSHealth = $("<div>"); //Create the actual progress bar
            BSHealth.attr("id", "hero-health" + i); //Target health bar every time a damage event occurs
            //Set the other required BS attributes for the health bar
            BSHealth.attr("class", "progress-bar bg-success");
            BSHealth.css("width", "100%");
            BSHealth.text("100%");
            //Make attachments
            BSHealthContainer.append(BSHealth);
            healthContainer.append(BSHealthContainer);

            //Image container
            var imageContainer = $("<div>");
            imageContainer.attr("class", "arena-char-third");
            var image = $("<img>");
            image.attr("src", game.players[i].img);
            imageContainer.append(image);

            //Name Container
            var nameContainer = $("<div>");
            nameContainer.attr("class", "arena-char-third");
            name = $("<h1>");
            name.text(game.players[i].name);
            nameContainer.append(name);

            //Build the card
            newCard.append(healthContainer);
            newCard.append(imageContainer);
            newCard.append(nameContainer);

            $("#arena-left").append(newCard);
        }

        //Add enemies to the right side of the arena, hidden
        for(let i = 0; i < game.players.length; i++){
            var newCard = $("<div>");
            newCard.attr("id", "opponent" + i); //#hero0, so jQuery knows who to set to display
            newCard.attr("class", "arena-char");

            //Health bar
            var healthContainer = $("<div>"); //The top third of newCard
            healthContainer.attr("class", "arena-char-third fopplebottom");
            var BSHealthContainer = $("<div>"); //Create the main BG progres bar
            BSHealthContainer.attr("class", "progress");
            var BSHealth = $("<div>"); //Create the actual progress bar
            BSHealth.attr("id", "hero-health" + i); //Target health bar every time a damage event occurs
            //Set the other required BS attributes for the health bar
            BSHealth.attr("class", "progress-bar bg-success");
            BSHealth.css("width", "100%");
            BSHealth.text("100%");
            //Make attachments
            BSHealthContainer.append(BSHealth);
            healthContainer.append(BSHealthContainer);

            //Image container
            var imageContainer = $("<div>");
            imageContainer.attr("class", "arena-char-third");
            var image = $("<img>");
            image.attr("src", game.players[i].img);
            imageContainer.append(image);

            //Name Container
            var nameContainer = $("<div>");
            nameContainer.attr("class", "arena-char-third");
            name = $("<h1>");
            name.text(game.players[i].name);
            nameContainer.append(name);

            //Build the card
            newCard.append(healthContainer);
            newCard.append(imageContainer);
            newCard.append(nameContainer);

            $("#arena-right").append(newCard);
        }


    }, //this.buildChars()

    executeStep: function() {
        //This function will fire in response to primarly click events
        switch(this.stage) {
            case 1: //Start a fresh game
                for(let i = 0; i < game.players.length; i++){
                    //Reveal the players
                    $("#player" + i).css("display", "block");
                }
                $("#first-line").text("Welcome to Star Wars: The RPG!");
                $("#second-line").text("Select your hero to begin.");
                $("#third-line").text("");
                break;
            case 2: //Player selected
                for(let i = 0; i < game.players.length; i++){
                    $("#player" + i).css("display", "none");
                    if(!game.players[i].player) {
                        $("#enemy" + i).css("display", "block"); //Show ONLY enemies who aren't the selected player
                    } else {
                        $("#hero" + i).css("display", "block");
                    }
                }
                $("#first-line").text("Now select your opponent to start the fight.");
                $("#second-line").text("");
                $("#third-line").text("");
                break;
            case 3: //Enemy selected
                for(let i = 0; i < game.players.length; i++){
                    if(game.players[i].enemy){
                        $("#opponent" + i).css("display", "block"); //Add enemy to the arena...
                        $("#enemy" + i).css("display", "none");//...and boot them out of the enemy area
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

//Set click events
for(let i = 0; i < game.players.length; i++) {
    $("#player" + i).on("click", function() {
        //Set stage 1 click events
        game.players[i].player = true;
        game.stage = 2;
        game.executeStep();
        game.combatants[0] = i;
        //console.log("Player Chosen: " + game.combatants[0]);

    });

    $("#enemy" + i).on("click", function() {
        game.players[i].enemy = true;
        game.stage = 3;
        game.executeStep();
        game.combatants[1] = i;
        console.log("Enemy Chosen: " + game.combatants[1]);
    });
}

$("#attack-btn").on("click", function() {
    if(game.stage === 4) {

    } else {
        alert("Please fill the arena");
    }
});

