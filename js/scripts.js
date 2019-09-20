function python(animalInput, seasonInput, holidayInput, heroInput, getAwayInput){
  var threeOfFive = 0;
  var pythonWins = false;

  if (animalInput === "1") {
    threeOfFive ++;
  }
  if (seasonInput === "1") {
    threeOfFive ++;
  }
  if (holidayInput === "1") {
    threeOfFive ++;
  }
  if (heroInput === "1") {
    threeOfFive ++;
  }
  if (getAwayInput === "1") {
    threeOfFive ++;
  }
  if (threeOfFive >= 3){
    pythonWins === true
  }
  return pythonWins;
};

function ruby(animalInput, seasonInput, holidayInput, heroInput, getAwayInput){
  var threeOfFive = 0;
  var rubyWins = false;

  if (animalInput === "2") {
    threeOfFive ++;
  }
  if (seasonInput === "2") {
    threeOfFive ++;
  }
  if (holidayInput === "2") {
    threeOfFive ++;
  }
  if (heroInput === "2") {
    threeOfFive ++;
  }
  if (getAwayInput === "2") {
    threeOfFive ++;
  }
  if (threeOfFive >= 3){
    rubyWins === true
  }
  if (rubyWins === true){
    $('.ruby').show();
  }

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
    $('.ruby').show();


    $('.name').text(nameInput);

    alert("does this make it?")


  });
});
