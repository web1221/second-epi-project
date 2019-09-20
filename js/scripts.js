function python(animal, season, holiday, hero, getAway){
  var threeOfFive = 0;
  var pythonWins = false;

  if (animalInput === 1) {
    threeOfFive ++;
  }
  if (seasonInput === 1) {
    threeOfFive ++;
  }
  if (holidayInput === 1) {
    threeOfFive ++;
  }
  if (heroInput === 1) {
    threeOfFive ++;
  }
  if (getAwayInput === 1) {
    threeOfFive ++;
  }
  if (threeOfFive >= 3){
    pythonWins === true
  }
  return pythonWins;
}
alert("hi")

$(document).ready(function() {
  $('form#programming-suggester').submit(function(event) {
    var nameInput = $('input#name').val();
    var animalInput = $("input:radio[name=animal]:checked").val();
    var seasonInput = $("input:radio[name=season]:checked").val();
    var holidayInput = $("input:radio[name=holiday]:checked").val();
    var heroInput = $("input:radio[name=hero]:checked").val();
    var getAwayInput = $("input:radio[name=get-away]:checked").val();

    if (python(animalInput, seasonInput, holidayInput, heroInput, getAwayInput) === true) {
      $('.python').show();
    }
    $('.name').text(nameInput);
    $('#output').show();
  event.preventDefault();

  });
});
