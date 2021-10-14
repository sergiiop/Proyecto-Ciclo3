let registros = [];

function login () {
         
        var usuario = document.getElementById(correo).value; 
        var USUARIO1 = 
        var password = document.getElementById(contrasena).value; 
        var CONTRASEÑA1 = 
        
        if (usuario=="USUARIO1" && password=="CONTRASEÑA1") { 
        window.location="/asesorias.html"; 
        return true
        } 
        return alert ("Usuario o clave equivocados") 
    } 
    

const agregarRegistro = () => {

  const objectForm = {};

  objectForm.nombre = nombre.value;
  objectForm.apellido = apellido.value;
  objectForm.telefono = telefono.value;
  objectForm.correo = correo.value;
  objectForm.contrasena = contrasena.value;
  
  registros.push(objectForm);
  console.log(`Registros totales: ${registros}`);
  
};


var valor = document.getElementById(captcha);

function validarCAPTCHA (valor) {
    
    if (1000 == valor){
        return true;
    }
    return false;
    }

module {
    exports
}