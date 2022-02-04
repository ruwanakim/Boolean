// let a = +prompt('enter a number');

// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert( 'Exactly!' );
//     break;
//   case 50:
//     alert( 'Too big' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }




// let userName = prompt('Your name');

// function showMessage() {
//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// showMessage();




// let userName = prompt('Your name');

// function showMessage() {
// //   let userName = "";

//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// showMessage();

// // alert( userName );



// function showMessage(from, text) { // parameters: from, text
//     alert(from + ': ' + text);
//   }
  
//   showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
//   showMessage('Ann', "What's up?");  // Ann: What's up? (**)




// function showMessage(from, text = "no text given") {
//     alert( from + ": " + text );
//   }
  
//   showMessage("Ann"); // Ann: no text given



// function sum(a, b) {
//     return a + b;
//   }
  
//   let result = sum(5, 8);
//   alert( result ); 




// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Do you have permission from your parents?');
//     }
//   }
  
//   let age = prompt('How old are you?', 18);
  
//   if ( checkAge(age) ) {
//     alert( 'Access granted' );
//   } else {
//     alert( 'Access denied' );
//   }




