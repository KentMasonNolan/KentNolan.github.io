let slider;
let values = [];
let i = 0;
let j = 0;
var button;
let boxSize;
let sortStarted = false;
let bubblesortStarted = false;
let selectionsortStarted = false;
let sel;
let go = false;

function setup() {
  createCanvas(1200, 700);



  slider = createSlider(1, 2, 1, 0.1);
  slider.position(width +10, height - 800);
  slider.style('width', '80px');
  val = slider.value();

  for(let i = 0; i < width/10*val; i++) {
    values.push(floor(random(0, height)));
  }
  let buttonreset = createButton('Reset');
  buttonreset.mousePressed(reset);

  let buttonGo = createButton('Go');
  buttonGo.mousePressed(() => go = true);

  /*let buttonSel = createButton('Selection Sort');
  buttonSel.mousePressed(selectionSort);
  buttonSel.mousePressed(() => selectionsortStarted = true);

  let buttonbub = createButton('Bubble Sort');
  buttonbub.mousePressed(bubbleSort);
  buttonbub.mousePressed(() => bubblesortStarted = true);
*/
}

function draw() {
  background(31, 41, 55);
  build();
  if (go) {
    bubbleSort(values);
    console.log(values);
  }  
  /*if (go == true && bubblesortStarted == true) {
      bubbleSort();
    }
  else if (go == true && selectionsortStarted == true){
      selectionSort();
    }
  */}

function build(){
  for(let i = 0; i < values.length; i++) {
    fill(190)
    strokeWeight(2);
    stroke(0);
    rect(i * width/values.length, height - values[i], width/values.length, values[i],2,2);
  }
}