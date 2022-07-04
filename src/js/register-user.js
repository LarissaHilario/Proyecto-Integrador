const Register_user=()=>{
    Users=JSON.parse(localStorage.getItem("UsersList"));
    let email = document.getElementById("email").value;
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    let created_user = {email, user, password};

    if(email!="" && user !="" && password!=""){
        Users.push(created_user);
        console.log(Users);
        alert("Usted se ha registrado");
         window.location.assign("../../src/html/inicioSesion.html");
    }else{
        alert("Rellena los campos sugeridos");
    }
    localStorage.setItem("UsersList", JSON.stringify(Users));
}