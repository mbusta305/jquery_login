//Problem: hints are showing even when form is valid
//Solution: hide hints once valid.
var $password = $("#password");
var $confirmPassword = $("#confirm_password");
//hide hints
$("form span").hide();

function passwordEvent () {
  //find out if password is valid
  if ($password.val().length > 8) {
    //hide if valid
    $password.next().hide();
  } else {
    //else show hints
    $password.next().show();
  }

}

function confirmPasswordEvent () {
  //find out if password and confirmation match
  if ($password.val() === $confirmPassword.val()) {
    //hide hint if match
    $confirmPassword.next().hide();
} else {
    //else show hint
    $confirmPassword.next().show();
  }
}
//when event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

//when event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
