// Display current date for the scheduler
function displayDate() {
    var currentTime = moment().format("MMM Do YY");
    $('#currentDay').text(currentTime);
}
// Call function to display the current date
displayDate();

// Array for hours
var displayTime = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']

// Function to display scheduler structure and format
function renderPage() {
    // For loop to display css structure for the columns and rows.
    for (let i = 9; i < 18; i++) {
        $('<div>', {
            id: `hour-${i}`,
            class: 'row time-block past'
        }).append($('<div>', {
            class: 'col-md-1 hour',
            text: `${displayTime[i - 9]}`
        })).append($('<textarea>', {
            class: 'col-md-10 description'
        })).append($('<button>', {
            class: 'button saveBtn col-md-1',
            text: 'Save'
        })).appendTo('.container');

        // Save button is clicked, typed notes saved to local storage.
        $('.button').on('click', function () {
            var input = `${displayTime[i - 9]}`;
            var output = $(this).siblings('textarea').val();
            localStorage.setItem(input, output);
        });

        // Textarea color transition for past, present, and future hours (grabs variable using template literals).
        if (moment().format('H') == i) {
            $(`#hour-${i}`).addClass('present');
        } else if (moment().format('H') > i) {
            $(`#hour-${i}`).addClass('past');
        } else {
            $(`#hour-${i}`).addClass('future');
        }

        // Get value for key in local storage
        var input = `${displayTime[i - 9]}`;
        localStorage.getItem(input);
    }
}
// Call function to display structure of page
renderPage();
