$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    const input1 = $("input#input1").val() + ("! ");
    event.preventDefault();
    $("p#para").append(input1.toUpperCase());
  });
});