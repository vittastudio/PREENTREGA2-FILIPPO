
const arrayProducto = [{
    codigo: 1,
    producto: "Cerveza",
    marca: "Andres",
    precio: 600
},
{
    codigo: 2,
    producto: "Cerveza",
    marca: "Heineken",
    precio: 700
},
{
    codigo: 3,
    producto: "Vino",
    marca: "Santa Julia",
    precio: 700
},
{
    codigo: 4,
    producto: "Gin",
    marca: "La Fuerza",
    precio: 2500
},
{
    codigo: 5,
    producto: "Fernet",
    marca: "Branca",
    precio: 2500
},
{
    codigo: 6,
    producto: "Whisky",
    marca: "Chivas Regal",
    precio: 5500
}
]


let ingresoMenu = prompt(`Ingrese tipo de usuario
1 - Administrador
2 - Cliente`
)



//Menu administrador//

if (ingresoMenu == 1){


let menuAdministrador = prompt(`Ingrese tipo de gestion
1 - Buscar producto por ID
2 - Buscar tipo de producto`
)

    
//Menu usuario//

if (ingresoMenu == 2){
let nombreIngresado = prompt("Ingresa tu nombre")
function pedirNombre(){
    console.log("Tu nombre es $(nombreIngesado)")
}



let edad = parseInt (prompt("Por favor ingrese su edad"))
let edadCompleta = parseInt (edad)


if (edad >= 18){
    console.log("Bienvenido")
    alert("Bienvenido")
}
else{
    console.log("Para poder ingresar usted debe ser mayor a 18 años")
    alert("Para poder ingresar usted debe ser mayor a 18 años")
    exit
}



let metodoPago = true
let optionPago = prompt(`Seleccione metodo de pago
    1 - Tarjeta de debito
    2 - Tarjeta de Credito
    0 - Salir del menu`
    )

let costoCerveza = 500
let costoFernet = 1500
let costoVino = 2000
let costoGin = 2500
let costoWhisky = 4000
let interesTarjeta = 1.30

let menu = true
do{ let verCatalogo = prompt ("¿Queres continuar con la compra?")
if(verCatalogo =="si"){

    let optionMenu = prompt(`Seleccione la bebida que quiere comprar
        1 - Cerveza $500
        comprar(1)
        2 - Fernet $1500
        3 - Vino $2000
        4 - Gin $2500
        5 - Whisky $4000
        0 - Salir del menu`
        )

    switch(optionMenu){
        case "1":
            if(optionMenu == 1){
                let comprarCerveza = parseInt(prompt("¿Cuantas cervezas queres comprar?: "))
                let precioCerveza = costoCerveza * comprarCerveza 
                console.log(precioCerveza)
                break
            }
            if(optionPago == 2){
                let comprarCerveza = parseInt(prompt("¿Cuantas cervezas queres comprar?: "))
                let precioCerveza2 = costoCerveza * comprarCerveza * interesTarjeta
                console.log(precioCerveza2)
                break
            }

        case "2":
            if(optionPago == 1){
                let comprarFernet = parseInt(prompt("¿Cuantos fernet queres comprar?: "))
                let precioFernet = costoFernet * comprarFernet 
                console.log(precioFernet)
                break
            }
            if(optionPago == 2){
                let comprarFernet = parseInt(prompt("¿Cuantos fernet queres comprar?: "))
                let precioFernet2 = costoFernet * comprarFernet * interesTarjeta
                console.log(precioFernet2)
                break
            }
            
            case "3":
                if(optionPago == 1){
                    let comprarVino = parseInt(prompt("¿Cuantos vinos queres comprar?: "))
                    let precioVino = costoVino * comprarVino 
                    console.log(precioVino)
                    break
                }
                if(optionPago == 2){
                    let comprarVino = parseInt(prompt("¿Cuantos vinos queres comprar?: "))
                    let precioVino2 = costoVino * comprarVino * interesTarjeta
                    console.log(precioVino2)
                    break
                }

        case "4":
            if(optionPago == 1){
                let comprarGin = parseInt(prompt("¿Cuantos gin queres comprar?: "))
                let precioGin = costoGin * comprarGin
                console.log(precioGin)
                break
            }
            if(optionPago == 2){
                let comprarGin = parseInt(prompt("¿Cuantos gin queres comprar?: "))
                let precioGin2 = costoGin * comprarGin * interesTarjeta
                console.log(precioGin2)
                break
            }

        case "5":
            if(optionPago == 1){
                let comprarWhisky = parseInt(prompt("¿Cuantos whiskys queres comprar?: "))
                let precioWhisky = costoWhisky * comprarWhisky
                console.log(precioWhisky)
                break
            }
            if(optionPago == 2){
                let comprarWhisky = parseInt(prompt("¿Cuantos whiskys queres comprar?: "))
                let precioWhisky = costoWhisky * comprarWhisky * interesTarjeta
                console.log(precioWhisky2)
                break
            }
            
        case "0":
            alert("Muchas gracias por su visita")
            console.log(final)
            break
        }


if(verCatalogo =="si"){
    
    console.log("funciona")
}

}else {exit}
}while (menu)
}
}
