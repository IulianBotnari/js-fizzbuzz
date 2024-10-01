

for (let i = 1; i <= 100; i++) {
    

  function divisore3(i) {
    return i / 5;
    
}




if (Number.isInteger(divisore3(i))) {

    console.log("fizz");
    
    
}

function divisore5(i) {
    return i / 5;
    
}
  if (Number.isInteger(divisore5(i))) {

    console.log("buzz");
    
    
  }

  if (Number.isInteger(divisore5(i)) && Number.isInteger(divisore3(i))) {

    console.log("fizzbuzz");
    
    
  }

  if (!Number.isInteger(divisore5(i)) && !Number.isInteger(divisore3(i))) {

    console.log(i);
    
    
  }
   
   

}