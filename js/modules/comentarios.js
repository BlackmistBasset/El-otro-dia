import { format } from "../../node_modules/@formkit/tempo/dist/index.mjs";

export const setupComentarios = () => {
  const contenedorComentarios = document.getElementById("contenedor");
  const inputComentario = document.getElementById("comentario");
  const btnSubirComentario = document.getElementById("subir-comentario");

  const crearComentario = () => {
    const comentarioUsuario = inputComentario.value;
    const fecha = format(new Date(), { date: "full", time: "short" });
    console.log(fecha);
    contenedorComentarios.innerHTML += `
     <div class="comentario">
        <p>${comentarioUsuario}</p>
        <span>${fecha}</span>
      </div>
    `;
  };

  //  btnSubirComentario.addEventListener("click", crearComentario);
};
