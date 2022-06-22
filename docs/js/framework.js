$(document).ready(function() {

    if(localStorage.getItem('user')==null)
    {
        $( "ul li" ).filter( ".loggedin" ).hide();
        $( "ul li" ).filter( ".loggedout" ).show();
    }
    else{
        $( "ul li" ).filter( ".loggedin" ).show();
        $( "ul li" ).filter( ".loggedout" ).hide();
        $( "ul li" ).filter( ".loggedin" ).find("span#user_name").text(localStorage.getItem('user'));
    }

});



/* Login functions


*/

$(document).on("click","#btnlogin",function() {

  $("#btnlogin").attr("disabled", true);


    //Validation Part
    var email=$("#login_email").val().trim();
    var password=$("#login_password").val().trim();

    var errorMessage='';

    if(email=='')
    {
      errorMessage='Email is blank';
    }

    if(password=='')
    {
        if(errorMessage=='')
          errorMessage='Password is blank';
        else
          errorMessage='Email and Password are blank';
    }

    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
       if(errorMessage=='')
        errorMessage='Email is invalid';
      else
        errorMessage=errorMessage + '<br/>' + 'Email is invalid';
    }

   if(errorMessage.trim()!='')
   {
     $("#messagelogin").html(errorMessage);
   }
   else
   {
    $("#messagelogin").html('');
   var api_url='https://onboard-module.azurewebsites.net/api/Login?code=yl1EC8luZkd2-xdohKBjnnXb7hjET1sbG5FQcGJgWMpsAzFueNYMvw==';
    var data_={
                "Email":email,
                "Password":password
             };


             $.ajax({
                url: api_url,
                type: 'POST',
                data: JSON.stringify(data_),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                async: false,
                success: function(msg) {
                    alert(msg);
                },
                error: function (jqXHR, exception) 
                {
                    if(jqXHR.responseText.trim()=='')
                    {
                      $("#messagelogin").text("Invalid UserName/Password")
                    }
                    else
                    {
                        $( "ul li" ).filter( ".loggedout").hide();
                        $( "ul li" ).filter( ".loggedin" ).show();
                        $( "ul li" ).filter( ".loggedin" ).find("span#user_name").text(jqXHR.responseText.trim());
                        $('#Login').modal('toggle');
                        localStorage.setItem('user',jqXHR.responseText.trim());
                    }
                }

            });
        }
        $("#btnlogin").removeAttr("disabled");      
});


/* Logout functions

*/


function logout()
{
    localStorage.removeItem('user');
    window.location.reload();
}



/*

Registration

*/
$(document).on("click","#btnregis",function() {

  $("#btnregis").attr("disabled", true);
  //Validation Part
  var first_name=$("#regis_fname").val().trim();
  var last_name=$("#regis_lname").val().trim();
  var phone=$("#regis_phone").val().trim();
  var email=$("#regis_email").val().trim();
  var password=$("#regis_pwd").val().trim();
  var confirm_password=$("#regis_conpwd").val().trim();

  var errorMessage='';

  if(first_name=='')
  {
    errorMessage='FirstName is blank';
  }

  if(last_name=='')
  {
    if(errorMessage=='')
      errorMessage='LastName is blank';
    else
      errorMessage=errorMessage + '</br>' + 'LastName is blank';
  }


  if(email=='')
  {
    if(errorMessage=='')
      errorMessage='Email is blank';
    else
      errorMessage=errorMessage + '</br>' + 'Email is blank';
  }

  if(password=='')
  {
    if(errorMessage=='')
      errorMessage='Password is blank';
    else
      errorMessage=errorMessage + '</br>' + 'Password is blank';
  }

  if(confirm_password=='')
  {
    if(errorMessage=='')
      errorMessage='Confirm-Password is blank';
    else
      errorMessage=errorMessage + '</br>' + 'Confirm-Password is blank';
  }

  if(confirm_password!=password)
  {
    if(errorMessage=='')
      errorMessage='Password and confirm password is not matched';
    else
      errorMessage=errorMessage + '</br>' + 'Password and confirm password is not matched';
  }


  if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
     if(errorMessage=='')
      errorMessage='Email is invalid';
    else
      errorMessage=errorMessage + '<br/>' + 'Email is invalid';
  }


  if(!/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/.test(phone))
  {
    if(errorMessage=='')
    errorMessage='Phone is invalid';
  else
    errorMessage=errorMessage + '<br/>' + 'Phone is invalid';
  }

 if(errorMessage.trim()!='')
 {
  $("#messageregis").css('color','red');
   $("#messageregis").html(errorMessage);
 }
 else
 {
  $("#messageregis").html('');
 var api_url='https://onboard-module.azurewebsites.net/api/Registration';
  var data_={
              "Email":email,
              "Password":password,
              "Mobile":phone,
              "FirstName":first_name,
              "LastName":last_name
            }


           $.ajax({
              url: api_url,
              type: 'POST',
              data: JSON.stringify(data_),
              contentType: 'application/json; charset=utf-8',
              dataType: 'json',
              async: false,
              success: function(msg) {
                  alert(msg);
              },
              error: function (jqXHR, exception) 
              {
                  if(jqXHR.responseText.trim()=='User Created Successfully')
                  {
                    $("#messageregis").css('color','green');
                    $("#messageregis").text(jqXHR.responseText.trim())
                    
                  }
                  else
                  {
                    $("#messageregis").css('color','red');
                    $("#messageregis").text(jqXHR.responseText.trim())
                  }
              }

          });
      }
       $("#btnregis").removeAttr("disabled");       
});
