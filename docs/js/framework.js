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

})



/* Login functions


*/

$(document).on("click","#btnlogin",function() {

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
            
});


/* Logout functions

*/


function logout()
{
    localStorage.removeItem('user');
    window.location.reload();
}

