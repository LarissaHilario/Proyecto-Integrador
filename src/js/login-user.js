const User_login=()=>{
    Users=JSON.parse(localStorage.getItem("UsersList"));
    let password_gived = document.getElementById("password-gived").value;
    let user_gived = document.getElementById("user-gived").value;
    var flag =0;

    if(password_gived !="" && user_gived !=""){
        for(let i =0; i < Users.length; i++){
            if(password_gived==Users[i].password && user_gived==Users[i].email){
                flag=0;
                alert("Bienvenido" + Users[i].user);
                i=Users.length;
                window.location.assign("../../src/html/vista-usuario.html");
            }else{
                flag=1;
            }
        }
    }else{
        alert("Ingrese los datos pedidos");
    }
    if(flag==1){
        alert("Usuario o contraseña incorrectos");
    }
}