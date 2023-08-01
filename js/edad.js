function verificarEdad() {
  let edad = parseInt(localStorage.getItem("edad"));

  if (isNaN(edad) || edad < 18) {
    solicitarEdad();
  } else {
    mostrarContenido();
  }
}

// función para solicitar la edad

function solicitarEdad() {
  Swal.fire({
    title: 'Verificación de edad',
    text: 'Por favor, ingrese su edad:',
    input: 'number',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: false,
    confirmButtonText: 'Verificar',
    showLoaderOnConfirm: true,
    preConfirm: (edad) => {

      if (!edad || isNaN(edad) || edad < 0) {
        Swal.showValidationMessage('Ingrese una edad válida.');
      }
      return edad;
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {

      localStorage.setItem("edad", result.value);

      if (result.value < 18) {

        Swal.fire({
          icon: 'error',
          title: 'Acceso denegado',
          text: 'Usted es menor de edad y no puede ingresar a la página.',
          confirmButtonText: 'Entendido'
        }).then(() => {
          window.location.href = "contacto.html";
        });
      } else {

        mostrarContenido();
      }
    } else {

      window.location.href = "contacto.html";
    }
  });
}

function mostrarContenido() {

  Swal.fire({
    title: 'Ingrese su nombre',
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: false,
    confirmButtonText: 'Aceptar',
    showLoaderOnConfirm: true,
    preConfirm: (nombre) => {
      if (!nombre) {
        Swal.showValidationMessage('Por favor, ingrese su nombre.');
      }
      return nombre;
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((resultNombre) => {
    if (resultNombre.isConfirmed) {

      Swal.fire({
        title: 'Ingrese su apellido',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: false,
        confirmButtonText: 'Aceptar',
        showLoaderOnConfirm: true,
        preConfirm: (apellido) => {
          if (!apellido) {
            Swal.showValidationMessage('Por favor, ingrese su apellido.');
          }
          return apellido;
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((resultApellido) => {
        if (resultApellido.isConfirmed) {

          let nombreCompleto = resultNombre.value + " " + resultApellido.value;

          Swal.fire({
            icon: 'success',
            title: 'Bienvenido',
            text: 'Tu nombre completo es: ' + nombreCompleto + '\nTu edad es: ' + localStorage.getItem("edad")
          });
        } else {

          Swal.fire({
            icon: 'error',
            title: 'Cancelado',
            text: 'No se pudo obtener tu apellido.'
          });
        }
      });
    } else {

      Swal.fire({
        icon: 'error',
        title: 'Cancelado',
        text: 'No se pudo obtener tu nombre.'
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  verificarEdad();
});