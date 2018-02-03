var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


const now = new Date();

const day = now.getDay();

const weekDay = days[day]

console.log(weekDay)

const node = document.createElement('h1')
const textNodeYes = document.createTextNode('YES IT IS')
const textNodeNo = document.createTextNode("NO IT'S NOT. START CRYING")
const textNodeWk = document.createTextNode("No, but it's the weekend! Enjoy!")

//


function revealDay(){

  if (weekDay == 'Friday'){
    node.appendChild(textNodeYes);
    document.getElementById("maindiv").appendChild(node)
    
  
  } else if (weekDay == 'Saturday' || weekDay == 'Sunday') {
    node.appendChild(textNodeWk);
    document.getElementById("maindiv").appendChild(node)
  } else {
    node.appendChild(textNodeNo);
    document.getElementById("maindiv").appendChild(node)
  }
}
