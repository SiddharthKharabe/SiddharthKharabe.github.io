function setup() {
    createCanvas(400, 400);
    background(220);
  }
  
  function draw() {
    
    
    fill("green")
    rect(frameCount/3+200,300,100,70,70);
    fill("blue")
    rect(mouseX+100, 100,200,100);
    fill("red")
    rect(mouseX-50, 90,100,100);
    fill("orange")
    rect(mouseX/2, 25,50,50);
    //fill("rgb(146,146,207)")
    if ((frameCount% 400)> 10)
    {
      fill("rgb(146,146,207)")
    }
    else
      {
        fill("rgb(111,236,149)")
      }
    rect( frameCount % 400,25,50,50)
    
    rect(25,mouseX/2,50,50,15);
    fill("pink")
    circle(25, 400-frameCount/2, 10+frameCount/20)
    fill("grey")
    rect(frameCount/1+20,200,65,35,20)
    fill("purple")
    rect(300+50,frameCount/1,65,35,20)
    if (mouseX>200)
    {
      fill("black")
    }
    else
      {
        fill("yellow")
      }
    rect( frameCount % 400,25,50,50)
    
  }