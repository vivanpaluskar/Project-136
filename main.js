status="";
function preload(){
    video = createVideo('video.mp4');
}
function setup(){
    canvas = createCanvas(600, 400);
    canvas.center();
    video.size(600, 400);
    video.hide();
}
function start(){
    objectDetector = ml5.objectDetector('cocoSSD', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
    document.getElementById("object_name").value;
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}
function draw(){
    image(video, 0, 0, 600, 400);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function draw(){
    if(status != ""){
        for(i=0; i<objects.length; i++){
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y +15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}