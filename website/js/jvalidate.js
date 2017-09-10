var user=new Object();
            var f=document.myForm;
            function validateForm()
            {   var ret=1;
                while(ret==1){
                    ret=1;
                    var x=f.username.value;
                    var y=f.password.value;
                    var e=f.email.value.toString();
                    
                    user.username=x;
                    user.password=y;
                    user.email=e;

                    if (x==null || x=="")
                    {
                        document.getElementById("uname_error").innerHTML="Username must be filled out";
                        
                    }else{
                        document.getElementById("uname_error").innerHTML="";
                        ret=0;
                    }

                    var atpos=e.indexOf("@");
                    var dotpos=e.lastIndexOf(".");
                    //alert(atpos+' + '+dotpos)
                    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=e.length)
                    {
                        document.getElementById("email_error").innerHTML="Invalid e-mail address";
                    }else{
                        document.getElementById("email_error").innerHTML="";
                        ret=0;
                    }
                   if(y==null || y==""){
                        document.getElementById("password_error").innerHTML="please enter your password";
                    }else{
                        document.getElementById("password_error").innerHTML="";
                        
                    }
                    alert('good');

                }
            }
            
           