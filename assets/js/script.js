var displayTimeEl = $('#displayTime');
var tbodyEl = $('#tableBody');
var submitBtn = $('submit-btn');
var newProjectBtn=$('#new-project-btn')
var nameInputEl = $('#project-name');
var typeInputEl = $('#project-type');
var wageInputEl = $('#hourly-wage');
var dateInputEl = $('#due-date');
var skillsListEl = $('#skills-list');
var formEl= $('#newProjectForm')

var currentTime= moment().format("MMM Do, YYYY hh:mm:ss");

function projectObj(name, type, wage, due,) {
  this.name = name;
  this.type = type;
  this.wage = wage;
  this.due = due;
}


var printProject = function () {
  var dueDay=moment(currentProject.due).dayOfYear();
  var todayOfYear=moment().dayOfYear();
  var daysLeft=dueDay-todayOfYear;
  var estimate=currentProject.wage * 24 * daysLeft;
  var wholeRow="<tr><td>" + currentProject.name + "</td><td>"+ currentProject.type+ "</td><td>"+ currentTime+ "</td><td>"+ currentProject.wage+ "</td><td>"+ currentProject.due+ "</td><td>"+ daysLeft+ "</td><td>"+ estimate+ "</td><td>"+ '<button type="button" class="btn btn-danger">Delete</button>'+ "</td></tr>";
  // listEl.addClass('list-group-item').text(listDetail);
  tbodyEl.append(wholeRow);
};



var handleFormSubmit = function () {
  
  currentProject= new projectObj("","",0,"");
  currentProject["name"]=nameInputEl.val();
  currentProject["type"]=typeInputEl.val();
  currentProject["wage"]=wageInputEl.val();
  currentProject["due"]=dateInputEl.val();
  console.log(currentProject);
  printProject();

};

formEl.on('submit', function(event) {
  event.preventDefault();
  console.log("Submit Clicked");
  handleFormSubmit();
  $('#newProjectModal').modal('hide');
  return false;
});

tbodyEl.on("click", function (evt) {
  console.log("Click Registered");
  var target = evt.target;
  console.log(target);
  console.log($(target).parents("tr"));
  if (target.matches("button")) {
    console.log("Condition met");
    $(target).closest('tr').remove();
  }
});

newProjectBtn.on("click", function(){
  console.log("Click Event New Project")
  nameInputEl.textcontent="";
  typeInputEl.textcontent="";
})

function countdown() {
  timeInterval = setInterval(function () {
  displayTimeEl.text(currentTime);
  }, 1000);
}



//Datepicker widget
$(function () {
  $('#due-date').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});
