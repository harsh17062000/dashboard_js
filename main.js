//main function
async function run(){
    let data = await fetch('http://localhost:3000/product');
    let response = await data.json();

    
    selecttable.innerHTML = response.map((items) => `
 
        <tr>
        <td>${items.id}</td>
        <td>${items.email}</td>
        <td>${items.username}</td>
        <td><i class="fa-solid fa-eye" style="color: rgb(16, 144, 194);"></i></td>
        <td><i onclick="del('${items.id}')" class="fa-solid fa-delete-left" style="color: rgb(255, 0, 0);"></td>
        <td><i onclick="updateform('${items.id}')" class="fa-solid fa-pen-to-square" style="color: rgb(255, 94, 0);"></i></td>
        </tr>
    `).join(" ");
}

//delete function
function del(items){
    let res = window.confirm("do you really want to delete this information")
   
    if(res)
    {
        
        fetch(`http://localhost:3000/product/${items}`,{method:"DELETE"});
    }
    else
    {
        alert("invalid click")
    }
}



//update function
let uid = null;
async function updateform(id){
    let data = await fetch(`http://localhost:3000/product/${id}`);
    let res = await data.json();
    uid = id
    let selectform = document.querySelector('#upform');
    selectform.style.display = "block";

    document.querySelector('#email').value = res.email;
    document.querySelector('#username').value = res.username; 

    let selectwebsite = document.querySelector('#website');
    selectwebsite.style.display = "none";

}



//final update

function finalupdate(){
    let email =  document.querySelector('#email').value;
    let username = document.querySelector('#username').value;
    
    let obj = {
        "email":email,
        "username":username,
    }

    fetch(`http://localhost:3000/product/${uid}`,{method:"PUT",body:JSON.stringify(obj)});;
}



//add form

function showdataform(){
    let selectadform = document.querySelector('#addform');
    selectadform.style.display = "block";
     let selectwebsite = document.querySelector('#website');
    selectwebsite.style.display = "none";
    let a = document.getElementsByClassName("container")
    a.style.display = "none"
}

function add(){
    let email =  document.querySelector('#emailadd').value;
    let username = document.querySelector('#usernameadd').value;
    
    let obj = {
        "email":email,
        "username":username,
    }

    fetch(`http://localhost:3000/product/`,{method:"POST",body:JSON.stringify(obj)});;
}