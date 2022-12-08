let suma1=0;
let suma2=0;
let suma3=0;
let suma4=0;
let suma5=0;
let suma6=0;
let ingreso=prompt("Ingresa 1 para entarar al menu \nIngresa cualquier caracter para salir ");
if (ingreso=1){
     let menu= prompt("Hola buenos dias \n 01 Buzo negro: $5600 \n 02 Buzo rosa: $5600 \n 03 Pollera negra: $3500 \n 04 Buzo rojo: $5600 \n 05 Zapatillas rojas: $12000 \n 06 Pollera tableada: $3000 \n ver: Mostar total \n fin: Finalizar pedido");
     while (menu != "fin"){

        switch (menu) {
            case "01":
                let cantidad1 = parseInt(prompt("Cuantos productos desea?"));
                suma1=5600*cantidad1;
                break;
            case "02":
                let cantidad2 = parseInt(prompt("Cuantos productos desea?"));
                suma2=5600*cantidad2;
                break;
            case "03":
                let cantidad3 = parseInt(prompt("Cuantos productos desea?"));
                suma3=3500*cantidad3;
                break;
            case "04":
                let cantidad4 = parseInt(prompt("Cuantos productos desea?"));
                suma4=5600*cantidad4;
                break;
            case "05":
                let cantidad5 = parseInt(prompt("Cuantos productos desea?"));
                suma5=12000*cantidad5;
                break;
            case "06":
                let cantidad6 = parseInt(prompt("Cuantos productos desea?"));
                suma6=3000*cantidad6;
                break;

            case "ver":
                let sumaFinal= suma1+ suma2 + suma3 + suma4 + suma5 + suma6;
                alert(sumaFinal);
                break;
             default:
                break;
        }

        menu= prompt("Hola buenos dias \n 01 Buzo negro: $5600 \n 02 Buzo rosa: $5600 \n 03 Pollera negra: $3500 \n 04 Buzo rojo: $5600 \n 05 Zapatillas rojas: $12000 \n 06 Pollera tableada: $3000 \n ver: Mostar total \n fin: Finalizar pedido");
    }

}