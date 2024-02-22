export const setupOtroDia = () => {
  const datePicker = document.getElementById("date-picker");
  const resultado = document.getElementById("resultado");
  const btnCalcular = document.getElementById("calcular");

  btnCalcular.addEventListener("click", () => {
    const fechaActual = new Date();
    const fechaSeleccionada = datePicker.value;
    const fechaParseada = new Date(datePicker.value.replace(/-/g, "/")); //https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

    let resultadoFecha;

    if (fechaActual.getFullYear() - fechaParseada.getFullYear() !== 0) {
      resultadoFecha = fechaActual.getFullYear() - fechaParseada.getFullYear();

      if (resultadoFecha > 1) {
        resultado.innerText = `Pasaron "nada más" ${resultadoFecha} años`;
      } else {
        resultado.innerText = `Pasó "nada más" ${resultadoFecha} año`;
      }
    } else {
      if (fechaActual.getMonth() - fechaParseada.getMonth() !== 0) {
        resultadoFecha = fechaActual.getMonth() - fechaParseada.getMonth();

        if (resultadoFecha > 1) {
          resultado.innerText = `Pasaron "nada más" ${resultadoFecha} meses`;
        } else {
          resultado.innerText = `Pasó "nada más" ${resultadoFecha} mes`;
        }
      } else {
        if (fechaActual.getDate() - fechaParseada.getDate() !== 0) {
          resultadoFecha = fechaActual.getDate() - fechaParseada.getDate();

          if (resultadoFecha > 1) {
            resultado.innerText = `Pasaron "nada más" ${resultadoFecha} dias`;
          } else {
            resultado.innerText = `Pasó "nada más" ${resultadoFecha} dia`;
          }
        } else {
          resultado.innerText = `¡Es hoy!`;
        }
      }
    }
  });
};
