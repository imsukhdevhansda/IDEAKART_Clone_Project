

let userData = JSON.parse(localStorage.getItem('bookUserData')) || [];

let getUserData = ()=>{
    let userCPass =document.getElementById('signup_cpassword').value; 

    let user_name = document.getElementById('signup_name').value 
    let user_mob  = document.getElementById('signup_number').value 
    let user_email  = document.getElementById('signup_email').value 
    let user_password  = document.getElementById('signup_password').value
    if(user_name !== "" && user_mob !== "" && user_email !== "" && user_password !== "" && userCPass !== ""){

    let userObj ={
        user_name  ,
        user_mob  ,
        user_email  ,
        user_password  
        
    }

    if(userCPass === userObj.user_password){
       userData.push(userObj);
       localStorage.setItem('bookUserData', JSON.stringify(userData));
       alert('Sign Up successful (: (:')

    document.getElementById('signup_name').value = null ;
    document.getElementById('signup_number').value = null ;
    document.getElementById('signup_email').value = null ;
    document.getElementById('signup_password').value = null ;

    window.location.href = "../FE/signin.html"
       
    }
    else{
        alert('Your password is not matching');
    }
}
else{
    alert("Please fill all the fields")
}


}