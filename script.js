const now = new Date();

const day = now.getDay()

const textArray = ["NO IT'S NOT. START CRYING","Almost... there...","YES IT IS","No, but it's the weekend!Enjoy!"]

const node = document.createElement('h1')
const textNodeYes = document.createTextNode(textArray[2])
const textNodeNo = document.createTextNode(textArray[0])
const textNodeWk = document.createTextNode(textArray[3])
const textNodeTh = document.createTextNode(textArray[1])


let mood;

//


function revealDay(){

  document.getElementById("maindiv").appendChild(node);
  
  if (day == 5){
    node.appendChild(textNodeYes);
    mood = 'Friday';
  
  } else if (day == 4) {
    node.appendChild(textNodeTh);
    mood = 'anxious'
    
  
  } else if (day == 6 || day == 7) {
    node.appendChild(textNodeWk);
    mood = 'weekend'
    
  } else {
    node.appendChild(textNodeNo);
    mood = 'crying';
  }
 
  //1. Standard XMLHttpRequest -- left here for reference
  
  //let gifRequest = `http://api.giphy.com/v1/gifs/random?tag=${mood}&api_key=EqVHhNTFouIPHY5r20T1y3UQZG5O854q&limit=1`
  
 /*
   const request = new XMLHttpRequest();
   
   request.open('GET', gifRequest, true)
   
   request.onload = function() {
     if (request.status >= 200 && request.status <400){
       const data = JSON.parse(request.responseText).data.image_url
       console.log(data)
       document.getElementById('giphy').innerHTML = `<center><img src = ${data} title="GIF via Giphy"></center>`;
       } else {
         console.log('API returned an error')
       }
     
   }
  
  request.onerror = function(){
    console.log('connection error')
  }
  
  request.send()
  */
  
  // ====== //
  
  
  //2. ES6 Fetch
  
  let gifRequest = `http://api.giphy.com/v1/gifs/random?tag=${mood}&api_key=EqVHhNTFouIPHY5r20T1y3UQZG5O854q&limit=1`
  
  fetch(gifRequest)
    .then((resp) => resp.json())
    .then(function(data){
      const gif = data.data.image_url
      document.getElementById('giphy').innerHTML = `<center><img src = ${gif} title="GIF via Giphy"></center>`;
    })
  
  
}

