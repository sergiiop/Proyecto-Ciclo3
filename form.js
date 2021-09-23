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
  if (myregex.test(valor)) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  checkContrasena,
  checkTelefono,
};
