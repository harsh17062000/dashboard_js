function logins()
{
    let a = localStorage.getItem("email");
    let b = localStorage.getItem("password");
    let email = document.querySelector("#email1").value;
    let password = document.querySelector("#password1").value;
    if(email==a && password==b)

    {
        window.location.href = "./main.html"
    }
    else{
        window.alert("Please enter valid email and password")
    }
return false;
}