// Calendar Application

var currentDayEl = $('#currentDay');

// day display on the header id="currentDay" class="lead"
function displayDay(){
    var today = moment().format('dddd, MMMM Do');
    
    currentDayEl.text(today);
    checNewDay();
    localStorage.setItem("today", today);
}

displayDay();

// check if page is loaded in a new day, and clear locals if true
function checNewDay(){
    var localToday = localStorage.getItem("today");
    var todayDay = moment().format('dddd, MMMM Do');

    if(localToday != todayDay){
        // clear local its a new day
        var newMSG = "";
        localStorage.setItem("hour9am", newMSG); 
        localStorage.setItem("hour10am", newMSG);
        localStorage.setItem("hour11am", newMSG);
        localStorage.setItem("hour12pm", newMSG);
        localStorage.setItem("hour1pm", newMSG);
        localStorage.setItem("hour2pm", newMSG);
        localStorage.setItem("hour3pm", newMSG);
        localStorage.setItem("hour4pm", newMSG);
        localStorage.setItem("hour5pm", newMSG);
    }
}
// add hour check of the day, and if current time and change the colors on text area
//  past is gray, present is red, future is green

var format = 'hh:mm:ss';

function addColortoDisplay (){
    var time = moment();

    var beforeTime = moment('9:00:00', format);
    var afterTime = moment('9:59:59', format);
//   past present future 
    if (time.isBetween(beforeTime, afterTime)) {
        document.getElementById('hour9-am').setAttribute("class", "present");
    }

    beforeTime = moment('10:00:00', format);
    afterTime = moment('10:59:59', format);
    if (time.isBetween(beforeTime, afterTime)) {
        document.getElementById('hour9-am').setAttribute("class", "past");
        document.getElementById('hour10-am').setAttribute("class", "present");
    }

    beforeTime = moment('11:00:00', format);
    afterTime = moment('11:59:59', format);
    if (time.isBetween(beforeTime, afterTime)) {
        document.getElementById('hour9-am').setAttribute("class", "past");
        document.getElementById('hour10-am').setAttribute("class", "past");
        document.getElementById('hour11-am').setAttribute("class", "present");
    }

    beforeTime = moment('12:00:00', format);
    afterTime = moment('12:59:59', format);
    if (time.isBetween(beforeTime, afterTime)) {
        document.getElementById('hour9-am').setAttribute("class", "past");
        document.getElementById('hour10-am').setAttribute("class", "past");
        document.getElementById('hour11-am').setAttribute("class", "past");
        document.getElementById('hour12-pm').setAttribute("class", "present");
    }

    beforeTime = moment('13:00:00', format);
    afterTime = moment('13:59:59', format);
    if (time.isBetween(beforeTime, afterTime)) {
        document.getElementById('hour9-am').setAttribute("class", "past");
        document.getElementById('hour10-am').setAttribute("class", "past");
        document.getElementById('hour11-am').setAttribute("class", "past");
        document.getElementById('hour12-pm').setAttribute("class", "past");
        document.getElementById('hour1-pm').setAttribute("class", "present");
    }

    beforeTime = moment('14:00:00', format);
    afterTime = moment('14:59:59', format);
    if (time.isBetween(beforeTime, afterTime)) {
        document.getElementById('hour9-am').setAttribute("class", "past");
        document.getElementById('hour10-am').setAttribute("class", "past");
        document.getElementById('hour11-am').setAttribute("class", "past");
        document.getElementById('hour12-pm').setAttribute("class", "past");
        document.getElementById('hour1-pm').setAttribute("class", "past");
        document.getElementById('hour2-pm').setAttribute("class", "present");
    }

    beforeTime = moment('15:00:00', format);
    afterTime = moment('15:59:59', format);
    if (time.isBetween(beforeTime, afterTime)) {
        document.getElementById('hour9-am').setAttribute("class", "past");
        document.getElementById('hour10-am').setAttribute("class", "past");
        document.getElementById('hour11-am').setAttribute("class", "past");
        document.getElementById('hour12-pm').setAttribute("class", "past");
        document.getElementById('hour1-pm').setAttribute("class", "past");
        document.getElementById('hour2-pm').setAttribute("class", "past");
        document.getElementById('hour3-pm').setAttribute("class", "present");
    }

    beforeTime = moment('16:00:00', format);
    afterTime = moment('16:59:59', format);
    if (time.isBetween(beforeTime, afterTime)) {
        document.getElementById('hour9-am').setAttribute("class", "past");
        document.getElementById('hour10-am').setAttribute("class", "past");
        document.getElementById('hour11-am').setAttribute("class", "past");
        document.getElementById('hour12-pm').setAttribute("class", "past");
        document.getElementById('hour1-pm').setAttribute("class", "past");
        document.getElementById('hour2-pm').setAttribute("class", "past");
        document.getElementById('hour3-pm').setAttribute("class", "past");
        document.getElementById('hour4-pm').setAttribute("class", "present");
    }

    beforeTime = moment('17:00:00', format);
    afterTime = moment('17:59:59', format);
    if (time.isBetween(beforeTime, afterTime)) {
        document.getElementById('hour9-am').setAttribute("class", "past");
        document.getElementById('hour10-am').setAttribute("class", "past");
        document.getElementById('hour11-am').setAttribute("class", "past");
        document.getElementById('hour12-pm').setAttribute("class", "past");
        document.getElementById('hour1-pm').setAttribute("class", "past");
        document.getElementById('hour2-pm').setAttribute("class", "past");
        document.getElementById('hour3-pm').setAttribute("class", "past");
        document.getElementById('hour4-pm').setAttribute("class", "past");
        document.getElementById('hour5-pm').setAttribute("class", "present");
    }

    beforeTime = moment('18:00:00', format);
    afterTime = moment('23:59:59', format);
    if (time.isBetween(beforeTime, afterTime)){
        document.getElementById('hour9-am').setAttribute("class", "past");
        document.getElementById('hour10-am').setAttribute("class", "past");
        document.getElementById('hour11-am').setAttribute("class", "past");
        document.getElementById('hour12-pm').setAttribute("class", "past");
        document.getElementById('hour1-pm').setAttribute("class", "past");
        document.getElementById('hour2-pm').setAttribute("class", "past");
        document.getElementById('hour3-pm').setAttribute("class", "past");
        document.getElementById('hour4-pm').setAttribute("class", "past");
        document.getElementById('hour5-pm').setAttribute("class", "past");
    }
}

addColortoDisplay();

// need eventlistener once save button pressed
// save txt on local to not loose info when refreshing oage
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
    var hourofDay = localStorage.getItem("hour10am");
    document.getElementById("hour10-am").innerHTML = hourofDay;

    // save the 9am message at start of page
    var hourofDay = localStorage.getItem("hour11am");
    document.getElementById("hour11-am").innerHTML = hourofDay;

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
