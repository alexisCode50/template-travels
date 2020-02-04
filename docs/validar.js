
function validar (){
    //Todas la variables debe estra dentro de la misma funcion
    
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastName").value;
    var correo = document.getElementById("email").value;
    var numero = document.getElementById("number").value;
    var password = document.getElementById("password").value;
    var confirmar = document.getElementById("confirmPW").value;
    
    var elementoCorreo = /\w+@\w+\.+[a-z]/; //caracteres de coreo
    
    // se validan los campos
        if(nombre === "" || apellido === "" || correo === "" || numero === "" || password === "" || confirmar == ""){
            alert("Todos los campos son obligatorios");
            return false; // retorna en falso ya que hay algun error
        } 
        else if(nombre.length > 15){ 
            alert("El Nombre es muy largo"); // se determina el maximo de caracteres
            return false;
        }
        else if(apellido.length > 15){
            alert("El apellido es muy largo"); // se determina el maximo de caracteres
            return false;
        }
        else if(correo.length > 40){
            alert("El correo es muy largo"); // se determina el maximo de caracteres
            return false;
        }
        else if(!elementoCorreo.test(correo)){
            alert("Correo Invalido");
            return false;
        }
        else if(numero.length > 10 || numero.length < 10){ 
            alert("El numero no es valido");         // se determina el maximo y minimo de caracteres
            return false;
        }
        else if(isNaN(numero)){
            alert("El numero no es valido");    // verifica si es un numero
            return false;
        }
        else if(password.length > 8 || password.length < 8){
            alert("La contraseña es incorrecta debe tener minimo 8 caracteres"); //determina el max y el min de caracteres
            return false;
        }
        else if(confirmar != password){
            alert("Las contraseñas no coinsiden");  // valora si las contraseñas coinsiden
            return false;
        }
        else{
            alert("Registro Completo"); // si todo el registro es completo la validacion fue exitosa
        }
    }