
const carrito = [];

function agregarArticulo(articulo) {
  carrito.push(articulo);
  
  Toastify({
    text: "Carrito Actualizado",
    className: "info",
    position: "left",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    }
  }).showToast();

  actualizarCarrito();
  guardarCarritoEnLocalStorage();
}

function actualizarCarrito() {
  const listaArticulosElement = document.getElementById("listaArticulos");
  listaArticulosElement.innerHTML = "";

  let totalCompra = 0;
  carrito.forEach((articulo) => {
    listaArticulosElement.innerHTML += articulo.nombre + "<br>";
    totalCompra += articulo.precio;
    
  });

  document.getElementById("totalCompra").textContent = "El total de la compra es: $" + totalCompra;
}


function guardarCarritoEnLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  }

function cargarCarritoDesdeLocalStorage() {
  const carritoGuardado = localStorage.getItem("carrito");
  if (carritoGuardado) {
    carrito.push(...JSON.parse(carritoGuardado));
    actualizarCarrito();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const articulosContainer = document.getElementById("articulosContainer");

  articulos.forEach((articulo) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("col-sm-12", "col-md-6", "col-lg-4", "col-xl-3");

    cardElement.innerHTML = `
      <img src="${articulo.src}" class="border rounded" height="400" width="300" alt="${articulo.nombre}">
      <h4 class="text-white mt-2">${articulo.nombre}</h4>
      <p class="text-white">
        <div>
          <h4 class="text-danger">$${articulo.precio}</h4>
          <button type="button" class="btn btn-outline-warning comprar-btn">Comprar</button>
        </div>
      </p>
    `;

    const comprarBtn = cardElement.querySelector(".comprar-btn");
    comprarBtn.addEventListener("click", () => agregarArticulo(articulo));
    articulosContainer.appendChild(cardElement);
    
  });

  cargarCarritoDesdeLocalStorage();
  const finalizarCompraBtn = document.getElementById("finalizarCompra");
  finalizarCompraBtn.addEventListener("click", finalizarCompra);
});

function finalizarCompra() {
  console.log("Datos del carrito enviados al servidor:", carrito);

  Swal.fire({
    text: '¡Compra finalizada! Gracias por tu compra.',
    confirmButtonText: 'Aceptar'
})


console.log
}

