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