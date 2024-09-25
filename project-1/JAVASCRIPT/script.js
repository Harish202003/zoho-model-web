$(document).ready(function(){
  $("#click").click(function(){
        $("#boldhead").toggle("");
  });
  $("#maindiv1").hover(function(){
      $("#maindiv1").toggleClass("hightlight");
      $("#mainhead1").toggleClass("underline");
  });
  $("#maindiv2").hover(function(){
    $("#maindiv2").toggleClass("hightlight");
    $("#mainhead2").toggleClass("underline");
});
$("#maindiv3").hover(function(){
    $("#maindiv3").toggleClass("hightlight");
    $("#mainhead3").toggleClass("underline");
});
$("#maindiv4").hover(function(){
    $("#maindiv4").toggleClass("hightlight");
    $("#mainhead4").toggleClass("underline");
});
  $("#careersdiv1").hover(function(){
      $("#careersdiv1").toggleClass("careerhightlight");
      $("#careerhead1").toggleClass("underline");
  });  
  $("#careersdiv2").hover(function(){
    $("#careersdiv2").toggleClass("careerhightlight");
    $("#careerhead2").toggleClass("underline");
});  
$("#careersdiv3").hover(function(){
    $("#careersdiv3").toggleClass("careerhightlight");
    $("#careerhead3").toggleClass("underline");
});  
  });
function validation(){
    validName();
    validLname();
    validContact();
    validPassword();
    validEmail();
}
function validName(){
    var name = document.getElementById("name").value;
    var errName = document.getElementById("validname");
    var regEx = /^[a-zA-Z]+(\s|[a-zA-Z])*$/;
    if(name==""){
        errName.innerHTML="Please enter the name";
    }
    else if(!regEx.test(name)){ 
        errName.innerHTML="Please enter a valid name";
    }
    else{
        errName.innerHTML="";
    }
}

 function validLname(){
     var lname=document.getElementById("lname").value;
     var errlname=document.getElementById("validLname");
     var regEx=/^[A-za-z]*$/;
     if(lname==""){
         errlname.innerHTML="please enter the last name";
     }
     else if(!regEx.text(lname)){
         errlname.innerHTML="please enter the valid name";
     }
     else{
         errlname.innerHTML="";
     }
 }
 function validContact(){
     var contact=document.getElementById("number").value;
     var errcontact=document.getElementById("validcontact");
     var regEx=/^[0-9]+$/;
     if(contact==""){
         errcontact.innerHTML="please enter the phone number";
     }
     else if(!regEx.text(contact)){
         errcontact.innerHTML="please enter the valid number";
     }
     else{
         errcontact.innerHTML="";
    }
}
function validPassword(){
    var password = document.getElementById("password").value;
    var errPassword = document.getElementById("validpassword");
    var regEx = /^[a-zA-Z]+[0-9]+[@$-]+$/;
    if(password==""){
        errPassword.innerHTML="Please enter the password";
    }
    else if(!regEx.test(password)){ 
        errPassword.innerHTML="Please enter a valid password";
    }
    else{
        errPassword.innerHTML="";
    }
}
function validEmail(){
    var email = document.getElementById("email").value;
    var errEmail = document.getElementById("validEmail");
    var regEx = /^[a-z]+[0-9]+@[a-z]+\.(com|in|net)$/;
    if(email==""){
        errEmail.innerHTML="Please enter the email id";
    }
    else if(!regEx.test(email)){ 
        errEmail.innerHTML="Please enter a valid email id";
    }
    else{
        errEmail.innerHTML="";
    }
}
