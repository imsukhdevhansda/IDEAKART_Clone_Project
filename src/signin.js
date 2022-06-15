
let verifyData = ()=>{
    let userData =  JSON.parse(localStorage.getItem('bookUserData'));
    console.log(userData);

    let vUsermail = document.getElementById('signIn_email').value;
    let vUserpass = document.getElementById('signIn_password').value;
    
    if(vUsermail === "" && vUserpass === ""){
        alert('Please fill all the field');

        
        document.getElementById('signIn_email').value = null;
        document.getElementById('signIn_password').value = null;
        return
    }
    else if(vUsermail !== "" && vUserpass === ""){
        alert('Please fill all the field');

        
        document.getElementById('signIn_email').value = null;
       
        return
    }
    else if(vUsermail === "" && vUserpass !== ""){
        alert('Please fill all the field');

        document.getElementById('signIn_password').value = null;
        return
    }

    let flag = false;
    userData.forEach((elem)=>{
        if(elem.user_email === vUsermail && elem.user_password === vUserpass){
            flag = true;
        }
    });
    

    if(flag === true){
        alert("successfully login (: (:");
        window.location.href = '../index.html'
    }
    else{
        alert('Invalid Credential');

        document.getElementById('signIn_email').value = null;
        document.getElementById('signIn_password').value = null;
    }

};

