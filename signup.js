function signup() {
    
    let name = document.querySelector("#id").value
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value
    if (name === "") 
        { 
           alert("please enter your username")
        }
    else if (email === "") 
    {
        alert("please enter your email")
    }
    else if(!(email.includes('@') && email.includes(".com")))
    {
        alert("please enter your email correctly")
    }

    else if (password === "") 
    {
        alert("please enter your email correctly")
    }
    else if(name===name && email===email && password===password )
    {
        window.location.href = "./signup.html"

    }
    localStorage.setItem("name" , name)
    localStorage.setItem("email" , email)
    localStorage.setItem("password" , password)
    return false;
    }