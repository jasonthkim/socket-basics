var moment = require('moment');
var now = moment();

// console.log(now.format('MMMM Do YYYY, h:mm:ss a')); //October 29th 2015, 3:45:03 pm
//console.log(now.format('dddd, MMMM Do YYYY, h:mm:ss a')); //Thursday, October 29th 2015, 3:43:55 pm
// console.log(now.format('HH:mm A')); // 15:45 PM military format 'H', while 'h' is 12-hour format

// console.log(now.format()); // 3:45 PM
// console.log(now.format('X'));
// console.log(now.valueOf());

var timestamp = 1446161310987;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('hh:mm a')); // 11:06 am & local() adjusts for local timezone

// now.subtract(1, 'year');

// console.log(now.format());

// console.log(now.format('MMM do YYYY, hh:mm A')); // Oct 3rd 2014, 03:51 PM