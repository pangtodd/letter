$(document).ready(function(){
  $(".form-uno").submit(function(event) {
    const firstNameInput=$("input#firstName").val();
    const lastNameInput=$("input#lastName").val();
    const carTypeInput=$("input#carType").val();
    const domicleInput=$("input#domicle").val();

    $(".firstName").append(firstNameInput);
    $(".lastName").append(lastNameInput);
    $(".carType").append(carTypeInput);
    $(".domicle").append(domicleInput);

    $("#letter").show();
    $(".form-uno").hide();

    event.preventDefault();
  })
})