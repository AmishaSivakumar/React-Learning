if(condition){
    true  
}
else{
    false
}

if (0==0 || 1==0){  // ||>> or case when any of the condition become true
    true
}
else{
    false
}

if (0==0 && 1==1){ // && >> and case when both condition become true
    true
}
else{
    false
}

// terinory operetor
true ? console.log("hello") : console.log("error");

// Switch
const color = "red"
switch(color){
    case 'red': console.log("red selected");
    break
    case 'blue' : console.log("blue selected");
    break
    case 'black' : console.log("Black selected");
    break
    default: (color)
}