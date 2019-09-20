function python(para1, para2, para3, para4, para5){
  var threeOfFive = 0;

  if (para1 === "1") {
    threeOfFive ++;
  }
  if (para2 === "1") {
    threeOfFive ++;
  }
  if (para3 === "1") {
    threeOfFive ++;
  }
  if (para4 === "1") {
    threeOfFive ++;
  }
  if (para5 === "1") {
    threeOfFive ++;
  }
  return threeOfFive;
};

function ruby(para1, para2, para3, para4, para5){
  var threeOfFive = 0;

  if (para1 === "2") {
    threeOfFive ++;
  }
  if (para2 === "2") {
    threeOfFive ++;
  }
  if (para3 === "2") {
    threeOfFive ++;
  }
  if (para4 === "2") {
    threeOfFive ++;
  }
  if (para5 === "2") {
    threeOfFive ++;
  }
  return threeOfFive;
};

function cSharp(para1, para2, para3, para4, para5){
  var threeOfFive = 0;

  if (para1 === "3") {
    threeOfFive ++;
  }
  if (para2 === "3") {
    threeOfFive ++;
  }
  if (para3 === "3") {
    threeOfFive ++;
  }
  if (para4 === "3") {
    threeOfFive ++;
  }
  if (para5 === "3") {
    threeOfFive ++;
  }
  return threeOfFive;
};

function javascript(para1, para2, para3, para4, para5){
  var threeOfFive = 0;

  if (para1 === "4") {
    threeOfFive ++;
  }
  if (para2 === "4") {
    threeOfFive ++;
  }
  if (para3 === "4") {
    threeOfFive ++;
  }
  if (para4 === "4") {
    threeOfFive ++;
  }
  if (para5 === "4") {
    threeOfFive ++;
  }
  return threeOfFive;
};






$(document).ready(function() {
  $('form#programming-suggester').submit(function(event) {
    event.preventDefault();

    var nameInput = $('input#name').val();
    var animalInput = $("input:radio[name=animal]:checked").val();
    var seasonInput = $("input:radio[name=season]:checked").val();
    var holidayInput = $("input:radio[name=holiday]:checked").val();
    var heroInput = $("input:radio[name=hero]:checked").val();
    var getAwayInput = $("input:radio[name=get-away]:checked").val();
    console.log(animalInput);
    console.log(seasonInput);
    console.log(holidayInput);
    console.log(heroInput);
    console.log(getAwayInput);

    if (ruby(animalInput, seasonInput, holidayInput, heroInput, getAwayInput) >= 3) {
      $(".ruby").show();

    } else if (python(animalInput, seasonInput, holidayInput, heroInput, getAwayInput) >= 3) {
      $(".python").show();

    } else if (cSharp(animalInput, seasonInput, holidayInput, heroInput, getAwayInput) >= 3) {
      $(".c-sharp").show();

    } else if (javascript(animalInput, seasonInput, holidayInput, heroInput, getAwayInput) >= 3){
      $(".javascript").show();
    } else {
      $(".go").show();
    }

    $('.name').text(nameInput);


  });
});
