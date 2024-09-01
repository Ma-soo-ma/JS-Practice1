function listofadjactives(){
    let a ="crazy";
    let b ="Amazing";
    let c ="fire";
    let d = Math.floor(Math.random()*3)


if (d==0){
  return a;
}
else if (d==1){
   return b;
}
else if (d==2){
   return c;
}
}

function shoName() {
   let a ="Engine";
   let b ="Food";
   let c = "GArments";
   let d = Math.floor(Math.random()*3)
  

if (d==0){
   return a;
}
else if (d==1){
    return b;
}
else if (d==2){
   return c;
}
}
function AnotherWord(){
   let a ="Bros";
   let b ="Limited";
   let c = "Hub";
   let d = Math.floor(Math.random()*3)


if (d==0){
   return a;
}
else if (d==1){
    return b;
}
else if (d==2){
    return c;
}
}




console.log ("The name of this business is:" + listofadjactives() + shoName() + AnotherWord())