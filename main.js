noseX=0
noseY=0
function preload() {
    clown_nose = loadImage("https://i.postimg.cc/BZCzSXz0/Clown-Nose-Free-PNG-Image-277x279.png") ;
    
}

function setup() {
    canvas = createCanvas(300,300) ;
    canvas.center() ;
    video=createCapture(VIDEO) ;
    video.size(300,300) ;
    video.hide() ;

    poseNet = ml5.poseNet(video,modelLoaded) ;
    poseNet.on('pose',gotPoses)
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results)
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-5;
        console.log("nose X = "+noseX + ",nose Y = " + noseY)

    }

}

function modelLoaded(){
    console.log("poseNet is loaded")
}
function draw() {
    image(video,0,0,300,300) ;
    image(clown_nose,noseX,noseY,30,30) ;

    
}

function snap() {
 save("picture.png")

}

