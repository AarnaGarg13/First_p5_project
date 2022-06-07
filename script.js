function preload()
{

}
function setup()
{
    canvas = createCanvas(450 , 400)
    webcam = createCapture(VIDEO)
    webcam.hide()
}
function draw()
{
    image(webcam , 128 , 100 , 200 , 200)
    fill("green");
    stroke("green");
    rect(25, 20, 400, 30);
    fill("green");
    stroke("green");
    rect(25, 20, 30, 350);
    fill("green");
    stroke("green");
    rect(400, 20, 30, 350);
    fill("green");
    stroke("green");
    rect(25, 350, 405, 30);
    fill("red");
    stroke("red");
    circle(40, 40, 70);
    fill("red");
    stroke("red");
    circle(410, 40, 70);
    fill("red");
    stroke("red");
    circle(40, 360, 70);
    fill("red");
    stroke("red");
    circle(410, 360, 70);
}
function capture_image()
{
    save("project_img.png")
}
