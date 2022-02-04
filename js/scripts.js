$(document).ready(function(){
  $(".form-uno").submit(function(event) {
    answer=[]
    answer.push($("input#firstName").val(), $("input#lastName").val(), $("input#carType").val(), $("input#domicle").val())
    
    $(".firstName").append(answer[0]);
    $(".lastName").append(answer[1]);
    $(".carType").append(answer[2]);
    $(".domicle").append(answer[3]);

    $("#letter").show();
    $(".form-uno").hide();

    event.preventDefault();
  })
})