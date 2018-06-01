(function() {
  'use strict';

  // YOUR CODE HERE

  //REDLIGHT Code Below
  let redLight = document.getElementById("stopLight");
  let redButton = document.getElementById("stopButton");
  redButton.addEventListener("click", function() {

    if (redLight.style.backgroundColor !== "red") {
      redLight.style.backgroundColor = "red"
    } else {
      redLight.style.backgroundColor = "black"
    }
  })


//=====================================================

  //YELLOWLIGHT Code Below
  let yellowLight = document.getElementById("slowLight");
  let yellowButton = document.getElementById("slowButton");
  yellowButton.addEventListener("click", function() {

    if (yellowLight.style.backgroundColor !== "yellow") {
      yellowLight.style.backgroundColor = "yellow"
    } else {
      yellowLight.style.backgroundColor = "black"
    }
  })



//=====================================================

  //GREENLIGHT Code Below
  let greenLight = document.getElementById("goLight");
  let greenButton = document.getElementById("goButton");
  greenButton.addEventListener("click", function() {

    if(greenLight.style.backgroundColor !== "green"){
      greenLight.style.backgroundColor = "green"
    } else{
      greenLight.style.backgroundColor = "black"
    }
  })



  stopButton.addEventListener("mouseover", mouseOverStop);


  stopButton.addEventListener("mouseout", mouseOutStop);

  slowButton.addEventListener("mouseover", mouseOverSlow);

  slowButton.addEventListener("mouseout", mouseOutSlow);

  goButton.addEventListener("mouseover", mouseOverGo);

  goButton.addEventListener("mouseout", mouseOutGo);


  function mouseOverStop(){
    console.log("Entered Stop Button");
  };

  function mouseOutStop(){
    console.log("Left Stop Button");
  };

  function mouseOverSlow(){
    console.log("Entered Slow Button");
  };

  function mouseOutSlow(){
    console.log("Left Slow Button");
  };

  function mouseOverGo(){
    console.log("Entered Go Button");
  };

  function mouseOutGo(){
    console.log("Left Out Button");
  };












})();
