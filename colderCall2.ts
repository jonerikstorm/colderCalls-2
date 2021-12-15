// Try to find a Google Sheet with the name 'colderCall'
"use strict";
// If we can't find it, ask if we want to create a new database or try and find it.
// Open file picker.
// Create new Google Sheet with the name 'colderCall'
// Create a sheet entitled global, a sheet entitled periods, and a sheet entitled students
// TODO: Further data model elaboration.

// Load the entire file into a class

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
