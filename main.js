function Menu(id,nombre,precio){
    this.id=id,
    this.nombre=nombre,
    this.precio=precio
}

const menuArr=[["Buzo negro", 5600],["Buzo rosa",5600],["Pollera negra",3500],["Buzo rojo",5600],["Zapatillas rosas",12000],["Pollera tableada",3000]]
const menuObj=[]

for (let i = 0; i < menuArr.length; i++) {
    let productoActual=new Menu(i,menuArr[i][0],menuArr[i][1])
    menuObj.push(productoActual)
}
function stringMenu(){
    let bd="Hola buenos dias \n"
    let mostrarTotal="999 Mostrar Total \n"
    let finalizarPedido="111 Finalizar pedido"
    let menuStr=""
    for (let i = 0; i < menuObj.length; i++) {
         menuStr=menuStr + i +" "+ menuObj[i].nombre +" $"+menuObj[i].precio + "\n"
    }
    return bd + menuStr + mostrarTotal + finalizarPedido  
}

let menuPrompt=stringMenu()

let totalFinal= 0;
let ingreso=prompt("Ingresa 1 para entrar al menu \nIngresa cualquier caracter para salir ")
if (ingreso=1){
    let menu= prompt(menuPrompt)
    while (menu != 111){
         if (menu==999){
              alert(totalFinal);
         }else{
              let cantidad1 = parseInt(prompt("Cuanta cantidad desea?"));
              totalFinal=totalFinal+cantidad1*menuArr[menu][1]
         }
         menu= prompt(menuPrompt)
    }
}