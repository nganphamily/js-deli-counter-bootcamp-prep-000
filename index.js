var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length>0) {
    return `Currently serving ${katzDeliLine.shift()}.` ;
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  if (line.length > 0 ){
    return 'The line is currently ${line}.';

  }else{
    return "The line is currently empty.";
  }
}
