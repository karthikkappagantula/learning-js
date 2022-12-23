var currentDate = new Date();
var school = 'hello';
console.log(currentDate);

// Parameter as integer value give the number of 
// seconds since January 1, 1970, 00:00:00 UTC.
 
var date = new Date(2020, 4, 29, 22, 00, 00, 00);
var seconds =  Math.floor( date / 1000 ); 
console.log("Date " + date + " has " + seconds+ " seconds till epoch.");

  // When any dataString is given as the parameter 
  // then it return the same as the parameter
  // including day name.
  var dateAndTime = new Date('June 22, 1985 07:19:35');

  console.log(dateAndTime);

  // When some numbers are taken as the parameter 
  // then they are considered as year, month, day, 
  // hours, minutes, seconds, milliseconds 
  // respectively.
  var dateAndTime = new Date(1996, 10, 13, 5, 30, 22);

  console.log(dateAndTime);