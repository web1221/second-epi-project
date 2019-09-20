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

function ruby(para1, para2, para3, para4, para5){
  var threeOfFive = 0;
  var rubyWins = false;

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

  // if (threeOfFive >= 3){
  //   rubyWins === true
  // }
  // if (rubyWins === true){
  //   return rubyWins
//   }
//
// };



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
      $('.name').text(nameInput);
    }

    $('.name').text(nameInput);

    alert("does this make it?")


  });
});
