function checkCorreo(valor) {
  //regex: regular expression
  //El código que sigue implementa por un lado el regex oficial y el regex extraoficial que permite caracteres latinos tales como la ñ.
  let regOficial = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  let regExtraOficial = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //regex vacío
  if(valor.length == 0) {
    return false;
  } else{
    //regex válido oficial y extraoficialmente
    if (regOficial.test(valor) && regExtraOficial.test(valor)){
      return true;
    //regex válido extraoficialmente
    } else if (regExtraOficial.test(valor)){
      return true;
    //regex no válido 
    } else {
      return false;
    }
  }
    this.submit();
}
