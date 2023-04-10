PROG 2700                                                                                    ASSIGN 5B     
CLIENT SIDE PROGRAMMING
						   
Objective
The following assignment focuses on completion and expansion of the tic-tac-toe example created in class. You will complete this tutorial and then complete additional tasks to add functionality to the game.
Instructions 

1.	As per your instructor’s direction in class, you will create a create-react-app starter application in which you will complete the tutorial steps. Your instructor will provide a walkthrough and discussion of the tutorial up to but not including the section called Adding Time Travel. Refer to the class recordings for if you miss any of those classes.

2.	On your own, you will complete the React Tic-tac-toe tutorial by finishing the steps in the final section called Adding Time Travel (https://reactjs.org/tutorial/tutorial.html#adding-time-travel). You will demonstrate the implemented time travel functionality as part of the code review.

3.	Once you have completed the tutorial, you will add the following four(4) enhancement requirements to the Tic-Tac-Toe game. They are listed in order of difficulty.


Enhancement #1
Refactor the project to create separate files per component that are imported by other components.
•	Move the Game, Board, and Square components to their own files named Game.js, Board.js, and Square.js. Provide the appropriate exports and imports so that the game functions correctly after refactoring.

    
 

Enhancement #2
Add a stateless functional component called ‘MoveCounter’ to the application which accurately displays the number of moves for each player at any given moment in the game.
•	The counter should update immediately after each new move by a player.
•	The counter should update to reflect a past point in the game if one of the time travel history buttons is pressed.
 
Enhancement #3
Inform with a message when there is no winner in the game…ie. The game ends in a draw.
•	Currently, the game does not give a final message when a draw is reached. Modify the application so that it provides an appropriate Draw message.

 

Enhancement #4
Highlight the winning row when a player wins the game
•	If a player should win the game, in addition to displaying the winner (which is already implemented), highlight the row of squares that caused the win.

 
