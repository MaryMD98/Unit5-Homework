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

// class bt2-pm      id hour2-pm
var saveElem9am = $('.bt9-am');
var saveElem10am = $('.bt10-am');
var saveElem11am = $('.bt11-am');
var saveElem12pm = $('.bt12-pm');
var saveElem1pm = $('.bt1-pm');
var saveElem2pm = $('.bt2-pm');
var saveElem3pm = $('.bt3-pm');
var saveElem4pm = $('.bt4-pm');
var saveElem5pm = $('.bt5-pm');

var displayhour9am = $('#hour9-am');
var displayhour10am = $('#hour10-am');
var displayhour11am = $('#hour11-am');
var displayhour12pm = $('#hour12-pm');
var displayhour1pm = $('#hour1-pm');
var displayhour2pm = $('#hour2-pm');
var displayhour3pm = $('#hour3-pm');
var displayhour4pm = $('#hour4-pm');
var displayhour5pm = $('#hour5-pm');

// 9am = 1, 10am = 2, 11am = 3, 12pm = 4; 1pm = 5
// 2pm = 6, 3pm = 7, 4pm = 8, 5pm = 9

// button 9am
saveElem9am.on('click', function(event){
    event.preventDefault();
    var message = displayhour9am.val();
    localStorage.setItem("hour9am", message);
});

// button 10am
saveElem10am.on('click', function(event){
    event.preventDefault();
    var message = displayhour10am.val();
    localStorage.setItem("hour10am", message);
});

// button 11am
saveElem11am.on('click', function(event){
    event.preventDefault();
    var message = displayhour11am.val();
    localStorage.setItem("hour11am", message);
});

// button 12pm
saveElem12pm.on('click', function(event){
    event.preventDefault();
    var message = displayhour12pm.val();
    localStorage.setItem("hour12pm", message);
});

// button 1pm
saveElem1pm.on('click', function(event){
    event.preventDefault();
    var message = displayhour1pm.val();
    localStorage.setItem("hour1pm", message);
});

// button 2pm
saveElem2pm.on('click', function(event){
    event.preventDefault();
    var message = displayhour2pm.val();
    localStorage.setItem("hour2pm", message);
});

// button 3pm
saveElem3pm.on('click', function(event){
    event.preventDefault();
    var message = displayhour3pm.val();
    localStorage.setItem("hour3pm", message);
});

// button 4pm
saveElem4pm.on('click', function(event){
    event.preventDefault();
    var message = displayhour4pm.val();
    localStorage.setItem("hour4pm", message);
});

// button 5pm
saveElem5pm.on('click', function(event){
    event.preventDefault();
    var message = displayhour5pm.val();
    localStorage.setItem("hour5pm", message);
});
    

function initLocal (){
    // save the 9am message at start of page
    var hourofDay = localStorage.getItem("hour9am");
    document.getElementById("hour9-am").innerHTML = hourofDay;

    // save the 9am message at start of page
    var hourofDay = localStorage.getItem("hour9am");
    document.getElementById("hour9-am").innerHTML = hourofDay;

    // save the 9am message at start of page
    var hourofDay = localStorage.getItem("hour9am");
    document.getElementById("hour9-am").innerHTML = hourofDay;

    // save the 9am message at start of page
    hourofDay = localStorage.getItem("hour12pm");
    document.getElementById("hour12-pm").innerHTML = hourofDay;

    // save the 9am message at start of page
    hourofDay = localStorage.getItem("hour1pm");
    document.getElementById("hour1-pm").innerHTML = hourofDay;

    // save the 9am message at start of page
    hourofDay = localStorage.getItem("hour2pm");
    document.getElementById("hour2-pm").innerHTML = hourofDay;

    // save the 9am message at start of page
    hourofDay = localStorage.getItem("hour3pm");
    document.getElementById("hour3-pm").innerHTML = hourofDay;

    // save the 9am message at start of page
    hourofDay = localStorage.getItem("hour4pm");
    document.getElementById("hour4-pm").innerHTML = hourofDay;

    // save the 5pm message at start of page
    hourofDay = localStorage.getItem("hour5pm");
    document.getElementById("hour5-pm").innerHTML = hourofDay;
}

initLocal ();
