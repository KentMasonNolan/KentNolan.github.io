let slider;
let values = [];
let i = 0;
let j = 0;
let button;
let boxSize;
let sortStarted = false;
let bubblesortStarted = false;
let selectionsortStarted = false;
let sel;
let go = false;
let selection = false;
let sortAlg = 0;
let heapSortStarted = false;
function setup() {

  let cnv = createCanvas(900,930);
  cnv.parent('sketch-holder');
function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
  }

function windowResized() {
  centerCanvas();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




  slider = createSlider(1, 2, 1, 0.1);
  slider.position(width +10, -screen.height);
  slider.style('width', '80px');
  val = slider.value();

  for(let i = 0; i < width/10*val; i++) {
    values.push(floor(random(0, height)));
  }
  let buttonreset = createButton('Reset');
  buttonreset.mousePressed(reset);
  // buttonreset.position(0,710);
  buttonreset.parent('button-row');

  // let buttonGo = createButton('Go');
  // buttonGo.mousePressed(() => go = true);
  // // buttonGo.position(150, screen.height-200);
  // buttonGo.parent('button-row');
  //
  let buttonHeap = createButton('Heap Sort');
  buttonHeap.mousePressed(() => heapSortStarted = true);
  buttonHeap.mousePressed(() => sortAlg = 3);
  buttonHeap.parent('button-row');
  console.log(sortAlg);


  let buttonSel = createButton('Selection Sort');
  // buttonSel.mousePressed(selectionSort);
  buttonSel.parent('button-row');
  buttonSel.mousePressed(() => selectionsortStarted = true);
  buttonSel.mousePressed(() => sortAlg = 1);
  console.log(sortAlg);

  let buttonBub = createButton('Bubble Sort');
  buttonBub.mousePressed(bubbleSort);
  buttonBub.mousePressed(() => bubblesortStarted = true);
  // buttonBub.mousePressed();
  buttonBub.parent('button-row');
  console.log(sortAlg);


}

function draw() {
  background(31, 41, 55);
  build();

  if (selectionsortStarted === true){
    selectionSort(values)
  }
  if (heapSortStarted === true) {
    heapSort(values)
  }
  if (bubblesortStarted === true) {
    bubbleSort(values)
  }

  // switch (sortAlg) {
  //   case 1:
  //     bubbleSort()
  //     go = false
  //     break;
  //   case 2:
  //     selectionSort()
  //     go = false
  //     break;
  //   case 3:
  //     console.log(sortAlg)
  //     break;
  //
  // }
}

      function build() {
        for (let i = 0; i < values.length; i++) {
          fill(190)
          strokeWeight(2);
          stroke(0);
          rect(i * width / values.length, height - values[i], width / values.length, values[i], 2, 2);
        }
      }
