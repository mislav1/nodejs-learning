var minValue = parseInt( prompt ( "Enter minimal value:" ) );
var maxValue = parseInt( prompt ( "Enter maximal value:" ) );

var range = maxValue - minValue + 1;
var randomNumber = Math.floor( Math.random() * range ) + minValue;
alert( "You have rolled number " + randomNumber );
