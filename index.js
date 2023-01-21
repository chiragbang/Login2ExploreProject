// JsonDB code to store data in PROJECT-TABLE relation of COLLEGE-DB database

var JsonDB = require('node-json-db');
var db = new JsonDB("COLLEGE-DB", true, false);

// On page load or reset button click
document.getElementById("reset-button").addEventListener("click", function() {
  document.getElementById("project-id").value = "";
  document.getElementById("project-id").disabled = false;
  document.getElementById("project-id").focus();
  document.getElementById("project-name").value = "";
  document.getElementById("project-name").disabled = true;
  document.getElementById("assigned-to").value = "";
  document.getElementById("assigned-to").disabled = true;
  document.getElementById("assignment-date").value = "";
  document.getElementById("assignment-date").disabled = true;
  document.getElementById("deadline").value = "";
  document.getElementById("deadline").disabled = true;
  document.getElementById("save-button").disabled = true;
  document.getElementById("update-button").disabled = true;
  document.getElementById("reset-button").disabled = true;
});

// On project-id input field change
document.getElementById("project-id").addEventListener("change", function(){
  var projectId = document.getElementById("project-id").value;
  try {
    var data = db.getData("/PROJECT-TABLE/" + projectId);
    document.getElementById("project-name").value = data.projectName;
    document.getElementById("assigned-to").value = data.assignedTo;
    document.getElementById("assignment-date").value = data.assignmentDate;
    document.getElementById("deadline").value = data.deadline;
    document.getElementById("save-button").value = data.saveButton;
    document.getElementById("update-button").value = data.updateButton;
    document.getElementById("reset-button").value = data.resetButton;
  }})