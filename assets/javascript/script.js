//script.js

var game = {
    stage: 1,
    players: [
        {name: "Booples McGee",
         player: false,
         HP: 120,
         BAP: 20,
         CAP: 15,
         img: "../images/BM.png"},
        {name: "Random Fedora",
         player: false,
         HP: 100,
         BAP: 30,
         CAP: 20,
         img: "../images/fedora.png"},
        {name: "Bachelor Party",
         player: false,
         HP: 140,
         BAP: 15,
         CAP: 25,
         img: "../images/BP.png"},
        {name: "Stretchy Death",
         player: false,
         HP: 150,
         BAP: 35,
         CAP: 30,
         img: "../images/SD.png"}
    ],

    init: function() {
        this.stage = 1;
        this.executeStep();
    },

    executeStep: function() {
        //This function will fire in response to primarly click events
        switch(this.stage) {
            case 1: //Start a fresh game
                break;
            default:
                alert("Oops, something went wrong! Please reload the page and fail the programmer responsible.");
                break;
        } //switch
    } //this.executeStep()
}; //game object



//main
game.init();