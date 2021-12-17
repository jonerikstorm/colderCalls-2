// Try to find a Google Sheet with the name 'colderCall'
"use strict";
// If we can't find it, ask if we want to create a new database or try and find it.
// Open file picker.

// TODO: function to write entire active class to the file

// function (activeStudents:Array<number>): string {
// Random with bias
// Bias should be an integer number of times more that the students' name should appear
// It can be 0 if find their name in the queue
// var picker:Array<number>
//
// for i=0 to length of active students array i++
//      for j=1, j>activeStudent[i].bias, j++
//          picker.push(activeStudent[i].name)
//  now we can do let winner =picker[Math.floor(Math.random() * picker.length)];
//  return(activeStudents[winner].name)
//  }
//
// activeStudents = SELECT * from students WHERE period = currentPeriod and absent IS NOT currentDate
// log.debug: created active students
// markAbsent (student) = UPDATE students WHERE name = name set absent = currentDate
// log: marked name absent on date
// clearAbsent (student) = same clear absent
// log: cleared absence on date
// correct = increase number asked and number correct
// incorrect = increase number asked
// skip = new random
// rubric = push number onto array
//
// Set up a class
// Import roster from Google Classroom
// Set some preferences
// Set default times 🔽 menu drop down
// Set default scoring
// set rubric [1...5]
//
// Change from correct/incorrect to rubric
// Rubric based on time lengths
// Set time length preferences
// Record length of time from question asked to response code clicked
//
// Export results to Google Classroom
// Export results to CSV
// Export results to email
//import "./google-interface";
//import "./random";
interface Log
{
    timestamp:string;
    level:string;
    message:string;
}
interface Period
{
    name:string;
    startTime:string;
    endTime:string;
    volunteer:boolean;
    periodNumber:string;
    rubricMax:number;
    queueLength:number;
}
interface Answer {
    date:String;
}
interface Rubric {
    date:String;
    score:number;
}
interface Students
{
    firstName:string;
    lastName:string;
    email:string;
    biasFactor:number;
    correct:Answer[];
    answered:Answer[];
    rubricScore:Rubric[];
}
interface DataBase
{
    defaultPeriod:number;
    displayName:string;
    tableOn:boolean;
    timerOn:boolean;
    rubricDefault:boolean;
    classes:Period[];
    students:Students[];
    log:Log[];
}

$(function () {
    let data:DataBase;
    // load preferences
    // if we are in google, we will do this:
    // google.script.run.getData();
    // if we are self-hosted, we will do this:
    // AJAX put /colderCall.go which will call 
    // temporary testing class

    $("#bigTable").hide();
    $("#rubricButtons").hide();
    $("#optionsButton").on("click",function () { $("#preferencesModal").modal("show");});
    $("#tableButton").on("click", function () { $("#bigTable").toggle();});
});
