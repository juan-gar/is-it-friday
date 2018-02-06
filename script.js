const now = new Date();

const day = now.getDay();


const node = document.createElement('h1')
const textNodeYes = document.createTextNode('YES IT IS')
const textNodeNo = document.createTextNode("NO IT'S NOT. START CRYING")
const textNodeWk = document.createTextNode("No, but it's the weekend! Enjoy!")


let mood;
//


function revealDay(){

  if (day == 5){
    node.appendChild(textNodeYes);
    document.getElementById("maindiv").appendChild(node);
    mood = 'Friday';

  } else if (day == 6 || day == 7) {
    node.appendChild(textNodeWk);
    document.getElementById("maindiv").appendChild(node);
  } else {
    node.appendChild(textNodeNo);
    document.getElementById("maindiv").appendChild(node)
    mood = 'sad';
  }
  
  
  let gifRequest = "http://api.giphy.com/v1/gifs/random?tag=" + mood + "&api_key=EqVHhNTFouIPHY5r20T1y3UQZG5O854q&limit=1"
  

   const request = new XMLHttpRequest();
   
   request.open('GET', gifRequest, true)
   
   request.onload = function() {
     if (request.status >= 200 && request.status <400){
       const data = JSON.parse(request.responseText).data.image_url
       console.log(data)
       document.getElementById('giphy').innerHTML = '<center><img src = "' +data+ '"  title="GIF via Giphy"></center>';
       } else {
         console.log('API returned an error')
       }
     
   }
  
  request.onerror = function(){
    console.log('connection error')
  }
  
  request.send()
  
  
}
