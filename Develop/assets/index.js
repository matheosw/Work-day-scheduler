// Get current date displayed on page using moment.js

// create timeblocks for standard business hours
// timeblocks color should indicate past present or future

// user should be able to type text into the timeblocks

// add button to the timeblocks

// save events using local storage

$(document).ready(function () {
    alert(1);
    
console.log(moment().hours())


var a= moment();
a.format('MMMM Do YYYY, h:mm:ss a');
console.log(a)
$('#currentDay').text(a)
let currentDay = a._d
console.log(currentDay)

$('#CurrentDay').text(currentDay)

let currentHour =moment().hours

    $('#9text').val(localStorage.getItem('9text'))
    localStorage.getItem('9text')

$('9btn').on('click', function () {
  localStorage.setItem('9text', $('#9text').val())
})

$('#10text').val(localStorage.getItem('text'))
    localStorage.getItem('10text')

$('10btn').on('click', function () {
  localStorage.setItem('10text', $('#10text').val())
})
// 
$('#11text').val(localStorage.getItem('11text'))
    localStorage.getItem('11text')

$('11btn').on('click', function () {
  localStorage.setItem('11text', $('#11text').val())
})

$('#12text').val(localStorage.getItem('12text'))
    localStorage.getItem('12text')

$('12btn').on('click', function () {
  localStorage.setItem('12text', $('#12text').val())
})
// 
$('#1pmtext').val(localStorage.getItem('1pmtext'))
    localStorage.getItem('1pmtext')

$('1pmbtn').on('click', function () {
  localStorage.setItem('1pmtext', $('#1pmtext').val())
})

$('#2pmtext').val(localStorage.getItem('2pmtext'))
    localStorage.getItem('2pmtext')

$('2pmbtn').on('click', function () {
  localStorage.setItem('2pmtext', $('#2pmtext').val())
})
// 
$('#3pmtext').val(localStorage.getItem('3pmtext'))
    localStorage.getItem('3pmtext')

$('3pmbtn').on('click', function () {
  localStorage.setItem('3pmtext', $('#3pmtext').val())
})

$('#4pmtext').val(localStorage.getItem('4pmtext'))
    localStorage.getItem('4pmtext')

$('4pmbtn').on('click', function () {
  localStorage.setItem('4pmtext', $('#4pmtext').val())
})

$('#5pmtext').val(localStorage.getItem('5pmtext'))
    localStorage.getItem('5pmtext')

$('5pmbtn').on('click', function () {
  localStorage.setItem('5pmtext', $('#5pmtext').val())
})


//Time blocks to change colors
var textarea =$(".description")

for(var i= 0; i< textarea.length; i++){
var currentTextArea = $(textarea[i])
var textAreaHour = currentTextArea.attr("id")
var presentHour = moment().format('H');

if(presentHour > parseInt(textAreaHour)) {
    currentTextArea.addClass("past")
} else if (presentHour == parseInt(textAreaHour)) {
    currentTextArea.addClass("present")
}
if(presentHour < parseInt(textAreaHour)) {
    currentTextArea.addClass("future")
}
}







if (currentHour <9) {
    $('#hour9').addClass('future')
    $('#hour10').addClass('future')
}

if(currentHour===10){
    $('#hour10').addClass('present')
    $('#hour11').addClass('future')
}

if(currentHour===11){
    $('#hour11').addClass('present')
    $('#hour12').addClass('future')
}

if(currentHour===12){
    $('#hour12').addClass('present')
    $('#hour13').addClass('future')
}

if(currentHour===13){
    $('#hour13').addClass('present')
    $('#hour14').addClass('future')
}

if(currentHour===14){
    $('#hour14').addClass('present')
    $('#hour15').addClass('future')
}

if(currentHour===15){
    $('#hour15').addClass('present')
    $('#hour16').addClass('future')
}

if(currentHour===16){
    $('#hour16').addClass('present')
    $('#hour17').addClass('future')
}

if(currentHour===17){
    $('#hour17').addClass('present')
    $('#hour18').addClass('future')
}

});

