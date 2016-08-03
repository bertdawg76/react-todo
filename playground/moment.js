var moment = require('moment');

console.log(moment().format());

//january 1st 1970 @ 12:00am -> 0


var now = moment();

console.log('current timestamp ', now.unix());

var timestamp = now.unix();

var currentMoment = moment.unix(timestamp);

console.log('current moment', currentMoment.format('MMM DD, YYYY @ h:mm a'));

console.log('Current Date ', currentMoment.format('MMMM Do, YYYY @ h:mm A'));

