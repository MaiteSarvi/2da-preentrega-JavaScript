let productos =[];

fetch("/js/productos.json")
    .then(response=>response.json())
    .then(data => {
        productos=data;
        cargarProductos(productos)
    })

const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");
function cargarProductos() {
    productos.forEach(producto =>{
        const div = document.createElement("div");
        div.classList.add("producto")
        div.innerHTML=`
            <img class="producto-imagen"src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="prducto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Añadir al carrito</button>
            </div>
        `;
        contenedorProductos.append(div);
    })
    actualizarBotones ();

}

function agregarAlCarrito(e){
    Toastify({
        text: "Se agregó al carrito",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover

        style: {
          background: "linear-gradient(to right, #000000, #000000c2)",
          borderRadius: "2rem",
          fontSize: ".75rem",
        },
        offset: {
            x: 30, 
            y: 20 
          },
        onClick: function(){} // Callback after click
    }).showToast();

    const idBoton= e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    if(carrito.some(producto=> producto.id === idBoton)){
        const index = carrito.findIndex(producto => producto.id ===idBoton);
        carrito[index].cantidad++;
    } else{
        productoAgregado.cantidad = 1;
        carrito.push(productoAgregado);
    }
    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(carrito));
}
function actualizarNumerito(){
    let nuevoNumerito = carrito.reduce((acc, producto)=> acc+producto.cantidad, 0);
    numerito.innerText=nuevoNumerito
}
function actualizarBotones (){
    botonesAgregar=document.querySelectorAll(".producto-agregar")
    botonesAgregar.forEach(boton=>{
         boton.addEventListener("click", agregarAlCarrito)
    })
}

let  carrito;
const productosEnCarritoLS = localStorage.getItem("productos-en-carrito")
if (productosEnCarritoLS){
   carrito =JSON.parse(productosEnCarritoLS);
} else{
   carrito=[];
}


