// Chap -10-11-12    ( If statments & condition )

const { errorOut } = require("firebase-tools");

// Q-1

// var city = prompt("Enter where do you live?");

// if (city === "karachi") {
//   alert("Welcome to city of lights..!");

// } else {
//   alert("welcome you live in " + city);
// }


// Q-2


// var gender = prompt("Enter your gender");
// var message;

// if (gender === "male") {
//   message = "Good Morning sir.";
// }

// if (gender === "female") {
//   message = "Good Morning Ma'am.";
// }

// alert(message);


// Q-3

// var color = prompt ( "Enter signals color" );
// if ( color == "red") {
//   alert ( "Must stop" );

// }

//  else if ( color == "yellow" ){
//   alert ( "Ready to move" );

// }

// else if ( color == "green" ){
//   alert ( "Move on" )

// }

// else {
//   alert ( "Incorrect" );
// }



// Q-4

// var fuel = prompt( "Remaining fuel " );

// if (fuel === " 0.5 litre ") {
//   alert( "Plese refill the fuel in your car..!");


// } else {
//   alert( " Refill fuel " + fuel);
// }


// Q-5

// a ...

// var a = 4 ;
// if ( ++a === 5 ) {
//     alert ( "Given condition for variable is true" )
// }


// b

// var b = 82 ;
// if ( b === 83 ) {
//   alert ( " Given condition for variable b is true" )
// }


// if ( c === 13 ) {
//   alert ( "  condition 2 is true" )
// }


// if ( ++c < 14 ) {
//   alert ( " condition 3 is true" )
// }


// if ( c === 14 ) {
//   alert ( " condition 4 is true" )
// }



// Q-6 

// document.write ( "<h1> Mark Sheet </h1>" )

// var total = 300 ;
// var obtained = 219 ;
// var percentage = 79 ;
// var grade = "B" ;
// var remark = "You need to improve " ;

// document.write ( ` Total mark : ${total} 
//   <br>
//   Mark obtained : ${obtained} 
//   <br>Percentage : ${percentage}
//   <br>
//    Grade : ${grade}
//    <br>
//    Remark ${remark} ` );




// Q-7

// var num = prompt ( " Enter a number " );

// if ( num % 3 === 3 ){
//   alert ( number + ( "is divided by three" ) )
// }

// else if ( num % 3 === 6 ) {
//   alert ( number + "is divided by three" )
// }

// else if ( num % 3 === 9 ) {
//   alert ( number + "is divided by three" )
// }

// else if ( num % 3 === 12 ) {
//   alert ( number + "is divided by three" )
// }

// else if ( num % 3 === 15 ) {
//   alert ( number + "is divided by three" )
// }

// else if ( num % 3 === 18 ) {
//   alert ( number + "is divided by three" )
// }




// Q-10

var temperature = prompt ( "Enter Temperature" );

if ( temperature > 40 ) {
  alert ( "It's too hot outside " )
}

else if ( temperature > 30 ) {
  alert ( "The weather today is normak .." )
}

else if ( temperature > 20  ) {
  alert ( "Today weather is cool .." )
}

else if ( temperature > 10  ) {
  alert ( "OMg today weather is so cool " )


}else {
  alert ( "Incorrect" )
}


