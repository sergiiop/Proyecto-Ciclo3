function checkNombre(valor) {
  let isValid = false;
  const condicion = new RegExp('^[A-Záéíóú -ñ.]+$', 'i');
  // Si input esta vacio entonces no es valido
  if (valor.length == 0) {
    isValid = false;
  } else {
    // Si input no está entre 4 y 30 caracteres no es válido
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
  const condicion = new RegExp('^[A-Záéíóú -ñ.]+$', 'i');
  // Si input esta vacio entonces no es valido
  if (valor.length == 0) {
    isValid = false;
  } else {
    // Si input no está entre 4 y 30 caracteres no es válido
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
  let myregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
  // acepta caracteres especiales
  //let myregex = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;
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

module.exports = {
  checkNombre,
  checkApellido,
  checkTelefono,
  checkCorreo,
  checkContrasena,
};
