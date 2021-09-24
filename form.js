function checkNombre (valor) {
    let isValid = false;
    const condicion = new RegExp('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$');

    if(valor.length == 0) {
      isValid = false;
    } else {
      if(valor.length > 30 || valor.length < 4) {
        isValid = false;
      } else {
        if(!condicion.test(valor)){ 
          isValid = false;
        } else {
            isValid = true;
            
            
        }
      }
    }
    return isValid;
}

function checkApellido (valor) {
  let isValid = false;
  const condicion = new RegExp('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$');

  if(valor.length == 0) {
    isValid = false;
  } else {
    if(valor.length > 30 || valor.length < 4) {
      isValid = false;
    } else {
      if(!condicion.test(valor)){ 
        isValid = false;
      } else {
          isValid = true;
          
          
      }
    }
  }
  return isValid;
}