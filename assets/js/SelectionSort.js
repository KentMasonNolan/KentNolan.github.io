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