Memory Game Documentation
Overview

This repository contains the source code for a simple memory card game implemented using HTML, CSS, and JavaScript. The game features a grid of cards that the player can flip to reveal images. The goal is to match pairs of identical cards by remembering their positions and clicking on them. The game includes card flipping, matching logic, and a shuffle function to randomize the card positions.
Code Structure
DOM Elements

    cardsElements: Represents all the cards in the game.
    imagesElements: Represents all the images within the cards.

Global Variables

    cardOne and cardTwo: Variables to store the references to the first and second cards clicked.
    cardOneImage and cardTwoImage: Variables to store the image source URLs of the first and second cards.
    isPlaying: Flag to determine if the game is in progress.
    tries: Variable to count the number of tries made by the player.

Functions
flipCard(event)

    Flips the card when clicked.
    Pauses the game briefly, then resumes.

pauseGame()

    Pauses the game by disabling user interaction with the cards.

resumeGame()

    Resumes the game by re-enabling user interaction with the cards.
    Adjusts user interaction based on the card's state (active or not).

matchCards(a, b)

    Compares the image source URLs of two cards.
    If they match, marks the cards as active.
    If they don't match, marks the cards as error, then removes the error and active classes after a delay.

shuffleCards()

    Generates a random order for the card images.
    Dynamically assigns the shuffled images to the card elements.

resetGame()

    Resets the game state by clearing variables and removing the active class from all cards.
    Shuffles the cards to start a new game.
    Resumes the game.

Initialization

    Calls shuffleCards() to set up the initial random arrangement of cards.
    Adds a click event listener to each card element to handle card flipping.

How to Play

    Click on a card to reveal its image.
    Try to find another card with the same image.
    If the images match, the cards remain face up.
    If the images do not match, the cards flip back face down.
    Repeat until all pairs are matched.

Additional Features

    The game includes a check for the end of the game (tries == 8) to trigger a reset.
    The cards are dynamically shuffled to provide a different experience for each game.

Feel free to modify and expand upon this code as needed. If you have any questions or suggestions, please don't hesitate to reach out. Happy coding!