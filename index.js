const prompt = require('readline-sync');

const maxGuesses = 3;
let currentGuess = 0;
const maxRange = 10;

let gameover = false;

let lose = () => {
  console.log("OH-NOOOOOoo.... Wa-hoo...\nYou lose ;_;");
  let action = prompt.question("\nDo you want to try again or game over? ");
  if (action === "try again"){
    console.log("Way to go!");
    game()
  }
  else if(action === "game over"){
    console.log("Thank you so much for playing my game!");
    gameover = true;
  }
  else {
    lose()
  }
}

let explore = () => {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber > 6){
    console.log("Found a treasure chest!!\n");  
  }
  else {
    console.log("Found nothing :(!\n");
  }
}

let combat = (enemy, option) => {
  let action = prompt.question(`You chose to fight ${enemy} What will you do? Punch or kick? `);
  if(action.toLowerCase() === option[0]){
    console.log(`${option[0]} Wins`);  
  }
  else {
    console.log("Its me Mario, try again"); 
    lose();
  } 
}

let game = () => {
  isExplore = false;
  steps = 0
  boswerChild = " " 
  //game header 
  console.log("Welcome to Mushroom Kingdom:\n");
  console.log("Hello Mario! You’ve been called to the castle because princess peach\n\
has been missing. Toad is waiting for you because you have to fight bowser,\n\
but first you will have to defeat his 2 children.\n");

  while (steps === 0 && gameover === false){
    let action = prompt.question("Who will you fight first: Wendy or Bowser jr.? ");

    switch(action.toLowerCase()){
      case "wendy":
        combat("Wendy", ["punch", "kick"]);
        boswerChild = "Bowser jr.";
        steps++;
        break;
      case "bowser jr.":
        combat("Bowser Jr.", ["kick", "punch"]);
        boswerChild = "Wendy";
        steps++;
        break;
      default:
        console.log("Its a-me Mario! Wa-hoo... ");
        console.log("Please choice 'Wendy' or 'Bowser jr.' ");
        break;
    }
    
  }

  if(gameover === false){
    console.log('\nThats amazing Mario, here’s a star!!\n'); 
    console.log(`You still have ${boswerChild} to fight.`);
  }

  while (steps === 1 && gameover === false){
    let action;
    if (isExplore === false){
      action = prompt.question(`What will you do, explore the castle or fight ${boswerChild}? `);
    } else{
      action = `${boswerChild}`;
    }

    switch(action.toLowerCase()){
      case "wendy":
        combat("Wendy", ["punch", "kick"]);
        boswerChild = "Bowser jr.";
        steps++;
        break;
      case "bowser jr.":
        combat("Bowser Jr.", ["kick", "punch"]);
        boswerChild = "Wendy";
        steps++;
        break;
      case "explore":
        explore();
        isExplore = true;
        break;
      default:
        console.log("Its a-me Mario! Wa-hoo... ");
        console.log(`Please choice 'explore' or '${boswerChild}' `);
        break;
    }
  }

  if(gameover === false){
    console.log('\nThats amazing Mario, here’s a star!!!\n\n'); 
  }

  while (steps === 2 && gameover === false){
    console.log("You made it to the end time to fight Bowser.");
    let action = prompt.question('What will you do: punch, kick, push, fire ball, ice ball? ');

    switch(action){
      case"punch":
      case"kick":
      case"push":
      case"ice ball":
        lose();
        steps++;
        break;
      case "fire ball":
        console.log("Great Job mario! You have defeated Bowser");        
        steps++;
        break;
      default:
        console.log("Its a-me Mario! Wa-hoo... ");
        console.log("Please choice punch, kick, push, fire ball, ice ball");
        break;
    }
  }

  if(gameover === false){
    console.log("You saved the princess! Congratulations!")
  }
}
game()