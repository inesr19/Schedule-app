## Work Day Scheduler

### Description

The purpose of this project was to create a scheduler that displayed each business hour during a given day with possible notes to save. The scheduler uses a moment.js format to update the current date and time.  Each hour has a text-box where the user can add notes and save those notes by clicking on the “save” button. The notes are then saved in the local storage where the user can access them on their computer. The scheduler also keeps track of what hour it is by setting the textarea grey for hours past, red for the present hour, and green for the future hours. 

### Screenshot

![scheduler page screenshot](https://github.com/inesr19/Schedule-app/blob/main/Assets/Images/scheduler-app.png)

### Changes Made - Javascript Source Code

1. Added a function to display the current date using moment.js and the give html.
2. Added an array with strings of business hours and set it equal to a variable.
3. Created a function to render the page’s structure and formatting.
4. Created a for loop inside the function to display rows, columns, & other features using the given css file.
5. Added a local storage to save notes when the save button has been clicked (‘click’ function).
6. Added if, else if, and else statements to correlate the current time with the appropriate textarea color that it should be according to the css file.
7. Included a localStorage.getItem() to get the appropriate value for the set key.
8. Called the entire function so that all of the additions would display on the page.

### Link

<https://inesr19.github.io/Schedule-app/>