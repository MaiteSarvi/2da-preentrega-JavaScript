// function Menu(id,nombre,precio){
//     this.id=id,
//     this.nombre=nombre,
//     this.precio=precio
// }

// const menuArr=[["Buzo negro", 5600],["Buzo rosa",5600],["Pollera negra",3500],["Buzo rojo",5600],["Zapatillas rosas",12000],["Pollera tableada",3000]]
// const menuObj=[]

// for (let i = 0; i < menuArr.length; i++) {
//     let productoActual=new Menu(i,menuArr[i][0],menuArr[i][1])
//     menuObj.push(productoActual)
// }
// function stringMenu(){
//     let bd="Hola buenos dias \n"
//     let mostrarTotal="999 Mostrar Total \n"
//     let finalizarPedido="111 Finalizar pedido"
//     let menuStr=""
//     for (let i = 0; i < menuObj.length; i++) {
//          menuStr=menuStr + i +" "+ menuObj[i].nombre +" $"+menuObj[i].precio + "\n"
//     }
//     return bd + menuStr + mostrarTotal + finalizarPedido  
// }

// let menuPrompt=stringMenu()

// let totalFinal= 0;
// let ingreso=prompt("Ingresa 1 para entrar al menu \nIngresa cualquier caracter para salir ")
// if (ingreso=1){
//     let menu= prompt(menuPrompt)
//     while (menu != 111){
//          if (menu==999){
//               alert(totalFinal);
//          }else{
//               let cantidad1 = parseInt(prompt("Cuanta cantidad desea?"));
//               totalFinal=totalFinal+cantidad1*menuArr[menu][1]
//          }
//          menu= prompt(menuPrompt)
//     }
// }

const contenedorCarrito=document.querySelector("#carrito")
const pfinal=document.querySelector("#total")
const menuContainer=document.querySelector("#menu")
const imag=document.querySelector("#imagenes")
let carrito=[];
let productos=[{id: 0, nombre: "Buzo negro", precio: 5600, cantidad: 0, img:"../assets/imagenes/producto1.jpg"},
{id: 1, nombre: "Buzo rosa", precio: 5600, cantidad: 0, img:"../assets/imagenes/producto2.jpg"},
{id: 2, nombre: "Pollera negra", precio: 3500, cantidad: 0,img:"../assets/imagenes/producto3.jpg"},
{id: 3, nombre: "Buzo rojo", precio: 5600, cantidad: 0,img:"../assets/imagenes/producto4.jpg"},
{id: 4, nombre: "Zapatillas rosas", precio: 12000, cantidad: 0,img:"../assets/imagenes/producto5.jpg"},
{id: 5, nombre: "Pollera tableada", precio: 3600, cantidad: 0,img:"../assets/imagenes/producto6.jpg"}]

function mostrarHTML (){
     productos.forEach(element=>{
        const div=document.createElement("div")
        div.innerHTML=`<div>
          <div class="prueba${element.id}">
          <div class="producto">
              <h2>${element.nombre} - ${element.precio}</h2>
          
              <img src="${element.img}">
          
              <div class="cartitapie">
                  <select id="Buzo Negro">
                      <option disabled selected> 0 </option>
                      <option> 1 </option>
                      <option> 2 </option>
                      <option> 3 </option>
                  </select> 
                  <a id="agregar${element.id}" href="#"><button id="agregar"> Adquirir </button></a>
              </div>
          </div>

          </div>`
          imag.appendChild(div)
          let btnadd=document.querySelector(`#agregar${element.id}`)
               btnadd.addEventListener("click",()=>{
                    agregarCarrito(element.id)
          }) 
     })
}
mostrarHTML();

function agregarCarrito(id) {
     let encontrar = carrito.find(item => item.id == id)
     if (encontrar) {
 
         encontrar.cantidad = encontrar.cantidad + 1;
         document.getElementById(`und${encontrar.id}`).innerHTML =` 
         
         <p id="und${encontrar.id}" class="color-n ">  Und:${encontrar.cantidad} </p>
         `;
         actualizarCarrito();
     }else {
         let producto = productos.find(element => element.id === id);
         producto.cantidad += 1;
     //     carrito.push(producto);
     //     OPTIMIZADO
         carrito = [...carrito, producto];
 
 
 
         mostrarCarrito(carrito);
         actualizarCarrito(carrito)

     }
     localStorage.setItem("carrito", JSON.stringify(carrito));
}

function mostrarCarrito(producto) {
     
     producto.forEach(element => {
          const row = document.createElement("div");
          row.innerHTML = 
               
                  `<div>
                  ${element.nombre}
                  ${element.precio}
                  <p id="und${element.id}" class="color-n">  Und:${element.cantidad} </p>
                  </div>
               `;
               contenedorCarrito.appendChild(row);
     });
}
function actualizarCarrito() {
     pfinal.innerText = carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);
}


