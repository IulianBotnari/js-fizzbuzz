// //first method
// let divisore3a

// let divisore5a

// for (let i = 1; i <= 100; i++) {
//   divisore3a = i / 3;

//   divisore5a = i / 5;

//   if (Number.isInteger(divisore3a)) {

//     console.log("fizz");
//     }

//   if (Number.isInteger(divisore5a)) {

//     console.log("buzz");
//     }

//   if (Number.isInteger(divisore3a) && Number.isInteger(divisore5a)) {

//     console.log("fizzbuzz");
//     }

//   if (!Number.isInteger(divisore3a) && !Number.isInteger(divisore5a)) {

//     console.log(i);
//     }
// }




//second method

// for (let i = 1; i <= 100; i++) {
    

//   function divisore3(i) {
//     return i / 3;
//     }
// if (Number.isInteger(divisore3(i))) {

//     console.log("fizz");
//     }

// function divisore5(i) {
//     return i / 5;
//     }
// if (Number.isInteger(divisore5(i))) {

//     console.log("buzz");
//     }
// if (Number.isInteger(divisore5(i)) && Number.isInteger(divisore3(i))) {

//     console.log("fizzbuzz");
//     }
// if (!Number.isInteger(divisore5(i)) && !Number.isInteger(divisore3(i))) {

//     console.log(i);
//     }
   
//   }


//another method

// for  (let i = 1; i <= 100; i++){
//   if (((i%5) == 0) && ((i%3) == 0)) {
//       console.log("fizzbuzz");
//     } else if (((i%5) != 0) && ((i%3) != 0))  {
//       console.log(i);
//     }
//   if (((i%3) == 0) && (!(((i%5) == 0) && ((i%3) == 0)))) {
//     console.log("fizz");
//     }

//   if (((i%5) == 0) && (!(((i%5) == 0) && ((i%3) == 0)))) {
//       console.log("buzz");
//       }

// }


for  (let i = 1; i <= 100; i++){
  if (((i%5) == 0) && ((i%3) == 0)) {
      console.log("fizzbuzz");
    } else if (((i%5) != 0) && ((i%3) != 0))  {
      console.log(i);
    } else if (((i%3) == 0)) {
      console.log("fizz");
    } else if (((i%5) == 0)) {
        console.log("buzz");
    }
}


