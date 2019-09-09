/*
============================================
; Title: donner-assignment-1.4.ts
; Author: Adam Donner
; Date: 8 September 2019
; Description:  Demonstrates the use of typescript.
;===========================================
*/

/*
 Expected output:

Hello Adam Donner

*/

// start program


// Create variables set values as string and assign values
let firstName: string = 'Adam';
let lastName: string = 'Donner';

// Declares function and returns string.
function myName(firstName: string, lastName: string): string {
    return 'Hello ' + firstName + ' ' + lastName;
}

// Output results of myName function
console.log(myName(firstName, lastName));

// end program