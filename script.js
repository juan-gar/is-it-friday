const now = new Date();

const day = now.getDay();


const node = document.createElement('h1')
const textNodeYes = document.createTextNode('YES IT IS')
const textNodeNo = document.createTextNode("NO IT'S NOT. START CRYING")
const textNodeWk = document.createTextNode("No, but it's the weekend! Enjoy!")

//


function revealDay(){

  if (day == 5){
    node.appendChild(textNodeYes);
    document.getElementById("maindiv").appendChild(node)
    
  
  } else if (day == 6 || day == 7) {
    node.appendChild(textNodeWk);
    document.getElementById("maindiv").appendChild(node)
  } else {
    node.appendChild(textNodeNo);
    document.getElementById("maindiv").appendChild(node)
  }
}