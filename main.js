function setup(){
    canvas=createCanvas(380,380)
    canvas.position(540,280)
    video=createCapture(VIDEO)
    video.hide()
   }
   status=""
   
  
   function start(){
       objectDetector=ml5.objectDetector("cocossd", modelLoaded)
       document.getElementById("status").innerHTML="Status: "+"Detecting objects"
       object=document.getElementById("name").value
   
   }
   
   function modelLoaded(){
       console.log("model is loaded")
   
       status=true
   }
   function draw(){
       image(video,0,0,380,380)
   }