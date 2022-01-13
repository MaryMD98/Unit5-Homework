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

saveElem9am.on("click", saveMSG(1));
saveElem10am.on("click", saveMSG(2));
saveElem11am.on("click", saveMSG(3));
saveElem12pm.on("click", saveMSG(4));
saveElem1pm.on("click", saveMSG(5));
saveElem2pm.on("click", saveMSG(6));
saveElem3pm.on("click", saveMSG(7));
saveElem4pm.on("click", saveMSG(8));

// 9am = 1, 10am = 2, 11am = 3, 12pm = 4; 1pm = 5
// 2pm = 6, 3pm = 7, 4pm = 8
function saveMSG(timeofDay){
    
    if

}