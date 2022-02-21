// let total = 100
// let xs = []
// let x4 = []

let ys = []
let xs = []
let dxs = []
let dys = []
let count = 0
let flag = true


function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255,0,0);
  // noCursor();
  for(let i=0; i < 100; i++){
      xs.push(random(0,width));
      ys.push(0);
      dxs.push(0);
      dys.push(1);
  }
 
}

function draw (){
  // count+=1;
  // count = count%height;
  background(255,0.2*count,0,25);
  strokeWeight(2);
  // fill(255);
  // ellipse(mouseX, mouseY, 150);
  for(let i=0; i < 100; i++){
    xs[i] += dxs[i];
    ys[i] += dys[i];
    count = ys[i];
    if (ys[i]>mouseY){
      noCursor();
    }
    else{
      cursor();
    }
    if (xs[i] == 0||xs[i] == width) {
        dxs[i]= -dxs[i];
    }
    if (ys[i] == height) {
      ys[i]= 0;
    }
    xs[i] = xs[i]%width;
    for (let j = 0; j < 100;j++) {
      if (dist(xs[i],ys[i], xs[j],ys[j]) < 30) {
        line(xs[i],ys[i], xs[j],ys[j]);
      }
      
    }

  }

}





function mouseReleased() {
  for(let i=0; i < innerWidth; i++){
      if (dist(mouseX,mouseY, xs[i],ys[i]) < 100){
        if (flag) {
          dxs[i] = (mouseX-xs[i])*0.05;
          // ys[i] = ys[i]+ 100;
        } 
        else {
          dxs[i] = (mouseX-xs[i])*0.05; 
          // ys[i] = ys[i]+ 100;
        } 
    }
    flag = !flag;
  }

}




