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
// 