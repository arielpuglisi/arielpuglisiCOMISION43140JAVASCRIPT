
let coleccion_usuarios = [];

let ingresos = document.getElementById("ingresos");
let botonCrear = document.getElementById("botonCrear");
let botonResetear = document.getElementById("botonResetear");

botonCrear.addEventListener("click", () => {
  if (validar_formulario()) {
    guardarUsuario();
  }
});

botonResetear.addEventListener("click", () => {
  resetear_form();
});

function validar_formulario() {
  ingresos.innerHTML = "";

  let input_nombre = document.getElementById("nombre").value;
  let input_apellido = document.getElementById("apellido").value;
  let input_edad = document.getElementById("edad").value;
  let input_genero = document.getElementById("genero").value.toLowerCase();
  let input_email = document.getElementById("email").value;

  let arreglo_mensajes = [];

  if (!input_nombre) {
    arreglo_mensajes.push("Ingrese nombre");
  }

  if (!input_apellido) {
    arreglo_mensajes.push("Ingrese apellido");
  }

  if (!input_edad || input_edad <= 18) {
    arreglo_mensajes.push("Ingrese una edad correcta. Debe ser un número mayor a 18");
  }

  if (!input_genero || (input_genero !== "h" && input_genero !== "m")) {
    arreglo_mensajes.push("Ingrese género: debe ser 'H' para hombre o 'M' para mujer");
  }

  if (!input_email) {
    arreglo_mensajes.push("Ingrese un email");
  }
  if (arreglo_mensajes.length > 0) {

    let lista = document.createElement("ul");

    lista.textContent = "No pudimos cargar estos datos: ";

    lista.id = "oo"

    ingresos.appendChild(lista);

    let oo = document.getElementById("oo")

    arreglo_mensajes.forEach(element => {

      let item = document.createElement("li")

      item.textContent = element

      oo.appendChild(item);

    });

  }

  return arreglo_mensajes.length == 0;

}

function guardarUsuario() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = document.getElementById("edad").value;
  let genero = document.getElementById("genero").value;
  let email = document.getElementById("email").value;

  let usuario = new Usuario(nombre, apellido, edad, genero, email);
  coleccion_usuarios.push(usuario);

  // se convierte la coleccion de usuarios a json y se guarda en local storage
  const usuariosJSON = JSON.stringify(coleccion_usuarios);
  localStorage.setItem('usuarios', usuariosJSON);

  // Mostrar aviso de éxito

  Swal.fire({
    text: '¡Los datos del usuario se cargaron exitosamente!.',
    confirmButtonText: 'Aceptar'
  })

}

function resetear_form() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("genero").value = "";
  document.getElementById("email").value = "";
}