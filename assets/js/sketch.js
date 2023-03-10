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
let selection = false;

function setup() {
  let cnv = createCanvas(window.innerWidth-20, window.innerHeight-10);

  cnv.position(0,60);


  slider = createSlider(1, 2, 1, 0.1);
  slider.position(width +10, -screen.height);
  slider.style('width', '80px');
  val = slider.value();

  for(let i = 0; i < width/10*val; i++) {
    values.push(floor(random(0, height)));
  }
  let buttonreset = createButton('Reset');
  buttonreset.mousePressed(reset);
  buttonreset.position(0,710);

  let buttonGo = createButton('Go');
  buttonGo.mousePressed(() => go = true);
  buttonGo.position(150, screen.height-200);

  let buttonBubble = createButton('Selection');
  buttonBubble.mousePressed(() => selection = true);
  buttonBubble.position(300, 710);

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

  // This should be turned into a Case Select where the button sets the values of the function and the others back to 0
    if (go === true) {
    bubbleSort(values);
  // else if (selection == true); {
  //   selectionSort(values)
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