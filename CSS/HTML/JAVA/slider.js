
let slider;
let slider1;
let radio;
let width1;
let height1;
let colorPicker1;let colorPicker2;let colorPicker3;
function setup() {
 createCanvas(800, 500);
 
 slider = createSlider(1, 9, 3)
 slider.position(900, 300)
 slider.style('width', '80px')
 
 slider1 = createSlider(1, 9, 3)
 slider1.position(900,350)
 slider1.style('width', '80px')
 
  width1 = createSlider(30, 50, 10)
 width1.position(900, 400)
 width1.style('width', '80px')
 
 height1 = createSlider(30, 50, 10)
 height1.position(900, 450)
 height1.style('width', '80px')
 
 radio = createRadio();
 radio.option("Rect");
 radio.option("RoundRect");
 radio.option("Circle");
 radio.position(900,500)
 radio.selected()
 
 colorPicker1 = createColorPicker('#ed225d');
 colorPicker1.position(900,550);
 colorPicker2 = createColorPicker('#ed225d');
 colorPicker2.position(950,550);
 
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
 
text("column",600,150)
  text("row",600,100)
 text("width",600,200)
 text("height",600,250)
 
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








  

