//use jquery

$(document).ready(function(){
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
  
  // if(usernameTxt!="" && passwordTxt!=""){
  //   document.getElementById("signIn").disabled = false;
  // };
});