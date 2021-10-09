const registros = [];

const Comparator = (a, b) => {
  if (a.apellido < b.apellido) return -1;
  if (a.apellido > b.apellido) return 1;
  return 0;
};

const ordenarArreglo = (arreglo) => {
  arreglo.sort(Comparator);
  console.log(arreglo);
  return arreglo;
};

const emailFilter = (registro) => {
  if (registro.correo.includes('gmail.com')) {
    return true;
  }
  return false;
};

const filtrarCorreo = (arreglo) => {
  const filtrarPorCorreo = arreglo.filter(emailFilter);
  // for (i in arreglo) {
  //   if (arreglo[i].apellido.includes('gmail.com')) {
  //     filtroPorCorreo.push(arreglo[i]);
  //   }
  // }
  return filtrarPorCorreo;
};

const agregarRegistro = () => {
  // const nombre = document.getElementById('nombre').value;
  // const apellido = document.getElementById('apellido').value;
  // const telefono = document.getElementById('telefono').value;
  // const correo = document.getElementById('correo').value;
  // const contraseña = document.getElementById('contraseña').value;

  const objectForm = {};

  objectForm.nombre = nombre.value;
  objectForm.apellido = apellido.value;
  objectForm.telefono = telefono.value;
  objectForm.correo = correo.value;
  objectForm.contrasena = contrasena.value;
  // console.log(`Registros agregados correctamente: ${arrayForm}`);
  registros.push(objectForm);
  console.log(`Registros totales: ${registros}`);
  // const checkFunctionNombre = checkNombre(nombre);
  // const checkFunctionApellido = checkApellido(apellido);
  // const checkFunctionTelefono = checkTelefono(telefono);
  // const checkFunctionCorreo = checkCorreo(correo);
  // const checkFunctionContraseña = checkContrasena(contraseña);

  // if (
  //   checkFunctionNombre &&
  //   checkFunctionApellido &&
  //   checkFunctionTelefono &&
  //   checkFunctionCorreo &&
  //   checkFunctionContraseña
  // ) {
  // } else {
  //   console.log('Error en el formulario');
  //   if (!checkFunctionNombre) {
  //     console.log('Error en el nombre');
  //   }
  //   if (!checkFunctionApellido) {
  //     console.log('Error en el apellido');
  //   }
  //   if (!checkFunctionTelefono) {
  //     console.log('Error en el telefono');
  //   }
  //   if (!checkFunctionCorreo) {
  //     console.log('Error en el correo');
  //   }
  //   if (!checkFunctionContraseña) {
  //     console.log('Error en la contraseña');
  //   }
  // }
};

module.exports.registros = registros;
module.exports.filtrarCorreo = filtrarCorreo;
module.exports.ordenarArreglo = ordenarArreglo;
module.exports.agregarRegistro = agregarRegistro;
