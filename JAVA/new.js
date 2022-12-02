let btnRock, btnPaper, btnScissors, btnGame, btn3Game, btn5Game, btnReplay, btnExit ;

let RndNumber = 0 ; 

// variable for text 
let notes = "Welcome to My game , plz choose  your option."
let result = ""



function setup()
{
  createCanvas(500, 500);
  
  btnGame = createButton("Single Game")
  btnGame.position (95, 280)
  btnGame.style("width" , "100px")
  btnGame.mousePressed(showRPS)
  //btnGame.hide()
    

  btnRock = createButton("Rock")
  btnRock.position (95, 280)
  btnRock.style("width" , "100px")
  btnRock.mousePressed(CompRock)
  btnRock.hide()
    
  btnPaper = createButton("Paper")
  btnPaper.position (205, 280)
  btnPaper.style("width" , "100px")
  btnPaper.mousePressed(CompPaper)
  btnPaper.hide()
  
  btnScissors = createButton("Scissors")
  btnScissors.position (315, 280)
  btnScissors.style("width" , "100px")
  btnScissors.mousePressed(CompScissors)
  btnScissors.hide()
  
  btnReplay = createButton("New Game")
  btnReplay.position (125, 350)
  btnReplay.style("width" , "100px")
  btnReplay.mousePressed( showRPS )
  btnReplay.hide( )
  
  btnExit = createButton("Exit")
  btnExit.position (300, 350)
  btnExit.style("width" , "100px")
  btnExit.mousePressed(  )
  btnExit.hide()
  
  
  
}

function draw()
{
  background(220);
  textSize(20)  
  text( notes, 50, 190);
  textSize(40)
  text (result , 160, 260)
  
  
  //text (RndNumber , 250, 260)
  
} 


function showRPS()
{
  notes = "plz choose one out of Rock, paper, scissors"
  btnGame.hide()
  btn3Game.hide()
  btn5Game.hide()
  
  btnScissors.show()
  btnPaper.show()
  btnRock.show()
  
  
  btnExit.hide()
  btnReplay.hide()
  
  result = " "
  
  RndNumber = round ( random( 0.5, 3.5) )
  
}

function CompRock()
{

   if(RndNumber == 2)
        {
         result = 'You Won !!'
        }
    else if (RndNumber == 3)
        {
          result = 'Computer Won !!'
        }
    else
        {
          result = "It's Tie"
        }

  hideRPS();
  
}


function CompPaper()
{

   if(RndNumber == 1)
        {
         result = 'You Won !!'
        }
    else if (RndNumber == 3)
        {
          result = 'Computer Won !!'
        }
    else
        {
          result = "It's Tie"
        }
  
  hideRPS();
 
}



function CompScissors()
{
   if(RndNumber == 2)
        {
         result = 'You Won !!'
        }
    else if (RndNumber == 1)
        {
          result = 'Computer Won !!'
        }
    else
        {
          result = "It's Tie"
        }
  
  hideRPS();
  
  
}


function hideRPS()
{
  btnPaper.hide()
  btnRock.hide()
  btnScissors.hide()
  
  notes = ""
  
  btnExit.show()
  btnExit.mousePressed(setup)
  btnReplay.show()
  
  
}














let slider;
 let slider1;
 let radio;
let width1;
let height1;
let colorPicker1;let colorPicker2;let colorPicker3;
function setup() {
  createCanvas(700, 600);
  
  slider = createSlider(1, 9, 3)
  slider.position(500, 100)
  slider.style('width', '80px')
  
  slider1 = createSlider(1, 9, 3)
  slider1.position(500,150)
  slider1.style('width', '80px')
  
   width1 = createSlider(30, 50, 10)
  width1.position(500, 200)
  width1.style('width', '80px')
  
  height1 = createSlider(30, 50, 10)
  height1.position(500, 250)
  height1.style('width', '80px')
  
  radio = createRadio();
  radio.option("Rect");
  radio.option("RoundRect");
  radio.option("Circle");
  radio.position(500,300)
  radio.selected()
  
  colorPicker1 = createColorPicker('#ed225d');
  colorPicker1.position(500,350);
  colorPicker2 = createColorPicker('#ed225d');
  colorPicker2.position(550,350);
  
}

function draw() {
   background(220);
   let val = slider.value();
  let val1 = slider1.value();
  let v = radio.value();
  let c1 = colorPicker1.value();
   let c2 = colorPicker2.value();
  let w =  width1.value();
  let h =  height1.value();
  
 text("column",500,100)
   text("row",500,150)
  text("width",500,200)
  text("height",500,250)
  
  for(m=1;m<val1;m++)
    {
  for( i=0;i<val;i++)
    { if(i%2==1 && m%2==1)
      {
        fill(c2)
      }
     else if(i%2==0 && m%2==0)
      {
        fill(c2)
      }
     else
       {
         fill(c1)
       }
        if(v=="Rect"){height1.show()
          rect(h*i+10,h*m,w,w)
        } 
     else if(v=="RoundRect")
      { height1.show()
           rect(h*i+10,h*m,w,w,10)
      }
        else
          { height1.hide()
            circle(50*i+45,50*m,w)
          }
        }
    }
}








function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }