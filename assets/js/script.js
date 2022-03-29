var displayTimeEl = $('#displayTime');
var tbodyEl = $('#tableBody');
var submitBtn = $('submit-btn');
var newProjectBtn=$('new-project-btn')
var nameInputEl = $('#project-name');
var typeInputEl = $('project-type');
var hourlyInputEl = $('hourly-wage');
var dateInputEl = $('#due-date');
var skillsListEl = $('#skills-list');

var printSkills = function (name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  nameInputEl.val('');
  dateInputEl.val('');
};

// formEl.on('submit', handleFormSubmit);
var currentTime= moment();
displayTimeEl.text(currentTime.format("MMM Do, YYYY hh:mm:ss"));

// Datepicker widget
$(function () {
  $('#due-date').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

// Add interaction here
$( function() {
  $( "#skills-list" ).sortable({
    revert: true
  });
  $( "#draggable" ).draggable({
    connectToSortable: "#skills-list",
    helper: "clone",
    revert: "invalid"
  });
  $( "ul, li" ).disableSelection();
} );