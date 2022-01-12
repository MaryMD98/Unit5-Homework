// Calendar Application

var currentDayEl = $('#currentDay');



// day display on the header id="currentDay" class="lead"
function displayDay(){
    var today = moment().format('dddd, MMMM Do');
    currentDayEl.text(today);
}

displayDay();

// need eventlistener once save button pressed
// save txt on local to not loose info when refreshing oage
// add hour check of the day, and if current time and change the colors on text area
//  past is gray, present is red, future is green
// add emoticon, widget to save if posible