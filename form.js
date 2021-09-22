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
};
