const admi_list = [
    { email: "admin", contraseña: "root" }
];

function validar() {
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("password").value;
    var contraseña_confirm = document.getElementById("password-confirm").value;
    var bandera = 0;
if(email!="" && contraseña!="" && contraseña_confirm!=""){

    for (let i = 0; i < admi_list.length; i++) {
        if(contraseña==contraseña_confirm){
            if (
                email == admi_list[i].email &&
                contraseña == admi_list[i].contraseña
            ) {
                bandera = 0;
                alert("Bienvenido " + admi_list[i].email);
                i = admi_list.length;
                window.location.assign("../../src/html/vista-admi.html");
            } else {
                bandera = 1;
            }
        } else{
            alert("Usuario o contraseña incorrectos");
        }
    }

}else{
    alert("Ingrese los datos pedidos");
}
    if (bandera == 1) {
        alert("Usuario o contraseña incorrectos");
    }
}
