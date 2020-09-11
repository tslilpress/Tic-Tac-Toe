# Tic Tac Toe: A digital version of the classic and most lovable game in the world, TIC TAC TOE!!
This application allows a player to sign up and sign in with their email and a password,
change their password and play the game tic tac toe with themselves or with a friend(not remote).
They can start as many games as they want and can view the number of games they've played every time
they start a new game.
I created this application while taking a Software Engineering Immersive course at General Assembly.
This is my first application and it was assigned to me by the school.

## Important Links
[Deployed Site](https://tslilpress.github.io/Tic-Tac-Toe/)

## Planning Story
I was given a suggested schedule for how to build the project and I followed it, mostly.
Starting with a wireframe of the app, then creating the user stories, making sure that I get
every neccesary requirement.
Once I had a good idea of the general set up I started with creating the authentications for the api
for each request I needed (i.e sign-up, sign-in, sign-out etc..). Next I designed my board in html
css then on to the fun stuff!!
I tracked the board in javascript and created click handlers for when the board is clicked, made
sure the player can't click on invalid spaces and that the game is being updated when spaces are
clicked.
Next I created a current player that I can keep track of and is able to switch between x's and
o's. Made sure the player can't click on an occupied spaces and that the winner or is determined.
Added messages when turns are switched or when there's a win or a tie, stoped the click event
when the game was over.
Lastly I created a request to show games played and created a message displaying it to the player.

### User Stories
- As a user I’d like to be able to sign up
- As a user I’d like to be able to sign in
- As a user I’d like to be able to sign out
- As a user I’d like to be able to change my password
- As a user I’d like to be able to start a game
- As a user I’d like to be able to rotate between X and O
- As a user I’d like to be notified who wins or if it’s a tie
- As a user I’d like to be able to see how many games I played
- As a user I’d like to be able to play a new game once the game is over or start a new
  game when I want to.

### Technologies Used
- HTML/CSS
- Sass
- JQuery
- Javascript
- Bootstrap
- AJAX
- Grunt
- Heroku
- cURL

### Unsolved Problems
- Would like to eventually make the site responsive on all platforms
- Would like to eventually add some sounds when clicking
- Would like to eventually allow a user to finish their unfinished games
- Would like to eventually allow a user to play against the computer
- Would like to eventually create an automatic sign-in on sign-up

### Wireframe
![wireframe:]()
