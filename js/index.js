//use jquery

$(document).ready(function(){

  $('.alert-msg').hide();

  var alert = "Logged out of last session!";

  function displayAlertMsg(msg) {
    $('.alert-msg')
      .addClass('info')
      .html(msg)
      .delay(200)
      .slideDown(700)
  }

  displayAlertMsg(alert);

  var username = $('input[type=text]');
  var password = $('input[type=password]');

  button = $("button");

  var usernameTxt = $('input[type=text]').val();
  var passwordTxt = $('input[type=password]').val();

  toggleButton();

  username
    .keypress(toggleButton)
    .keyup(toggleButton);

  password
    .keypress(toggleButton)
    .keyup(toggleButton);

  function toggleButton() {
    usrLen = username.val().length;
    pwdLen = password.val().length;
    if (usrLen != 0 && pwdLen != 0) {
     button
       .removeAttr("disabled")
       .addClass('activeButton');
    }
    else {
       button.attr("disabled", "disabled");
       button.removeClass('activeButton');
    }
  };

});
