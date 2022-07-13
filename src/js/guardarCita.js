function opciondeclinica(){
    var OpcionClinica = document.getElementById("opcionClinica").value;
    var fechaDada = document.getElementById("fecha-dada").value;
    var horaCita = document.getElementById("horaCita").value;
    var nombreDado = document.getElementById("NombreDado").value;
    var ApellidoP = document.getElementById("ApellidoP").value;
    var ApellidoM = document.getElementById("ApellidoM").value;
    var Genero = document.getElementById("option1").value;
    var Genero2 = document.getElementById("option2").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var estadoNacimiento = document.getElementById("estadoPaciente").value;
    var codigoPostal = document.getElementById("codigoPostal").value;
    var calleDireccion = document.getElementById("calleDireccion").value;
    var numeroDireccion= document.getElementById("numeroDireccion").value;
    var numeroTelefonico = document.getElementById("numeroTelefonico").value;
    var correoElectronico = document.getElementById("correoElectronico").value;
    var opcionesDoctores = document.getElementById("OpcionesDoctores").value;

    // Empezaremos validando cada una de las condiciones para posteriormente ingresarlos al query

    alert(OpcionClinica);
    alert(fechaDada);
    alert(horaCita)
    alert(nombreDado);
    alert(ApellidoP);
    alert(ApellidoM);
    alert(Genero);
    alert(Genero2);
    alert(fechaNacimiento);
    alert(estadoNacimiento);
    alert(codigoPostal);
    alert(calleDireccion);
    alert(numeroDireccion);
    alert(numeroTelefonico);
    alert(correoElectronico);
    alert(opcionesDoctores);

    // Ingresar la direccion del usuario
    
    // Ingresar nombre del usuario


}

var especialidadDoctor =["Odontólogo","Psicólogo","Neumólogo","Neurocirujano","Otorinolaringólogo","Cardiólogo","Nefrólogo","Dermatólogo",];

var nombreDoctor = [
"Vicentino Madero","Javier Fernandez","Genaro Cuesta","Dolores Ballinas",
"Maria Robles","Alejandro Vazquez","Valeria Muñoa","Pedro Fernandez",
"Roberto Guillén","Ricardo Garza","Diana Soto","Gerado Ruiz",
"Franklin Smith","Rosa González","Samuel García","Benedicta Cruz",
"Angel Clemente","Raymundo Cortés","Jazmín Garibay","Esther Posada",
"Ana Robles","Romeo Solis","Salvador Reyes","Antonio Figueroa",
"Martin Estrada","Celestino Martínez","Roberto Meza","Manuel Alegría",
"Vanessa Clemente","Alex Montiel","Victor Herrera","Fabiola Castillo",
"",];




      let combobox1 = document.getElementById("especiDoctor");
      let combobox2 = document.getElementById("nombresDoctor");

      function Recorrer(combobox, valores) {
        combobox2.innerHTML = "";
        for (let index of valores) {
          combobox.innerHTML += `<option>${index}</option>`;
        }
      }

      function llenarDepar() {
        Recorrer(combobox1, especialidadDoctor);
      }
      llenarDepar();

      combobox1.addEventListener("change", (e) => {
        let dato = e.target.value;

        switch (dato) {
          case "Odontólogo":
            Recorrer(combobox2, nombreDoctor.slice(0, 4));
            break;
          case "Psicólogo":
            Recorrer(combobox2, nombreDoctor.slice(4, 8));
            break;
          case "Neumólogo":
            Recorrer(combobox2, nombreDoctor.slice(8, 12));
            break;
            case "Neurocirujano":
            Recorrer(combobox2, nombreDoctor.slice(12, 16));
            break;
            case "Otorinolaringólogo":
            Recorrer(combobox2, nombreDoctor.slice(16, 20));
            break;
            case "Cardiólogo":
            Recorrer(combobox2, nombreDoctor.slice(20, 24));
            break;
            case "Nefrólogo":
            Recorrer(combobox2, nombreDoctor.slice(24, 28));
            break;
            case "Dermatólogo":
            Recorrer(combobox2, nombreDoctor.slice(28, 32));
            break;
            case "Seleccione el doctor":
            Recorrer(combobox2, nombreDoctor.slice(33, 35));
            break;
        }
      });


