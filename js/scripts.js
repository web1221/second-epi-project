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

    if (ruby(animalInput, seasonInput, holidayInput, heroInput, getAwayInput) >= 3) {
      $(".ruby").show()
      $("#output").show();
      $(".python").hide();
      $(".javascript").hide();
      $(".cSharp").hide();
      $(".go").hide();

    } else if (python(animalInput, seasonInput, holidayInput, heroInput, getAwayInput) >= 3) {
      $(".python").show();
      $("#output").show();
      $(".ruby").hide();
      $(".javascript").hide();
      $(".cSharp").hide();
      $(".go").hide();

    } else if (cSharp(animalInput, seasonInput, holidayInput, heroInput, getAwayInput) >= 3) {
      $(".cSharp").show();
      $("#output").show();
      $(".ruby").hide();
      $(".javascript").hide();
      $(".python").hide();
      $(".go").hide();

    } else if (javascript(animalInput, seasonInput, holidayInput, heroInput, getAwayInput) >= 3){
      $(".javascript").show();
      $("#output").show();
      $(".ruby").hide();
      $(".python").hide();
      $(".cSharp").hide();
      $(".go").hide();
    } else {
      $(".go").show();
      $("#output").show();
      $(".ruby").hide();
      $(".python").hide();
      $(".cSharp").hide();
      $(".javascript").hide();
    }

    $('.name').text(nameInput);


  });

  $('.btn').click(function() {
    $('#output').fadeIn(5000);

  });
});
