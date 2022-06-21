

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
     $("#messagelogin").html(errorMessage);

    //Calling API

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
                    alert(jqXHR.status);
                    alert(exception);
                }

            });

              
});


/* Login functions

*/

