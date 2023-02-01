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