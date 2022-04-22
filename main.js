noseX=0
noseY=0
difference=0
leftWristX=0
rightWristX=0

function setup(){
    video=createCapture(VIDEO)
    video.size(550,500)
    canvas=createCanvas(550,550)
    canvas.position(560,150)
    poseNet=ml5.poseNet(video,modelloaded)
    poseNet.on("pose",gotPoses)
}
function modelloaded(){
    console.log("poseNet is Initialized")

}
function draw(){
    background("grey")
    fill("pink")
    stroke("pink")
    square(noseX,noseY,difference)
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x
        noseY=results[0].pose.nose.y
        console.log("nosex= " +noseX+ " nosey= " +noseY)
        leftWristX=results[0].pose.leftWrist.x
        rightWristX=results[0].pose.rightWrist.x
        difference=floor(leftWristX-rightWristX)
        console.log("leftwristx= "+leftWristX+" rightwridtx= "+rightWristX+" difference= "+difference)
        document.getElementById("square_sides").innerHTML="width and height of the square is "+difference+" px"
    }
}