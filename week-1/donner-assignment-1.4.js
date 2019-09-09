/*
============================================
; Title: donner-assignment-1.4.js
; Author: Adam Donner
; Date: 19 April 2019
; Description:  Demonstrates the use of typescript.
;===========================================
*/
/*
 Expected output:

 Adam Donner
 Assignment 1.4
 <Today's Date>

Hello Adam Donner

*/
// start program
// Create variables set values as string and assign values
var firstName = 'Adam';
var lastName = 'Donner';
// Declares function and returns string.
function myName(firstName, lastName) {
    return 'Hello ' + firstName + ' ' + lastName;
}
// Output results of myName function
console.log(myName(firstName, lastName));
// end program
