const arrayGlobal = [];

const agregarRegistro = () => {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const telefono = document.getElementById('telefono').value;
  const correo = document.getElementById('correo').value;
  const contraseña = document.getElementById('contraseña').value;
  
  const arrayForm = [];
  
  const checkFunctionNombre = checkNombre(nombre);
  const checkFunctionApellido = checkApellido(apellido);
  const checkFunctionTelefono = checkTelefono(telefono);
  const checkFunctionCorreo = checkCorreo(correo);
  const checkFunctionContraseña = checkContrasena(contraseña);
  
  if (
    checkFunctionNombre &&
    checkFunctionApellido &&
    checkFunctionTelefono &&
    checkFunctionCorreo &&
    checkFunctionContraseña
  ) {
    arrayForm.push(nombre, apellido, telefono, correo, contraseña);
    console.log(arrayForm);
    arrayGlobal.push(arrayForm);
  } else {
    console.log('Error en el formulario');
    if (!checkFunctionNombre) {
      console.log('Error en el nombre');
    }
    if (!checkFunctionApellido) {
      console.log('Error en el apellido');
    }
    if (!checkFunctionTelefono) {
      console.log('Error en el telefono');
    }
    if (!checkFunctionCorreo) {
      console.log('Error en el correo');
    }
    if (!checkFunctionContraseña) {
      console.log('Error en la contraseña');
    }
  }
  console.log(arrayGlobal);
};

function Comparator(a, b) {
  if (a[1] < b[1]) return -1;
  if (a[1] > b[1]) return 1;
  return 0;
}

const ordenarArreglo = (arreglo) => {
  arreglo.sort(Comparator);
  console.log(arreglo);
  return arreglo;
}

const filtrarCorreo = (arreglo) => {
  let filtroPorCorreo = [];
    for (i in arreglo){
        if (arreglo[i][3].includes("@gmail.com")){
            filtroPorCorreo.push(arreglo[i]);    
        }
    }
    return filtroPorCorreo;
};

module.exports = {
  agregarRegistro,
  ordenarArreglo,
  filtrarCorreo,
};
