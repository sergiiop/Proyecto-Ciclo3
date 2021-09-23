function checkNombre (valor) {
    let isValid = false;
    const condicion = new RegExp('^[A-Záéíóú -ñ.]+$', 'i');

    // Si input esta vacio entonces no es valido
    if(valor.length == 0) {
      isValid = false;
    } else {
      // Si input no está entre 4 y 30 caracteres no es válido
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
