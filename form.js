function checkNombre(valor) {
  let isValid = false;
  const condicion = new RegExp('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$');

  if (valor.length == 0) {
    isValid = false;
  } else {
    if (valor.length > 30 || valor.length < 4) {
      isValid = false;
    } else {
      if (!condicion.test(valor)) {
        isValid = false;
      } else {
        isValid = true;
      }
    }
  }
  return isValid;
}

function checkApellido(valor) {
  let isValid = false;
  const condicion = new RegExp('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$');

  if (valor.length == 0) {
    isValid = false;
  } else {
    if (valor.length > 30 || valor.length < 4) {
      isValid = false;
    } else {
      if (!condicion.test(valor)) {
        isValid = false;
      } else {
        isValid = true;
      }
    }
  }
  return isValid;
}

function checkTelefono(valor) {
  let numbers = /^[0-9]+$/;
  if (numbers.test(valor) && valor.length == 7) {
    return true;
  } else {
    return false;
  }
}

function checkContrasena(valor) {
  const myregex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])([^\s]){8,}$/gm;
  if (myregex.test(valor)) {
    return true;
  } else {
    return false;
  }
}

function checkCorreo(valor) {
  //regex: regular expression
  //El código que sigue implementa por un lado el regex oficial y el regex extraoficial que permite caracteres latinos tales como la ñ.
  let regOficial =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  let regExtraOficial =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //regex vacío
  if (valor.length == 0) {
    return false;
  } else {
    //regex válido oficial y extraoficialmente
    if (regOficial.test(valor) && regExtraOficial.test(valor)) {
      return true;
      //regex válido extraoficialmente
    } else if (regExtraOficial.test(valor)) {
      return true;
      //regex no válido
    } else {
      return false;
    }
  }
}

// const validationForm = () => {
//   const nombre = document.getElementById('nombre').value;
//   const apellido = document.getElementById('apellido').value;
//   const telefono = document.getElementById('telefono').value;
//   const correo = document.getElementById('correo').value;
//   const contraseña = document.getElementById('contraseña').value;

//   if (checkNombre(nombre)) {
//     console.log(nombre);
//   } else {
//     console.log('Error en el nombre');
//   }

//   if (checkApellido(apellido)) {
//     console.log(apellido);
//   } else {
//     console.log('Error en el apellido');
//   }

//   if (checkTelefono(telefono)) {
//     console.log(telefono);
//   } else {
//     console.log('Error en el telefono');
//   }

//   if (checkCorreo(correo)) {
//     console.log(correo);
//   } else {
//     console.log('Error en el correo ');
//   }

//   if (checkContrasena(contraseña)) {
//     console.log(contraseña);
//   } else {
//     console.log('Error en el contraseña');
//   }
// };

module.exports = {
  checkNombre,
  checkApellido,
  checkTelefono,
  checkCorreo,
  checkContrasena,
};