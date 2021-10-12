function checkApellido(valor) {
    let isValid = false;

    const condicion = new RegExp('^[A-Záéíóú -ñ.]+$', 'i');


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