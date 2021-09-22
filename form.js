function checkTelefono(valor) {
    let numbers = /^[0-9]+$/;
    if (numbers.test(valor) && valor.length == 7) {
        return true;
    } else {
        return false;
    }
}