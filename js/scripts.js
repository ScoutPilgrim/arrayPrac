$(document).ready(function(){
  var answerArr = [3];
  $('#myForm').submit(function(event){
    event.preventDefault();
    //console.log("myForm is being submitted");
    var favAnimal =  $('#inputAnimal').val();
    //console.log(favAnimal);
    var favFood = $('#inputFood').val();
    //console.log(favFood);
    var favPlace = $('#inputPlace').val();
    //console.log(favPlace);
    answerArr = [favAnimal, favFood, favPlace];
    //  console.log("Your answer Array looks like [" + answerArr + "]!");
    newArr = [];
    newArr.push(answerArr[1]);
    newArr.push(answerArr[0]);
    newArr.push(answerArr[2]);
    //console.log(newArr);

    $("#answerList").append('<li id="firstList"></li>');
    $('#firstList').text(newArr[0]);
    $("#answerList").append('<li id="secondList"></li>');
    $('#secondList').text(newArr[1]);
    $("#answerList").append('<li id="thirdList"></li>');
    $('#thirdList').text(newArr[2]);


  });
});
