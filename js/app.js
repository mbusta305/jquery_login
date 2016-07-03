//Problem: hints are showing even when form is valid
//Solution: hide hints once valid.

//hide hints
$("form span").hide();

function passwordEvent () {
  //find out if password is valid
  if ($(this).val().length > 8) {
    //hide if valid
    $(this).next().hide();
  } else {
    //else show hints
    $(this).next().show();
  }
  
}
//when event happens on password input
$("#password").focus(passwordEvent).keyup(passwordEvent);


//when event happens on confirmation
  //find out if password and confirmation match
  //hide hint if match
  //else show hint
