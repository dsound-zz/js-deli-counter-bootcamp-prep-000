// var katzDeliLine = [];

function takeANumber(line, name) {
 
 line.push(name)

  
  return `Welcome, ${name}. You are number ${line.length} in line`
   
}
function nowServing(line) {
  var lineN = line.shift()
  if (line === 0) {
    return "There is nobody waiting to be served!"
    }
    else {
      return `${lineN}`
    }
}