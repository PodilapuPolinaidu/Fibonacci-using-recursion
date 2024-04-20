function fibonacci(num){
  if(num < 2){
    return num;
  }
  else{
    return fibonacci(num - 1) + fibonacci(num -2);
  }
}
const nTerms = parseInt(prompt("Enter number of terms"));

if(nTerms <= 0){
  document.write("Enter possitive number");
}
else{
  for(i = 0; i < nTerms; i++){
    document.write(fibonacci(i));
  }
}