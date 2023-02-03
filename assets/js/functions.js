function bubbleSort() {
    console.log('bubble');
    val = slider.value();
    for(let k = 0;k<80*val;k++){
      if(i<values.length){
        let temp = values[j];
        if(values[j] > values[j+1]){
          values[j] = values[j+1];
          values[j+1] = temp;
        }
        j++;
        
        if(j>=values.length-i-1){
          j = 0;
          i++;
        }
      }
      else{
        go = false;
        bubblesortStarted = false;
      }
    }
  }

function heapify(arr, length, parentIndex) {
    let largest = parentIndex;
    let left = parentIndex * 2 + 1;
    let right = left + 1;

    if (left < length && arr[left] > arr[largest]){
        largest = left;
    }
    if (right < length && arr[right] > arr[largest]){
        largest = right;
    }

    if (largest !== parentIndex) {
        [arr[parentIndex], arr[largest]] = [arr[largest], arr[parentIndex]];

        heapify(arr, length, largest);
    }
// return arr;
}

function heapSort(arr) {
    let length = arr.length;
    let lastParentNode = Math.floor(length / 2 - 1);
    let lastChild = length - 1;

    while (lastParentNode >= 0){
        heapify(arr, length, lastParentNode);
        lastParentNode--;
    }
    while (lastChild >= 0){
        [arr[0], arr[lastChild]] = [arr[lastChild], [arr[0]]];
        heapify(arr, lastChild, 0)
        lastChild--;
    }
    //return arr;
}

function reset(){
    values = [];
    val = slider.value();
    for(let i = 0; i < width/10*val; i++) {
      values.push(floor(random(0, height)));
    }
    go = false;
    i = 0;
    j = 0;
    draw();
    console.log('Reset');
  }

function selectionSort(){
console.log('select');
if (i < values.length - 1) {
    small = values[i];
    pos = i;

    for (j = i + 1; j < values.length; j++) {
    if (values[j] < small) {
        small = values[j];
        pos = j;
    }
    }

    swap(values, i, pos);
} else {
    go = false;
    selectionsortStarted = false;
}
i++;
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
