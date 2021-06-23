// The code below is to get a few items by targeting the classes assigned to the divs
const date_picker_element = document.querySelector('.date-picker');

const selected_date_element = document.querySelector('date-picker .selected-date');

const dates_element = document.querySelector('.date-picker .dates');

// To get more elements

const mth_element = document.querySelector('.date-picker .dates .month .mth');
const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
const prev_element = document.querySelector('.date-picker .dates .month .prev-mth');
const days_element = document.querySelector('.date-picker .dates .days');
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// To give us the current day
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = date;
let selectedMonth = date;
let selectedYear = date;

// Here I'm getting the month and it will return which month it is which will be June and then add the Year to the string.
mth_element.textContent = months[month] + ' ' + year;


// Event Listener codes

// Setting up a toggle by using Event Listeners upon click!
date_picker_element.addEventListener('click', toggleDatePicker);
// Now I will get the next month element
next_mth_element.addEventListener('click', goToNextMonth)



// Function Codes
// toggleDatePicker is passed through (e) Event
function toggleDatePicker (e) {
    if (!checkEventPathForClass(e.path, 'dates')){
        dates_element.classList.toggle('active');
    }
    
}

// Helper Functions

//This function will check the EVENT path so where I click, it will give me the path
// of where I clicked. I if I clicked an element in the DatePicker it will tell me the whole
// path of what the parents are of every single file from the element I clicked.
function checkEventPathForClass (path, selector) {
    for (let i=0; i < path.length; i++) {
// Here I loop through every single item in the path and check that the class exist and then it checks the 
// class path list which contains the selector which it will pass through!
        if (path[i].classList && path[i].classList.contains(selector)) {
            return true;
        }
    }
    return false;
}